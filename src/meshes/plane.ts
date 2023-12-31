import { Mesh } from "../renderer/mesh";

// prettier-ignore
export default new Mesh({
  colors: null,
  faces: new Uint8Array([0,1,2,0,3,1]),
  name: "src/meshes/plane.ply",
  normals: null,
  positions: new Float32Array([1,-1,0,-1,1,0,-1,-1,0,1,1,0]),
  uvs: new Float32Array([1,0,0,1,0,0,1,1]),
  vertexCount: 4
});
