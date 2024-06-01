import { Shader, ShaderConfig } from "../../renderer/shader";
import { WebGLApp } from "../../renderer/webgl";
import vert from "../../common-shaders/basic.vert";
import frag from "./outer.frag";
import fragAlt3 from "./outer-alt3.frag";

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
    albedo: "u_albedo",
    texture0: "u_texture_0",
    texture1: "u_texture_1",
    texture2: "u_texture_2",
  },
};

export const outerFrags = {
  normal: frag,
  alt3: fragAlt3,
};

export const outer = (app: WebGLApp, fragShader: string = frag) =>
  new Shader(basicShaderConfig).vertex(vert).fragment(fragShader).app(app);