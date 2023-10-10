import { Telemetry } from "./telemetry";

export type WebGPUAppConfig = {
  fov?: number;
  context?: GPUCanvasConfiguration;
  zNear?: number;
  zFar?: number;
};

export type RenderHandle = (time: number, app: WebGLApp) => void;

export class WebGLApp {
  public canvas: HTMLCanvasElement;
  public telemetry?: Telemetry;
  public gl: WebGL2RenderingContext;

  public registry: {
    onBeforeUpdate: RenderHandle[];
    onAfterUpdate: RenderHandle[];
    onUpdate: RenderHandle[];
    onStart: RenderHandle[];
    onDraw: RenderHandle[];
  } = {
    onBeforeUpdate: [],
    onAfterUpdate: [],
    onUpdate: [],
    onStart: [],
    onDraw: [],
  };

  constructor(public config: WebGPUAppConfig = {}) {
    try {
      this.canvas = document.querySelector("canvas") as HTMLCanvasElement;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;

      const context = this.canvas.getContext("webgl2");
      if (!context) {
        throw new Error("Canvas was unable to get a webgl2 context");
      }
      const gl = (this.gl = context);
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);

      // this.gl.getExtension("OES_element_index_uint"); // default

      if (location.search.includes("telemetry")) {
        this.telemetry = new Telemetry(this);
      }
    } catch (e) {
      const main = document.querySelector("main");
      if (main) {
        main.innerHTML = `<div><i>your browser didn't let me set up webgl.</i></div>`;
      }

      throw new Error(
        `Unable to initialize WebGL. Your browser or machine may not support it.\n  -> ${e}`
      );
    }
  }

  get aspect() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  clear() {
    const gl = this.gl;
    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
    gl.clearDepth(1.0); // Clear everything
    gl.enable(gl.DEPTH_TEST); // Enable depth testing
    gl.depthFunc(gl.LEQUAL); // Near things obscure far things
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
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

  onDraw(handle: RenderHandle) {
    this.registry.onDraw.push(handle);
  }

  doUpdate(time: number) {
    this.registry.onBeforeUpdate.forEach((handle) => handle(time, this));
    this.registry.onUpdate.forEach((handle) => handle(time, this));
    this.registry.onAfterUpdate.forEach((handle) => handle(time, this));

    this.registry.onDraw.forEach((handle) => handle(time, this));
  }

  doStart(time: number = 0) {
    this.clear();
    this.registry.onStart.forEach((handle) => handle(time, this));
  }

  async oneShot(time: number = 0) {
    this.doStart(time);
    this.doUpdate(time);
  }

  async start() {
    this.doStart();

    const run = (time: number) => {
      this.doUpdate(time);
      requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  }
}
