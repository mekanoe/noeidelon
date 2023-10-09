import { Shader } from "../renderer/shader";
import { WebGLApp } from "../renderer/webgl";
import frag from "./uv-rainbow.frag";
import vert from "./uv-rainbow.vert";

export const uvRainbow = (app: WebGLApp) =>
  new Shader({ time: true }).vertex(vert).fragment(frag).app(app);
