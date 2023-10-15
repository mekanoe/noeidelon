import { Behavior } from "./behavior";
import { WebGLApp } from "./webgl";

export class Texture {
  public texture: ImageBitmap | Uint8Array | null = null;
  public width: number = 0;
  public height: number = 0;

  constructor(
    public app: WebGLApp,
    public url: string
  ) {}

  setImage(data: Uint8Array, width: number, height: number) {
    this.texture = data;
    this.width = width;
    this.height = height;
    return this;
  }

  async loadImage() {
    this.app.telemetry?.addTextures(-1);
    this.app.loading("Fetching textures...");

    if (this.url === "manual") {
      if (this.texture === null) {
        throw new Error("manual specified, but texture was not ready...");
      }
      return;
    }

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

export const White = (app: WebGLApp) =>
  new Texture(app, "manual").setImage(
    new Uint8Array([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
    2,
    2
  );
export const Black = (app: WebGLApp) =>
  new Texture(app, "manual").setImage(
    new Uint8Array([0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1]),
    2,
    2
  );
export const WhyBroke = (app: WebGLApp) =>
  new Texture(app, "manual").setImage(
    new Uint8Array([1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1]),
    2,
    2
  );
