import { mat4, vec3, quat } from "gl-matrix";

export class Transform {
  constructor(
    public position = vec3.create(),
    public rotation = quat.create(),
    public scale = vec3.fromValues(1, 1, 1)
  ) {}

  rotateEuler(x: number, y: number, z: number) {
    quat.fromEuler(this.rotation, x, y, z);
    return this;
  }

  toMat4() {
    const mat = mat4.create();
    mat4.fromRotationTranslationScale(
      mat,
      this.rotation,
      this.position,
      this.scale
    );
    return mat;
  }
}

export const etoq = (v3: vec3): quat =>
  quat.fromEuler(quat.create(), v3[0], v3[1], v3[2]);

export const v3 = (v: number): vec3 => [v, v, v];
