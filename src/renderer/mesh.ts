import { Oops, Shader } from "./shader";

export type MeshConfig = {
  vertexData: Float32Array;
  vertexSize: number;
  positionOffset: number;
  colorOffset: number;
  uvOffset: number;
};

export class Mesh {
  private shader: Shader = Oops;

  constructor(public config: MeshConfig) {}
  shader(shader: Shader) {}
}
