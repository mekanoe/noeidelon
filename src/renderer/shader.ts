import { mat4, vec3 } from "gl-matrix";
import { Transform } from "./transform";
import { WebGLApp } from "./webgl";

/**
 * Uniform/Attribute locations
 */
export type ShaderConfig = ShaderMapping<string, string>;
export type InternalMapping = ShaderMapping<
  number,
  WebGLUniformLocation | null
>;

export type ShaderMapping<
  Attr extends number | string,
  Uniform extends (WebGLUniformLocation | null) | string,
> = {
  attributes: {
    vertex: Attr;
    uv0: Attr;
    normal: Attr;
    vertexColor: Attr;
    material?: { [key: string]: Attr };
  };

  uniforms: {
    view: Uniform;
    projection: Uniform;
    objectToWorld: Uniform;
    objectToWorldInv: Uniform;
    light0: Uniform;
    light0Color: Uniform;
    time: Uniform;
  };
};

export class Shader {
  static VERTEX = 35633;
  static FRAGMENT = 35632;

  constructor(public config: ShaderConfig) {}

  private vertexCode = "";
  private fragmentCode = "";
  private _app?: WebGLApp;
  public program: WebGLProgram | null = null;
  public mappings: InternalMapping = {} as any;

  get gl() {
    const gl = this._app?.gl;
    if (!gl) {
      throw new Error("GL context not defined at shader compile time.");
    }

    return gl;
  }

  app(app: WebGLApp) {
    this._app = app;
    this.program = app.gl.createProgram();

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
    return this.gl.getAttribLocation(this.program as WebGLProgram, name);
  }

  uniform(name: string) {
    return this.gl.getUniformLocation(this.program as WebGLProgram, name);
  }

  generateMappings(config: ShaderConfig): InternalMapping {
    return {
      attributes: {
        normal: this.attrib(config.attributes.normal),
        uv0: this.attrib(config.attributes.uv0),
        vertex: this.attrib(config.attributes.vertex),
        vertexColor: this.attrib(config.attributes.vertexColor),
      },
      uniforms: {
        light0: this.uniform(config.uniforms.light0),
        light0Color: this.uniform(config.uniforms.light0Color),
        objectToWorld: this.uniform(config.uniforms.objectToWorld),
        objectToWorldInv: this.uniform(config.uniforms.objectToWorldInv),
        projection: this.uniform(config.uniforms.projection),
        view: this.uniform(config.uniforms.view),
        time: this.uniform(config.uniforms.time),
      },
    };
  }

  attach(which: number, source: string) {
    const gl = this.gl;

    const shader = gl.createShader(which);
    if (!shader) {
      throw new Error(`failed to init ${humanShaderType(which)} shader`);
    }

    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    gl.attachShader(this.program as WebGLProgram, shader);
  }

  compile() {
    const gl = this.gl;
    this.attach(gl.FRAGMENT_SHADER, this.fragmentCode);
    this.attach(gl.VERTEX_SHADER, this.vertexCode);
  }

  link() {
    this.gl.linkProgram(this.program as WebGLProgram);
    if (
      !this.gl.getProgramParameter(
        this.program as WebGLProgram,
        this.gl.LINK_STATUS
      )
    ) {
      throw new Error(
        "Unable to initialize the shader program: " +
          this.gl.getProgramInfoLog(this.program as WebGLProgram)
      );
    }
    this.mappings = this.generateMappings(this.config);
  }

  bindAttrib(attribLocation: number, name: string) {
    this.gl.bindAttribLocation(
      this.program as WebGLProgram,
      attribLocation,
      name
    );
  }

  use() {
    this._app?.gl.useProgram(this.program);
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
