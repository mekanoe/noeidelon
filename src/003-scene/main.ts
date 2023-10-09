import { MeshRenderer } from "../renderer/mesh-renderer";
import { WebGLApp } from "../renderer/webgl";
import { Renderable } from "../renderer/renderable";
import { Transform } from "../renderer/transform";
import torus from "../meshes/torus";
import { errorShader } from "../common-shaders/error";

const app = new WebGLApp({ fov: 45 });

new Renderable(
  app,
  new Transform(),
  new MeshRenderer(app, torus, errorShader(app))
);

app.start();
