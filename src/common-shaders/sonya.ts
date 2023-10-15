import { Shader, ShaderConfig } from "../renderer/shader";
import { WebGLApp } from "../renderer/webgl";
import frag from "./toon-shading.frag";
import vert from "./basic-vertex-rounding.vert";
import { vec4 } from "gl-matrix";

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

export const sonya = (app: WebGLApp, ambientLight: vec4 = [0.1, 0.1, 0.1, 1]) =>
  new Shader(basicShaderConfig)
    .vertex(vert)
    .fragment(frag)
    .app(app)
    .prerenderHook(({ gl }: WebGLApp, shader: Shader) => {
      gl.uniform4fv(shader.mappings.uniforms.albedo, ambientLight);
    });
