// src/shader.js
class Shader {
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
      throw new Error("An error occurred compiling the shaders: " + this.gl.getShaderInfoLog(shader));
    }
    this.gl.attachShader(this.program, shader);
    return this;
  }
  link() {
    this.gl.linkProgram(this.program);
    if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
      throw new Error("Unable to initialize the shader program: " + this.gl.getProgramInfoLog(this.program));
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
    this.gl.uniformMatrix4fv(this.location("uProjectionMatrix"), false, projectionMatrix);
    this.gl.uniformMatrix4fv(this.location("uModelViewMatrix"), false, modelViewMatrix);
    this.updateTime();
  }
}

// src/object.js
class Object {
  constructor(app) {
    this.gl = app.gl;
    this.app = app;
    this.vertexPositions = new Float32Array([]);
    this.positionBuffer = null;
    this.textureBuffer = null;
  }
  initBuffer(data, draw = this.gl.STATIC_DRAW) {
    const buffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(data), draw);
    return buffer;
  }
  attachShader(shader) {
    this.shader = shader;
    this.vertexPosition = shader.location("aVertexPosition");
    this.textureCoord = shader.location("aTextureCoord");
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
    this.gl.vertexAttribPointer(this.vertexPosition, 2, this.gl.FLOAT, false, 0, 0);
    this.gl.enableVertexAttribArray(this.vertexPosition);
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.textureBuffer);
    this.gl.vertexAttribPointer(this.textureCoord, 2, this.gl.FLOAT, false, 0, 0);
    this.gl.enableVertexAttribArray(this.textureCoord);
    return this;
  }
  draw2D() {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
    this.shader.activate(this.app.projectionMatrix, this.app.modelViewMatrix);
    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, this.vertexPositions.length / 2);
  }
  draw3D() {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
    this.shader.activate(this.app.projectionMatrix, this.app.modelViewMatrix);
    this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, this.vertexPositions.length / 3);
  }
}

// src/basic-plane.js
class BasicPlane extends Object {
  constructor(app) {
    super(app);
    this.vertexPositions = new Float32Array([
      -1,
      -1,
      1,
      -1,
      -1,
      1,
      1,
      1
    ]);
    this.positionBuffer = this.initBuffer(this.vertexPositions);
    this.textureBuffer = this.initBuffer(new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]));
    this.app.onUpdate(() => this.draw2D());
  }
}

// src/telemetry.js
class Telemetry {
  constructor(app, selector = "#telemetry") {
    this.app = app;
    this.el = document.querySelector(selector);
    if (this.el && location.search.includes("telemetry")) {
      this.el.style.display = "block";
      this.app.onAfterUpdate(() => this.onAfterUpdate());
    }
    this.frameTimes = [];
    this.maxFrameTimes = 100;
    this.lastFrameTime = 0;
  }
  insertTime(time) {
    this.frameTimes.push(time);
    if (this.frameTimes.length > this.maxFrameTimes) {
      this.frameTimes.shift();
    }
  }
  onAfterUpdate() {
    const frameTime = this.app.now() - this.lastFrameTime;
    this.insertTime(frameTime);
    const averageFrameTime = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
    const framesPerSecond = 1000 / averageFrameTime;
    this.el.innerHTML = `
      ${framesPerSecond.toFixed(1)} FPS (${averageFrameTime.toFixed(3)} ms)<br />
      bU: ${this.app.registry.onBeforeUpdate.length} | U: ${this.app.registry.onUpdate.length} | aU: ${this.app.registry.onAfterUpdate.length}
    `;
    this.lastFrameTime = this.app.now();
  }
}

// src/app.js
class App {
  constructor(config = {
    fov: 45
  }) {
    this._now = 0;
    this.registry = {
      onStart: [],
      onUpdate: [],
      onBeforeUpdate: [],
      onAfterUpdate: []
    };
    this.config = config;
    this.canvas = document.querySelector("canvas");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.gl = this.canvas.getContext("webgl2");
    if (this.gl === null) {
      document.querySelector("main").innerHTML = `<div><i>your browser didn't let me set up webgl</i></div>`;
      throw new Error("Unable to initialize WebGL. Your browser or machine may not support it.");
    }
    const gl = this.gl;
    const fieldOfView = this.config.fov * Math.PI / 180;
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100;
    const projectionMatrix = glMatrix.mat4.create();
    glMatrix.mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);
    const modelViewMatrix = glMatrix.mat4.create();
    glMatrix.mat4.translate(modelViewMatrix, modelViewMatrix, [-0, 0, -6]);
    this.projectionMatrix = projectionMatrix;
    this.modelViewMatrix = modelViewMatrix;
    this.clear();
    this.onBeforeUpdate(() => this.clear());
    this.telemetry = new Telemetry(this);
  }
  clear() {
    const gl = this.gl;
    gl.clearColor(0, 0, 0, 1);
    gl.clearDepth(1);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }
  onStart(fn) {
    this.registry.onStart.push(fn);
  }
  onUpdate(fn) {
    this.registry.onUpdate.push(fn);
  }
  onBeforeUpdate(fn) {
    this.registry.onBeforeUpdate.push(fn);
  }
  onAfterUpdate(fn) {
    this.registry.onAfterUpdate.push(fn);
  }
  start() {
    this.registry.onStart.forEach((fn) => fn(this));
  }
  update() {
    this.registry.onBeforeUpdate.forEach((fn) => fn(this));
    this.registry.onUpdate.forEach((fn) => fn(this));
    this.registry.onAfterUpdate.forEach((fn) => fn(this));
  }
  oneShot() {
    requestAnimationFrame((now) => {
      this._now = now;
      this.start();
      this.update();
    });
  }
  loop() {
    const run = (now) => {
      this._now = now;
      this.update();
      requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  }
  now() {
    return this._now;
  }
}

export { Shader, BasicPlane, App };
