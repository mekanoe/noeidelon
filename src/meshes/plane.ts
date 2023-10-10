
import { Mesh } from "../renderer/mesh";

// prettier-ignore
const positions = new Float32Array([1,-1,0,-1,1,0,-1,-1,0,1,1,0]);

// prettier-ignore
const colors = null;

// prettier-ignore
const uvs = new Float32Array([1,0,0,1,0,0,1,1]);

    
// prettier-ignore
const normals = null;
    
// prettier-ignore
const faces = new Uint32Array([0,1,2,0,3,1]);

export default new Mesh({
  colors,
  faces,
  name: "src/meshes/plane.ply",
  normals,
  positions,
  uvs,
  vertexCount: 4
});
