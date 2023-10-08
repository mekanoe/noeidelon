import { Telemetry } from "./telemetry";

export type WebGPUAppConfig = {
  fov?: number;
  context?: GPUCanvasConfiguration;
};

export type RenderHandle = (time: number, app: WebGPUApp) => void;

export class WebGPUApp {
  public canvas: HTMLCanvasElement;
  private _adapter?: GPUAdapter;
  private _device?: GPUDevice;
  private _context?: GPUCanvasContext;
  public telemetry?: Telemetry;
  private jobsToSubmitThisFrame: GPUCommandBuffer[] = [];
  private renderOK = false;

  public registry: {
    onBeforeUpdate: RenderHandle[];
    onAfterUpdate: RenderHandle[];
    onUpdate: RenderHandle[];
    onStart: RenderHandle[];
  } = {
    onBeforeUpdate: [],
    onAfterUpdate: [],
    onUpdate: [],
    onStart: [],
  };

  constructor(public config: WebGPUAppConfig = {}) {
    this.config = {
      fov: 45,
      ...config,
    };
    this.canvas = document.querySelector("canvas") as HTMLCanvasElement;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    if (location.search.includes("telemetry")) {
      this.telemetry = new Telemetry(this);
    }

    this.init().catch((e) => {
      const main = document.querySelector("main");
      if (main) {
        main.innerHTML = `<div><i>your browser didn't let me set up webgpu. firefox nightly or enable <code>dom.webgpu.enable</code>.</i></div>`;
      }

      throw new Error(
        "Unable to initialize WebGPU. Your browser or machine may not support it.",
        e
      );
    });
  }

  async init() {
    if (!navigator.gpu) {
      throw new Error("WebGPU not supported");
    }

    this._adapter = (await navigator.gpu.requestAdapter()) as GPUAdapter;
    if (!this._adapter) {
      throw new Error("No GPU adapter found");
    }

    this._device = await this.adapter.requestDevice();
    if (!this._device) {
      throw new Error("No GPU device found");
    }

    this._context = this.canvas.getContext("webgpu") as GPUCanvasContext;

    this.context.configure({
      device: this.device,
      format: "bgra8unorm",
      alphaMode: "premultiplied",
      ...this.config.context,
    });

    this.renderOK = true;
  }

  awaitRendererReady(timeout: number = 5000) {
    const start = Date.now();
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        if (this.renderOK) {
          return resolve(true);
        }

        if (Date.now() - start > timeout) {
          return reject(`Renderer was not OK within ${timeout}ms`);
        }
      }, 10);
    });
  }

  get context() {
    if (!this._context) {
      throw new Error("WebGPU context not initialized");
    }

    return this._context;
  }

  get adapter() {
    if (!this._adapter) {
      throw new Error("WebGPU adapter not initialized");
    }

    return this._adapter;
  }

  get device() {
    if (!this._device) {
      throw new Error("WebGPU device not initialized");
    }

    return this._device;
  }

  onBeforeUpdate(handle: RenderHandle) {
    this.registry.onBeforeUpdate.push(handle);
  }

  onAfterUpdate(handle: RenderHandle) {
    this.registry.onAfterUpdate.push(handle);
  }

  onUpdate(handle: RenderHandle) {
    this.registry.onUpdate.push(handle);
  }

  onStart(handle: RenderHandle) {
    this.registry.onStart.push(handle);
  }

  doUpdate(time: number) {
    this.jobsToSubmitThisFrame = [];

    this.registry.onBeforeUpdate.forEach((handle) => handle(time, this));
    this.registry.onUpdate.forEach((handle) => handle(time, this));
    this.registry.onAfterUpdate.forEach((handle) => handle(time, this));

    if (this.jobsToSubmitThisFrame.length !== 0) {
      this.device.queue.submit(this.jobsToSubmitThisFrame);
    }
  }

  doStart(time: number = 0) {
    this.registry.onStart.forEach((handle) => handle(time, this));
  }

  async oneShot(time: number = 0) {
    await this.awaitRendererReady();

    this.doStart(time);
    this.doUpdate(time);
  }

  async start() {
    await this.awaitRendererReady();

    this.doStart();

    const run = (time: number) => {
      this.doUpdate(time);
      requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  }

  commit(commandEncoder: GPUCommandBuffer) {
    this.jobsToSubmitThisFrame.push(commandEncoder);
  }
}
