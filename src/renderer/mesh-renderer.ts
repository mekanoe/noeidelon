import { Mat4, mat4, vec3 } from "wgpu-matrix";
import { Behavior } from "./behavior";
import { Mesh } from "./mesh";
import { Shader } from "./shader";
import { WebGPUApp } from "./webgpu";

export class MeshRenderer extends Behavior {
  private depthTexture?: GPUTexture;
  private uniformBuffer?: GPUBuffer;
  private vertexBuffer?: GPUBuffer;
  private texture?: GPUTexture;
  private sampler?: GPUSampler;
  private uniformBindGroup?: GPUBindGroup;
  private renderPassDescriptor?: GPURenderPassDescriptor;
  private pipeline?: GPURenderPipeline;
  private viewMatrix = mat4.translate(
    mat4.identity(),
    vec3.fromValues(0, 0, -4)
  );
  private projectionMatrix = mat4.perspective(
    2 * Math.PI * 0.2,
    1920 / 1080,
    1,
    100
  );

  constructor(
    public app: WebGPUApp,
    public mesh: Mesh,
    public shader: Shader,
    public textures?: any[]
  ) {
    super(app);
  }

  onStart() {
    this.projectionMatrix = mat4.perspective(
      2 * Math.PI * 0.2,
      this.app.canvas.width / this.app.canvas.height,
      1,
      100
    );

    this.depthTexture = this.app.device.createTexture({
      size: [this.app.canvas.width, this.app.canvas.height],
      format: "depth24plus",
      usage: GPUTextureUsage.RENDER_ATTACHMENT,
    });

    // float32x4x4 + float32
    this.uniformBuffer = this.app.device.createBuffer({
      size: 4 * 16 + 4,
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

    this.vertexBuffer = this.mesh.buffer(this.app);
  }

  private writeUniforms(modelViewProjection: Mat4, time: number) {
    if (!this.uniformBuffer) {
      return;
    }

    const {
      device: { queue },
    } = this.app;

    const mvpBuf = modelViewProjection as Float32Array;
    queue.writeBuffer(
      this.uniformBuffer,
      0,
      mvpBuf.buffer,
      mvpBuf.byteOffset,
      mvpBuf.length
    );

    const timeBuf = new Float32Array([time]);
    queue.writeBuffer(
      this.uniformBuffer,
      mvpBuf.length + 1,
      timeBuf.buffer,
      timeBuf.byteOffset,
      timeBuf.byteLength
    );
  }

  onUpdate(time: number) {
    if (
      !this.renderPassDescriptor ||
      !this.pipeline ||
      !this.uniformBindGroup ||
      !this.vertexBuffer
    ) {
      return;
    }

    const mvp = mat4.multiply(this.projectionMatrix, this.viewMatrix);
    this.writeUniforms(mvp, time);

    const { device } = this.app;

    const commandEncoder = device.createCommandEncoder();
    const passEncoder = commandEncoder.beginRenderPass(
      this.renderPassDescriptor
    );

    passEncoder.setPipeline(this.pipeline);
    passEncoder.setBindGroup(0, this.uniformBindGroup);
    passEncoder.setVertexBuffer(0, this.vertexBuffer);
    passEncoder.draw(this.mesh.config.vertexCount);
    passEncoder.end();

    this.app.commit(commandEncoder.finish());
  }
}
