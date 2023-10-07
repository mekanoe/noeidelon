import { Telemetry } from "./telemetry";

export type WebGPUAppConfig = {
  fov?: number;
  context?: GPUCanvasConfiguration;
};

export class WebGPUApp {
  public canvas: HTMLCanvasElement;
  private _adapter?: GPUAdapter;
  private _device?: GPUDevice;
  private _context?: GPUCanvasContext;
  public telemetry: Telemetry;

  constructor(public config: WebGPUAppConfig = {}) {
    this.config = {
      fov: 45,
      ...config,
    };
    this.canvas = document.querySelector("canvas") as HTMLCanvasElement;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.telemetry = new Telemetry(this);

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
}
