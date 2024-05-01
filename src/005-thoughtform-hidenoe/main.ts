import { MeshRenderer } from "../renderer/mesh-renderer";
import { WebGLApp } from "../renderer/webgl";
import { Renderable } from "../renderer/renderable";
import { Transform, etoq, v3 } from "../renderer/transform";
import plane from "../meshes/plane";
import { outer } from "./shaders/outer";
import { noe } from "./shaders/noe";
import { createGizmo } from "../renderer/gizmo";

const useDebug = location.search.includes("alt1");

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

new Renderable(
  app,
  transformPlane,
  new MeshRenderer(app, plane, outer(app), camera).configure({})
);

new Renderable(
  app,
  transformSphere,
  new MeshRenderer(app, plane, noe(app, useDebug), camera, light).configure({})
);

// createGizmo(app, camera, light);

app.start();
