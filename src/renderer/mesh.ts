export type MeshConfig = {
  mesh: Float32Array;
  positionSize: number;
  colorSize: number;
  uvSize: number;
  vertexCount: number;
  stride: number;
  name: string;
};

export class Mesh {
  constructor(public config: MeshConfig) {}

  get name() {
    return this.config.name;
  }
}
