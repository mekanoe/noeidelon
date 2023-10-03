import { NetworkObject } from "./network-object";

export class glTFObject extends NetworkObject {
  constructor(app) {
    super(app);
    this.register();
  }

  async handleModelData(response) {
    const raw = await response.json();
  }
}
