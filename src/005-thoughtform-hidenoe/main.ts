import { MeshRenderer } from "../renderer/mesh-renderer";
import { WebGLApp } from "../renderer/webgl";
import { Renderable } from "../renderer/renderable";
import { Transform, etoq, v3 } from "../renderer/transform";
import plane from "../meshes/plane";
import { outer, outerFrags } from "./shaders/outer";
import { frags, noe } from "./shaders/noe";
import { createGizmo } from "../renderer/gizmo";

const app = new WebGLApp({ fov: 45 });

const camera = new Transform([0, 0, 2], etoq([0, 0, 0]));

const light = new Transform([1, -1, 0], etoq([0, 0, 0]));

const transformPlane = new Transform(v3(0), etoq([0, 180, 0]), v3(1.8));
const transformSphere = new Transform(v3(0), etoq([0, 180, 180]), v3(0.6));

document.body.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;
  const { clientWidth, clientHeight } = document.body;

  const screenX = clientX / clientWidth;
  const screenY = clientY / clientHeight;

  const centeredX = screenX * 2 - 1;
  const centeredY = screenY * 2 - 1;

  light.position[1] = centeredX;
  light.position[0] = centeredY;
});

app.onUpdate((time, app) => {});

let noeShader = frags.normal;
let hShader = outerFrags.normal;
if (location.search.includes("alt1")) {
  noeShader = frags.debug;
}

if (location.search.includes("alt2")) {
  noeShader = frags.alt2;
}

if (location.search.includes("alt3")) {
  hShader = outerFrags.alt3;
}

new Renderable(
  app,
  transformPlane,
  new MeshRenderer(app, plane, outer(app, hShader), camera).configure({})
);

new Renderable(
  app,
  transformSphere,
  new MeshRenderer(app, plane, noe(app, noeShader), camera, light).configure({})
);

// createGizmo(app, camera, light);

app.start();
