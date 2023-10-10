import { Behavior } from "./behavior";
import { MeshRenderer } from "./mesh-renderer";
import { Transform } from "./transform";
import { WebGLApp } from "./webgl";

export class Renderable extends Behavior {
  constructor(
    public app: WebGLApp,
    public transform: Transform,
    public renderer: MeshRenderer
  ) {
    super(app);
  }

  onDraw(time: number) {
    this.renderer.onRenderableUpdate(time, this.transform);
  }
}
