import { Behavior } from "./behavior";
import { Mesh } from "./mesh";
import { WebGPUApp } from "./webgpu";

export class MeshRenderer extends Behavior {
  private depthTexture?: GPUTexture;
  private uniformBuffer?: GPUBuffer;
  private texture?: GPUTexture;
  private sampler?: GPUSampler;
  private uniformBindGroup?: GPUBindGroup;
  private renderPassDescriptor?: GPURenderBundleDescriptor;

  constructor(
    public app: WebGPUApp,
    public mesh: Mesh
  ) {
    super(app);
  }

  override onStart() {
    console.log("hello from meshrenderer!");
    console.log(`i've got a ${this.mesh.constructor.name}`);
  }

  override onUpdate(time: number) {}
}
