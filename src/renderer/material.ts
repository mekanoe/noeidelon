import { Shader } from "./shader";

export type MaterialConfig = {
  shader: Shader;
};

export class Material {
  constructor(public config: MaterialConfig) {}
}
