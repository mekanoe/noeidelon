import { Behavior } from "./behavior";
import { WebGLApp } from "./webgl";
import bump from "./helper-textures/bump.png";

export class Texture {
  public texture: ImageBitmap | Uint8Array | null = null;
  public width: number = 0;
  public height: number = 0;

  constructor(
    public app: WebGLApp,
    public url: string,
    public config: { uvClamp?: boolean } = {}
  ) {}

  setImage(data: Uint8Array, width: number, height: number) {
    this.texture = data;
    this.width = width;
    this.height = height;
    return this;
  }

  async loadImage() {
    if (this.url === "manual") {
      if (this.texture === null) {
        throw new Error("manual specified, but texture was not ready...");
      }
      return;
    }

    if (this.texture !== null) {
      return;
    }

    this.app.telemetry?.addTextures(-1);
    this.app.loading("Fetching textures...");

    const image = new Image();
    return new Promise((resolve, reject) => {
      image.onload = async () => {
        this.texture = await createImageBitmap(image, {
          imageOrientation: "flipY",
        });
        this.width = this.texture.width;
        this.height = this.texture.height;
        this.app.telemetry?.addTextures(2);
        resolve(void 0);
      };

      image.onerror = (e) => {
        this.app.telemetry?.addTextures(1);
        reject(
          new Error(`texture load of ${this.url} failed: ${e.toString()}`)
        );
      };

      image.src = this.url;
    });
  }
}
