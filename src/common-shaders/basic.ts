import { Shader, ShaderConfig } from "../renderer/shader";
import { WebGLApp } from "../renderer/webgl";
import frag from "./basic.frag";
import vert from "./basic.vert";

export const basicShaderConfig: ShaderConfig = {
  model: 0,
  view: 4,
  projection: 8,
  world: 12,
  light0: 13,
  light0Color: 17,
  uv0: 18,
  normals: 19,
  vertexColor: 20,
  time: 21,
};

export const basic = (app: WebGLApp) =>
  new Shader(basicShaderConfig).vertex(vert).fragment(frag).app(app);
