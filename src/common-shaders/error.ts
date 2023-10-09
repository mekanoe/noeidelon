import { Shader } from "../renderer/shader";
import { WebGLApp } from "../renderer/webgl";
import frag from "./error.frag";
import vert from "./error.vert";

export const errorShader = (app: WebGLApp) =>
  new Shader().vertex(vert).fragment(frag).app(app);
