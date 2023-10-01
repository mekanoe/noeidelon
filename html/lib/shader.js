export class Shader {
  constructor(gl, core) {
    this.gl = gl;
    this.core = core;
    this.program = gl.createProgram();
    this.startTime = Date.now();
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
    const now = Date.now();
    const time = now - this.startTime;
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
