import { mat4, vec3, quat } from "gl-matrix";

export class Transform {
  constructor(
    public position = vec3.create(),
    public rotation = quat.create(),
    public scale = vec3.fromValues(1, 1, 1)
  ) {}

  toMat4() {
    return mat4.fromRotationTranslationScale(
      mat4.create(),
      this.rotation,
      this.position,
      this.scale
    );
  }
}
