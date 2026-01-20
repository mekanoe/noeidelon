import { basic } from "../common-shaders/basic";
import { basicVertexRounding } from "../common-shaders/basic-vertex-rounding";
import { errorShader } from "../common-shaders/error";
import { uvRainbow } from "../common-shaders/uv-rainbow";
import halo from "../meshes/halo/halo";
import plane from "../meshes/plane";
import { MeshRenderer } from "../renderer/mesh-renderer";
import { Renderable } from "../renderer/renderable";
import { Texture } from "../renderer/texture";
import { etoq, Transform, v3 } from "../renderer/transform";
import { WebGLApp } from "../renderer/webgl";
import haloMaps from "../meshes/halo/halo-maps.png";
import haloOuter from "../meshes/halo/halo-outer.png";
import { createWhiteTexture } from "../renderer/helper-textures/white";
import { halo as haloShader } from "./shaders/halo";
import { createBlackTexture } from "../renderer/helper-textures/black";
import { dither } from "./shaders/dither";

const app = new WebGLApp({ fov: 45 });

const camera = new Transform([2, 2, 3], etoq([-35, 40, 0]));

const haloTransform = (height: number) =>
  new Transform([0, height, 0], etoq([0, 45, 0]), v3(0.6));

const topHaloTransform = haloTransform(0);
const topHaloMaps = new Texture(app, haloMaps);
const haloTex = new Texture(app, haloOuter);
new Renderable(
  app,
  topHaloTransform,
  new MeshRenderer(
    app,
    halo,
    haloShader(app)
      .addTexture("texture0", haloTex)
      .addTexture("texture1", topHaloMaps),
    camera,
    new Transform(v3(0))
  ).configure({})
);

// const floorTransform = new Transform([0, -0.2, 0], etoq([90, 0, 0]), v3(100));
// new Renderable(
//   app,
//   floorTransform,
//   new MeshRenderer(app, plane, dither(app), camera).configure({})
// );

const bottomHaloTransform = haloTransform(-0.3);
new Renderable(
  app,
  bottomHaloTransform,
  new MeshRenderer(
    app,
    halo,
    haloShader(app)
      .addTexture("texture0", haloTex)
      .addTexture("texture1", createBlackTexture(app)),
    camera,
    new Transform(v3(-1))
  ).configure({})
);

app.start();
