import { Behavior } from "./behavior";
import { Mesh } from "./mesh";
import { Shader } from "./shader";
import { WebGPUApp } from "./webgpu";

export class MeshRenderer extends Behavior {
  private depthTexture?: GPUTexture;
  private uniformBuffer?: GPUBuffer;
  private texture?: GPUTexture;
  private sampler?: GPUSampler;
  private uniformBindGroup?: GPUBindGroup;
  private renderPassDescriptor?: GPURenderPassDescriptor;
  private pipeline?: GPURenderPipeline;

  constructor(
    public app: WebGPUApp,
    public mesh: Mesh,
    public shader: Shader
  ) {
    super(app);
  }

  onStart() {
    this.depthTexture = this.app.device.createTexture({
      size: [this.app.canvas.width, this.app.canvas.height],
      format: "depth24plus",
      usage: GPUTextureUsage.RENDER_ATTACHMENT,
    });

    this.uniformBuffer = this.app.device.createBuffer({
      size: 4 * 4 + 4,
      usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
    });

    this.pipeline = this.mesh.pipeline(this.app, this.shader, {});

    this.uniformBindGroup = this.app.device.createBindGroup({
      layout: this.pipeline.getBindGroupLayout(0),
      entries: [
        {
          binding: 0,
          resource: {
            buffer: this.uniformBuffer,
          },
        },
      ],
    });

    this.renderPassDescriptor = {
      colorAttachments: [
        // {
        //   view: undefined as any, // defined in onUpdate
        //   clearValue: { r: 1, g: 0, b: 1, a: 1 },
        //   loadOp: "clear",
        //   storeOp: "store",
        // },
      ],
      depthStencilAttachment: {
        view: this.depthTexture.createView(),
        depthClearValue: 1.0,
        depthLoadOp: "clear",
        depthStoreOp: "store",
      },
    };
  }

  onUpdate(time: number) {}
}
