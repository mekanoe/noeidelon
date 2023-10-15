import { Mesh } from "../../renderer/mesh";

// prettier-ignore
export default new Mesh({
  colors: null,
  faces: new Uint8Array([0,1,2,3,4,0,0,5,3,0,4,1,3,6,4,0,7,5]),
  name: "src/meshes/cube-backdrop/cube-backdrop.ply",
  normals: new Float32Array([0.5773503,0.5773503,0.5773503,1,0,0,0.70710677,0.70710677,0,0,0.70710677,0.70710677,0.70710677,0,0.70710677,0,1,0,0,0,1,0.70710677,0.70710677,0]),
  positions: new Float32Array([-0.10000001,-0.0025735903,-0.10000001,-0.10000001,0.19742644,0.10000001,-0.10000001,-0.0025735903,0.10000001,0.10000001,-0.0025735903,-0.10000001,-0.10000001,0.19742644,-0.10000001,0.10000001,-0.0025735903,0.10000001,0.10000001,0.19742644,-0.10000001,-0.10000001,-0.0025735903,0.10000001]),
  uvs: new Float32Array([0.5,0.5,-5.9604645e-8,1,0,0.49999997,1,0.50000006,0.49999997,1,1,0,1,1,0.50000006,0]),
  vertexCount: 8
});
