import { MeshRenderer } from "../renderer/mesh-renderer";
import { WebGLApp } from "../renderer/webgl";
import { Renderable } from "../renderer/renderable";
import { Transform, etoq, v3 } from "../renderer/transform";
import { quat } from "gl-matrix";
import trianglething from "../meshes/trianglething";
import teapot from "../meshes/teapot";
import { basic } from "../common-shaders/basic";

const app = new WebGLApp({ fov: 45 });

const camera = new Transform([3, 3, 5], etoq([-15, 40, 0]));
const light = new Transform([1, 1, 0]);

const transform = new Transform(v3(0), etoq([0, 0, 0]));
const transform2 = new Transform([-2, 0, 1], etoq([0, 90 + 62, 0]));

app.onUpdate(() => {
  quat.rotateY(transform.rotation, transform.rotation, 0.001);
});

setTimeout(() => {
  new Renderable(
    app,
    transform2,
    new MeshRenderer(app, trianglething, basic(app), camera, light).configure(
      {}
    )
  );
  new Renderable(
    app,
    transform,
    new MeshRenderer(app, teapot, basic(app), camera, light).configure({})
  );

  app.start();
}, 7000);
