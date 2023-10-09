import { MeshRenderer } from "../renderer/mesh-renderer";
import plane from "../meshes/plane";
import { WebGLApp } from "../renderer/webgl";
import { Renderable } from "../renderer/renderable";
import { Transform } from "../renderer/transform";
import { uvRainbow } from "../common-shaders/uv-rainbow";
import { quat } from "gl-matrix";
import torus from "../meshes/torus";

const app = new WebGLApp({ fov: 45 });

const camera = new Transform(
  [0, 0, -6],
  quat.fromEuler(quat.create(), 15, 0, 0)
);

(window as any).ANGLE_X = 15;
(window as any).ANGLE_Y = 0;
(window as any).ANGLE_Z = 0;

app.onUpdate((time: number) => {
  const stride = 2;
  const x = Math.sin(time * 0.0001) * (stride * 2 - stride * 0.5);
  // const y = Math.tan(time * 0.001) * (stride * 2 - stride * 0.5);

  camera.rotation = quat.fromEuler(quat.create(), x, 0, 0);
});

new Renderable(
  app,
  new Transform([0, 0, 4]),
  new MeshRenderer(app, torus, uvRainbow(app), camera, {
    drawMode: app.gl.TRIANGLE_FAN,
  })
);

// new Renderable(
//   app,
//   new Transform([1, 0, 0]),
//   new MeshRenderer(app, plane, uvRainbow(app))
// );

app.start();
