import { Object } from "./object.js";

export class BasicPlane extends Object {
  constructor(app) {
    super(app);

    this.vertexPositions = new Float32Array([
      -1.0, -1.0, +1.0, -1.0, -1.0, +1.0, +1.0, +1.0,
    ]);
    this.positionBuffer = this.initBuffer(this.vertexPositions);
    this.textureBuffer = this.initBuffer(
      new Float32Array([0, 0, 1, 0, 0, 1, 1, 1])
    );

    this.app.onUpdate(() => this.draw2D());
  }
}
