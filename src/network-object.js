import { Object } from "./object";

export class NetworkObject extends Object {
  constructor(app) {
    super(app);

    this.loaded = false;
  }

  register() {
    app.onUpdate(() => {
      if (this.loaded) {
        this.draw3D();
      }
    });
  }

  async load(url) {
    const response = await fetch(url);
    await this.handleModelData(response);
    this.loaded = true;
  }
}
