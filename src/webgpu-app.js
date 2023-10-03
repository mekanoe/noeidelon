import { Telemetry } from "./telemetry.js";

export class WebGPUApp {
  constructor(config) {
    this.config = config;
    this.canvas = document.querySelector("canvas");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.telemetry = new Telemetry(this);

    this.init().catch((e) => {
      console.error(e);
      document.querySelector(
        "main"
      ).innerHTML = `<div><i>your browser didn't let me set up webgpu. firefox nightly or enable <code>dom.webgpu.enable</code>.</i></div>`;
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

    this.adapter = await navigator.gpu.requestAdapter();
    if (!this.adapter) {
      throw new Error("No GPU adapter found");
    }

    this.device = await this.adapter.requestDevice();
    if (!this.device) {
      throw new Error("No GPU device found");
    }

    this.context = this.canvas.getContext("webgpu");
  }
}
