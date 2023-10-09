import { Mesh } from "../renderer/mesh";

// prettier-ignore
const mesh = new Float32Array([
  // f4 position,   f4 color,     f2 uv
  -1, -1, 0, 1,     1, 1, 1, 1,   0, 0,
   1, -1, 0, 1,     1, 1, 1, 1,   1, 0,
  -1,  1, 0, 1,     1, 1, 1, 1,   0, 1,
   1,  1, 0, 1,     1, 1, 1, 1,   1, 1,
]);

export default new Mesh({
  mesh,
  positionSize: 4,
  colorSize: 4,
  uvSize: 2,
  vertexCount: 4,
  stride: 10,
  name: "plane",
});
