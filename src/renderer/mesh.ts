export type MeshConfig = {
  colors: Uint8Array | Uint16Array | null;
  faces: Uint32Array | Uint16Array | Uint8Array;
  name: string;
  normals: Float32Array | null;
  positions: Float32Array;
  uvs: Float32Array | null;
  vertexCount: number;
};

export class Mesh {
  constructor(public config: MeshConfig) {}

  get name() {
    return this.config.name;
  }
}
