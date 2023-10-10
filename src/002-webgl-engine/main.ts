// // This one is archived.

// import { MeshRenderer } from "../renderer/mesh-renderer";
// import plane from "../meshes/plane";
// import { WebGLApp } from "../renderer/webgl";
// import { Renderable } from "../renderer/renderable";
// import { Transform } from "../renderer/transform";
// import { uvRainbow } from "../common-shaders/uv-rainbow";
// import { quat } from "gl-matrix";
// import torus from "../meshes/torus";

// const app = new WebGLApp({ fov: 45 });

// const camera = new Transform(
//   [0, 0, -6],
//   quat.fromEuler(quat.create(), 15, 0, 0)
// );

// const modelTransform = new Transform([0, 0, 4]);

// app.onUpdate((time: number) => {
//   const cameraStride = 3;
//   const x = Math.sin(time * 0.0001) * (cameraStride * 2 - cameraStride * 0.5);

//   camera.rotation = quat.fromEuler(quat.create(), x, 0, 0);
//   // modelTransform.rotation = quat.fromEuler(quat.create(), x, 0, 0);
// });

// new Renderable(
//   app,
//   modelTransform,
//   new MeshRenderer(app, torus, uvRainbow(app), camera, {
//     drawMode: app.gl.TRIANGLE_FAN,
//   })
// );

// // new Renderable(
// //   app,
// //   new Transform([1, 0, 0]),
// //   new MeshRenderer(app, plane, uvRainbow(app))
// // );

// app.start();
