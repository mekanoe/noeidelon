import { Oops, Shader } from "./shader";
import { WebGPUApp } from "./webgpu";

export type MeshConfig = {
  mesh: Float32Array;
  positionSize: number;
  colorSize: number;
  uvSize: number;
};

export class Mesh {
  private _shader: Shader = Oops;

  constructor(public config: MeshConfig) {}

  shader(shader: Shader) {
    this._shader = shader;
    return this;
  }

  buffer(app: WebGPUApp) {
    const buffer = app.device.createBuffer({
      size: this.config.mesh.byteLength,
      usage: GPUBufferUsage.VERTEX,
      mappedAtCreation: true,
    });
    new Float32Array(buffer.getMappedRange()).set(this.config.mesh);
    buffer.unmap();

    return buffer;
  }

  pipeline(app: WebGPUApp, config: Record<string, any>) {
    const module = this._shader.module(app);
    return app.device.createRenderPipeline({
      layout: "auto",
      vertex: {
        module,
        entryPoint: "main",
        buffers: [
          {
            arrayStride: 4,
            attributes: [
              {
                // position
                shaderLocation: 0,
                offset: 0,
                format: "float32x4",
              },
              {
                // color
                shaderLocation: 2,
                offset: this.config.positionSize,
                format: "float32x4",
              },
              {
                // uv
                shaderLocation: 1,
                offset: this.config.positionSize + this.config.colorSize,
                format: "float32x4",
              },
            ],
          },
        ],
      },
      fragment: {
        module,
        entryPoint: "main",
        targets: [
          {
            format: "rgba8unorm",
          },
        ],
      },
      primitive: {
        topology: "triangle-list",
        cullMode: config.cullMode ?? "back",
      },
      depthStencil: config.stencil && {
        depthWriteEnabled: true,
        depthCompare: "less",
        format: "depth24plus",
      },
    });
  }
}
