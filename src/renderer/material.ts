import { Shader, ShaderConfig } from "./shader";

export type MaterialConfig = {
  shader: Shader;
  uniforms: {
    [key: string]: (gl: WebGL2RenderingContext, material: Material) => void;
  };
};

export class Material {
  constructor(public config: MaterialConfig) {}
}
