import { WebGPUApp } from "./webgpu";
import oopsWsgl from "./oops.wgsl";

export class Shader {
  private _module: GPUShaderModule | null = null;
  constructor(private code: string[]) {}

  module(app: WebGPUApp) {
    this._module =
      this._module ||
      (this._module = app.device.createShaderModule({
        code: this.code.join("\n"),
      }));

    return this._module;
  }
}

export const Oops = new Shader([oopsWsgl]);
