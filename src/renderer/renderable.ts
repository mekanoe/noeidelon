import { Behavior } from "./behavior";
import { createGizmo } from "./gizmo";
import { MeshRenderer } from "./mesh-renderer";
import { Transform } from "./transform";
import { WebGLApp } from "./webgl";

export class Renderable extends Behavior {
  constructor(
    public app: WebGLApp,
    public transform: Transform,
    public renderer: MeshRenderer,
    enableGizmo: boolean = false
  ) {
    super(app);

    if (enableGizmo) createGizmo(app, renderer.camera, transform);
  }

  onDraw(time: number) {
    this.renderer.onRenderableUpdate(time, this.transform);
  }
}
