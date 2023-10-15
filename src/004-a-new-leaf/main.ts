import { MeshRenderer } from "../renderer/mesh-renderer";
import { WebGLApp } from "../renderer/webgl";
import { Renderable } from "../renderer/renderable";
import { Transform, etoq, v3 } from "../renderer/transform";
import { Texture } from "../renderer/texture";
import { sonya } from "../common-shaders/sonya";
import { cubeBackdrop, defaultTransform } from "../meshes/cube-backdrop";
import { rgbToFloat } from "../renderer/color-utils";
import rampTexture from "./textures/ramp.png";
import fox from "../meshes/fox/fox";
import foxImg from "../meshes/fox/fox-tex.png";
import foxNormal from "../meshes/fox/fox-normal.png";
import backdropImg from "./textures/backdrop.png";
import backdropNormalsImg from "./textures/backdrop-normals.png";
import { createWhiteTexture } from "../renderer/helper-textures/white";

const useAlt = location.search.includes("alt1");

const app = new WebGLApp({ fov: 45 });

const camera = new Transform([0, 2, 4], etoq([-15, 0, 0]));
const light = new Transform([10, !useAlt ? 10 : -2, 10]);

const transform = new Transform(v3(0), etoq([0, 180 + 45, 0]), v3(0.1));

const ramp = new Texture(app, rampTexture, { uvClamp: true });
const backdropTex = !useAlt
  ? new Texture(app, backdropImg)
  : createWhiteTexture(app);
const backdropNormalsTex = new Texture(app, backdropNormalsImg);
const foxTex = !useAlt ? new Texture(app, foxImg) : createWhiteTexture(app);
const foxNormalTex = new Texture(app, foxNormal);

const ambientLight = rgbToFloat(35, 76, 37);

app.onUpdate((time, app) => {
  // const wiggle = 40 * (Math.sin(time) * 0.001);
  // camera.position = [wiggle, 2, 4 - wiggle];
});

new Renderable(
  app,
  transform,
  new MeshRenderer(
    app,
    fox,
    sonya(app, ambientLight)
      .addTexture("texture0", foxTex)
      .addTexture("texture1", foxNormalTex)
      .addTexture("texture2", ramp),
    camera,
    light
  ).configure({})
  // true
);

new Renderable(
  app,
  defaultTransform,
  new MeshRenderer(
    app,
    cubeBackdrop,
    sonya(app, ambientLight)
      .addTexture("texture0", backdropTex)
      .addTexture("texture1", backdropNormalsTex)
      .addTexture("texture2", ramp),
    camera,
    light
  ).configure({})
  // true
);

// createGizmo(app, camera, light);

app.start();
