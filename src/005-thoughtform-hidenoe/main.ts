import { MeshRenderer } from "../renderer/mesh-renderer";
import { WebGLApp } from "../renderer/webgl";
import { Renderable } from "../renderer/renderable";
import { Transform, etoq, v3 } from "../renderer/transform";
import plane from "../meshes/plane";
import texture0 from "../meshes/trianglething/textures/texture0.png";
import { Texture } from "../renderer/texture";
import { outer } from "./shaders/outer";
import uvsphere from "../meshes/uvsphere";
import { basic } from "../common-shaders/basic";
import { noe } from "./shaders/noe";
import uvsphereInverted from "../meshes/uvsphere-inverted";

const app = new WebGLApp({ fov: 45 });
const light = new Transform(v3(-5));

const camera = new Transform([0, 0, 2], etoq([0, 0, 0]));
const transformPlane = new Transform(v3(0), etoq([0, 180, 0]), v3(1.8));
const transformSphere = new Transform(v3(0), etoq([0, 180, 180]), v3(0.6));

// app.onUpdate((time, app) => {
//   // const wiggle = 40 * (Math.sin(time) * 0.001);
//   // camera.position = [wiggle, 2, 4 - wiggle];
// });

new Renderable(
  app,
  transformPlane,
  new MeshRenderer(app, plane, outer(app), camera).configure({})
);

new Renderable(
  app,
  transformSphere,
  new MeshRenderer(app, plane, noe(app), camera).configure({})
);

// createGizmo(app, camera, light);

app.start();
