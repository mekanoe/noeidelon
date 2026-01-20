import { outer } from "../005-thoughtform-hidenoe/shaders/outer";
import plane from "../meshes/plane";
import uvsphereInverted from "../meshes/uvsphere-inverted";
import { MeshRenderer } from "../renderer/mesh-renderer";
import { Renderable } from "../renderer/renderable";
import { etoq, Transform, v3 } from "../renderer/transform";
import { WebGLApp } from "../renderer/webgl";
import { rail } from "./shaders/rail";

const app = new WebGLApp({ fov: 45 });

const camera = new Transform([0, 0, 0], etoq([0, 0, 0]));

const transformRail = new Transform(v3(0), etoq(v3(0)), [1, 1, 1]);
// new Renderable(
//   app,
//   transformRail,
//   new MeshRenderer(app, plane, outer(app), camera).configure({})
// );
new Renderable(
  app,
  transformRail,
  new MeshRenderer(app, plane, rail(app), camera).configure({
    projectionMode: "orthographic",
  })
);

app.start();
