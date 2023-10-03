export class Shader {
  constructor(app) {
    this.gl = app.gl;
    this.app = app;
    this.program = this.gl.createProgram();
  }

  attach(type, source) {
    console.log("attaching shader", { type, source });
    const shader = this.gl.createShader(type);

    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);

    if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
      throw new Error(
        "An error occurred compiling the shaders: " +
          this.gl.getShaderInfoLog(shader)
      );
    }

    this.gl.attachShader(this.program, shader);

    return this;
  }

  link() {
    this.gl.linkProgram(this.program);

    if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
      throw new Error(
        "Unable to initialize the shader program: " +
          this.gl.getProgramInfoLog(this.program)
      );
    }

    console.log("shader linked");

    return this;
  }

  location(name) {
    if (name[0] === "a") {
      return this.gl.getAttribLocation(this.program, name);
    } else if (name[0] === "u") {
      return this.gl.getUniformLocation(this.program, name);
    }
  }

  updateTime() {
    const time = this.app.now();
    const sinTime = Math.sin(time);
    const cosTime = Math.cos(time);
    this.gl.uniform1f(this.location("uTime"), time);
    this.gl.uniform1f(this.location("uSinTime"), sinTime);
    this.gl.uniform1f(this.location("uCosTime"), cosTime);
  }

  activate(projectionMatrix, modelViewMatrix) {
    this.gl.useProgram(this.program);
    this.gl.uniformMatrix4fv(
      this.location("uProjectionMatrix"),
      false,
      projectionMatrix
    );
    this.gl.uniformMatrix4fv(
      this.location("uModelViewMatrix"),
      false,
      modelViewMatrix
    );
    this.updateTime();
  }
}

export const colorUtils = `
  vec3 rgb2hsv(vec3 c) {
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

    float d = q.x - min(q.w, q.y);
    float e = 1.0e-10;
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
  }

  vec3 hsv2rgb(vec3 c) {
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
  }
`;

export const commonFrag = `
  precision highp float;

  uniform float uTime;
  uniform float uSinTime;
  uniform float uCosTime;
`;

export const commonVert = `
  attribute vec4 aVertexPosition;
  attribute vec2 aTextureCoord;
  
  uniform mat4 uModelViewMatrix;
  uniform mat4 uProjectionMatrix;
`;
