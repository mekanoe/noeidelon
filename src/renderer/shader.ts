import { WebGPUApp } from "./webgpu";
import oopsWsgl from "./oops.wgsl";

const pragmaRegexp = new RegExp("#pragma ([a-z]+) ([a-zA-Z_0-9]+)", "g");

export class Shader {
  private _module: GPUShaderModule | null = null;
  public vertexMain: string = "main";
  public fragmentMain: string = "main";
  public code: string;

  constructor(...code: string[]) {
    this.code = code.join("\n");

    // pragma preprocessing
    const matches = this.code.matchAll(pragmaRegexp);
    for (const match of matches || []) {
      switch (match[1]) {
        case "fragment":
          this.fragmentMain = match[2];
          break;
        case "vertex":
          this.vertexMain = match[2];
          break;
      }
    }
  }

  module(app: WebGPUApp) {
    return (this._module =
      this._module ||
      (this._module = app.device.createShaderModule({
        code: this.code,
      })));
  }
}

export const Oops = new Shader(oopsWsgl);
