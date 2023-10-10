import { MeshRenderer } from "../renderer/mesh-renderer";
import { WebGLApp } from "../renderer/webgl";
import { Renderable } from "../renderer/renderable";
import { Transform } from "../renderer/transform";
import torus from "../meshes/torus";
import { errorShader } from "../common-shaders/error";
import plane from "../meshes/plane";
import { uvRainbow } from "../common-shaders/uv-rainbow";
import uvsphere from "../meshes/uvsphere";
import { quat } from "gl-matrix";
import trianglething from "../meshes/trianglething";
import teapot from "../meshes/teapot";

const app = new WebGLApp({ fov: 45 });

const camera = new Transform([0, -2, -6]);

new Renderable(
  app,
  new Transform(),
  new MeshRenderer(app, trianglething, uvRainbow(app), camera).configure({})
);

// new Renderable(
//   app,
//   new Transform(),
//   new MeshRenderer(app, torus, uvRainbow(app), camera).configure({})
// );

app.start();
