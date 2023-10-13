import { Behavior } from "./behavior";
import { WebGLApp } from "./webgl";

export class Texture extends Behavior {
  public texture: Uint8Array | null = null;

  constructor(
    public app: WebGLApp,
    public url: string
  ) {
    super(app);
  }

  async onStart(_: never, app: WebGLApp) {
    app.loading("Fetching textures...");
  }
}
