import { Texture } from "./texture";
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
    albedo: Uniform;
    light0: Uniform;
    light0Color: Uniform;
    objectToWorld: Uniform;
    objectToWorldInv: Uniform;
    projection: Uniform;
    texture0: Uniform;
    texture1: Uniform;
    texture2: Uniform;
    time: Uniform;
    view: Uniform;
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
  public textures: Record<string, Texture> = {};

  public materialValues: Record<string, any> = {};
  private prerenderHooks: ((
    app: WebGLApp,
    shader: Shader,
    time: number
  ) => void)[] = [];

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

  prerenderHook(fn: (app: WebGLApp, shader: Shader, time: number) => void) {
    this.prerenderHooks.push(fn);
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
        albedo: this.uniform(config.uniforms.albedo),
        light0: this.uniform(config.uniforms.light0),
        light0Color: this.uniform(config.uniforms.light0Color),
        objectToWorld: this.uniform(config.uniforms.objectToWorld),
        objectToWorldInv: this.uniform(config.uniforms.objectToWorldInv),
        projection: this.uniform(config.uniforms.projection),
        texture0: this.uniform(config.uniforms.texture0),
        texture1: this.uniform(config.uniforms.texture1),
        texture2: this.uniform(config.uniforms.texture2),
        time: this.uniform(config.uniforms.time),
        view: this.uniform(config.uniforms.view),
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

  /// Slot must be the name of the relevant uniform pointer, e.g. texture0
  addTexture(slot: string, texture: Texture) {
    this.textures[slot] = texture;
    return this;
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

  onPrerender(app: WebGLApp, time: number) {
    for (const fn of this.prerenderHooks) {
      fn(app, this, time);
    }
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
