export class App {
  constructor(
    config = {
      fov: 45,
    }
  ) {
    this._now = 0;
    this.registry = {
      onStart: [],
      onUpdate: [],
      onBeforeUpdate: [],
    };

    this.config = config;
    this.canvas = document.querySelector("canvas");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.gl = this.canvas.getContext("webgl");

    if (this.gl === null) {
      document.querySelector(
        "main"
      ).innerHTML = `<div><i>your browser didn't let me set up webgl</i></div>`;
      throw new Error(
        "Unable to initialize WebGL. Your browser or machine may not support it."
      );
    }

    const gl = this.gl;

    const fieldOfView = (this.config.fov * Math.PI) / 180; // in radians
    const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
    const zNear = 0.1;
    const zFar = 100.0;
    const projectionMatrix = glMatrix.mat4.create();
    glMatrix.mat4.perspective(
      projectionMatrix,
      fieldOfView,
      aspect,
      zNear,
      zFar
    );

    const modelViewMatrix = glMatrix.mat4.create();
    glMatrix.mat4.translate(
      modelViewMatrix,
      modelViewMatrix,
      [-0.0, 0.0, -6.0]
    );

    this.projectionMatrix = projectionMatrix;
    this.modelViewMatrix = modelViewMatrix;

    this.clear();
    this.onBeforeUpdate(() => this.clear());
  }

  clear() {
    const gl = this.gl;

    gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
    gl.clearDepth(1.0); // Clear everything
    gl.enable(gl.DEPTH_TEST); // Enable depth testing
    gl.depthFunc(gl.LEQUAL); // Near things obscure far things
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

  start() {
    this.registry.onStart.forEach((fn) => fn(this));
  }

  update() {
    this.registry.onBeforeUpdate.forEach((fn) => fn(this));
    this.registry.onUpdate.forEach((fn) => fn(this));
  }

  loop(now) {
    this._now = now;
    this.update();

    requestAnimationFrame((newNow) => this.loop(newNow));
  }

  now() {
    return this._now;
  }
}
