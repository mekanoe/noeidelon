import { Shader, ShaderConfig } from "../renderer/shader";
import { WebGLApp } from "../renderer/webgl";
import frag from "./basic.frag";
import vert from "./basic.vert";

export const basicShaderConfig: ShaderConfig = {
  attributes: {
    vertex: "a_vertex",
    uv0: "a_uv0",
    normal: "a_normal",
    vertexColor: "a_vertex_color",
  },

  uniforms: {
    view: "u_view",
    projection: "u_projection",
    objectToWorld: "u_object_to_world",
    objectToWorldInv: "u_object_to_world_inv",
    light0: "u_light_0",
    light0Color: "u_light_0_color",
    time: "u_time",
  },
};

export const basic = (app: WebGLApp) =>
  new Shader(basicShaderConfig).vertex(vert).fragment(frag).app(app);
