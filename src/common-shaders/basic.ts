import { Shader } from "../renderer/shader";
import { WebGLApp } from "../renderer/webgl";
import frag from "./basic.frag";
import vert from "./basic.vert";

export const basic = (app: WebGLApp) =>
  new Shader({}).vertex(vert).fragment(frag).app(app);
