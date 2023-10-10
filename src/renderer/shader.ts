import { mat4, vec3 } from "gl-matrix";
import { Transform } from "./transform";
import { WebGLApp } from "./webgl";

export type ShaderConfig = {
  time?: boolean;
};

export class Shader {
  static VERTEX = 35633;
  static FRAGMENT = 35632;

  constructor(private config: ShaderConfig = {}) {}

  private vertexCode = "";
  private fragmentCode = "";
  private _app?: WebGLApp;
  private _program: WebGLProgram | null = null;

  get gl() {
    const gl = this._app?.gl;
    if (!gl) {
      throw new Error("GL context not defined at shader compile time.");
    }

    return gl;
  }

  app(app: WebGLApp) {
    this._app = app;
    this._program = app.gl.createProgram();

    return this;
  }

  vertex(code: string) {
    this.vertexCode = code;
    return this;
  }

  fragment(code: string) {
    this.fragmentCode = code;
    return this;
  }

  attrib(name: string) {
    return this.gl.getAttribLocation(this._program as WebGLProgram, name);
  }

  uniform(name: string) {
    return this.gl.getUniformLocation(this._program as WebGLProgram, name);
  }

  attach(which: number, source: string) {
    const gl = this.gl;

    const shader = gl.createShader(which);
    if (!shader) {
      throw new Error(`failed to init ${humanShaderType(which)} shader`);
    }

    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    gl.attachShader(this._program as WebGLProgram, shader);
  }

  compile() {
    const gl = this.gl;
    this.attach(gl.FRAGMENT_SHADER, this.fragmentCode);
    this.attach(gl.VERTEX_SHADER, this.vertexCode);
  }

  link() {
    this.gl.linkProgram(this._program as WebGLProgram);
    if (
      !this.gl.getProgramParameter(
        this._program as WebGLProgram,
        this.gl.LINK_STATUS
      )
    ) {
      throw new Error(
        "Unable to initialize the shader program: " +
          this.gl.getProgramInfoLog(this._program as WebGLProgram)
      );
    }
  }

  bindAttrib(attribLocation: number, name: string) {
    this.gl.bindAttribLocation(
      this._program as WebGLProgram,
      attribLocation,
      name
    );
  }

  setupUniforms(
    time: number,
    projection: mat4,
    model: Transform,
    view: Transform
  ) {
    const viewMatrix = view.toMat4();
    mat4.invert(viewMatrix, viewMatrix);

    const { gl } = this._app as WebGLApp;
    gl.useProgram(this._program as WebGLProgram);
    gl.uniformMatrix4fv(this.uniform("uProjectionMatrix"), false, projection);

    if (this.config.time) {
      gl.uniform1f(this.uniform("uTime"), time);
    }

    const modelMat = mat4.clone(model.toMat4());
    mat4.fromQuat(modelMat, view.rotation);
    mat4.translate(modelMat, modelMat, view.position);

    gl.uniformMatrix4fv(this.uniform("uModelViewMatrix"), false, modelMat);
  }

  use() {
    this._app?.gl.useProgram(this._program);
  }
}

const humanShaderType = (which: number): string => {
  switch (which) {
    case Shader.FRAGMENT:
      return "fragment";
    case Shader.VERTEX:
      return "vertex";
    default:
      return "some unknown type of";
  }
};
