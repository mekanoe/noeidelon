import { MeshRenderer } from "../renderer/mesh-renderer";
import { WebGLApp } from "../renderer/webgl";
import { Renderable } from "../renderer/renderable";
import { Transform, etoq, v3 } from "../renderer/transform";
import torus from "../meshes/torus";
import { errorShader } from "../common-shaders/error";
import plane from "../meshes/plane";
import { uvRainbow } from "../common-shaders/uv-rainbow";
import uvsphere from "../meshes/uvsphere";
import { mat4, quat } from "gl-matrix";
import trianglething from "../meshes/trianglething";
import teapot from "../meshes/teapot";
import { basic } from "../common-shaders/basic";

const app = new WebGLApp({ fov: 45 });

const camera = new Transform([3, 3, 5], etoq([-15, 26, 0]));
const light = new Transform([1, 1, 0]);

const transform = new Transform(v3(0), etoq([0, 0, 0]));

app.onUpdate(() => {
  quat.rotateY(transform.rotation, transform.rotation, 0.001);
});

new Renderable(
  app,
  transform,
  new MeshRenderer(app, teapot, basic(app), camera, light).configure({})
);

app.start();
