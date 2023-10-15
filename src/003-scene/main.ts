import { MeshRenderer } from "../renderer/mesh-renderer";
import { WebGLApp } from "../renderer/webgl";
import { Renderable } from "../renderer/renderable";
import { Transform, etoq, v3 } from "../renderer/transform";
import { quat } from "gl-matrix";
import { trianglething, texture0, texture1 } from "../meshes/trianglething";
import teapot from "../meshes/teapot";
import { basic } from "../common-shaders/basic";
import { Texture } from "../renderer/texture";
import { errorShader } from "../common-shaders/error";
import { basicVertexRounding } from "../common-shaders/basic-vertex-rounding";

const app = new WebGLApp({ fov: 45 });

const camera = new Transform([2, 3, 3], etoq([-15, 40, 0]));
const light = new Transform([1, 1, 0]);

const transform = new Transform(v3(0), etoq([0, 0, 0]));
const transform2 = new Transform([-3, 0, 1], etoq([0, 0, 0]));

const trithingTexture = new Texture(app, texture0);
const trithingTextureNormals = new Texture(app, texture1);

app.onUpdate(() => {
  quat.rotateY(transform.rotation, transform.rotation, 0.001);
  quat.rotateY(transform2.rotation, transform2.rotation, 0.001);
});

new Renderable(
  app,
  transform,
  new MeshRenderer(
    app,
    trianglething,
    basicVertexRounding(app)
      .addTexture("texture0", trithingTexture)
      .addTexture("texture1", trithingTextureNormals),
    camera,
    light
  ).configure({})
);

new Renderable(
  app,
  transform2,
  new MeshRenderer(
    app,
    trianglething,
    basic(app)
      .addTexture("texture0", trithingTexture)
      .addTexture("texture1", trithingTextureNormals),
    camera,
    light
  ).configure({})
);

app.start();
