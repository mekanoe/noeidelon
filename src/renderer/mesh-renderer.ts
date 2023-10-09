import { mat4, vec3 } from "gl-matrix";
import { Behavior } from "./behavior";
import { Mesh } from "./mesh";
import { Shader } from "./shader";
import { WebGLApp } from "./webgl";
import { Transform } from "./transform";
import { errorShader } from "../common-shaders/error";

export type MeshRendererConfig = {
  drawMode?: number;
};

export class MeshRenderer extends Behavior {
  private modelMatrix = mat4.create();
  private projectionMatrix = mat4.create();
  private _meshBuffer?: WebGLBuffer;

  constructor(
    public app: WebGLApp,
    public mesh: Mesh,
    public shader: Shader,
    public camera: Transform = new Transform([0, 0, -6]),
    public config: MeshRendererConfig = {}
  ) {
    super(app);
  }

  get meshBuffer() {
    if (this._meshBuffer) {
      return this._meshBuffer;
    }

    throw new Error("mesh buffer not ready");
  }

  initializeMeshBuffer() {
    const gl = this.app.gl;
    const buffer = gl.createBuffer();
    if (!buffer) {
      throw new Error("failed to create mesh buffer");
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, this.mesh.config.mesh, gl.STATIC_DRAW);

    this._meshBuffer = buffer;
  }

  initializeAttributes() {
    const gl = this.app.gl;
    gl.bindBuffer(gl.ARRAY_BUFFER, this.meshBuffer);

    const positionLocation = this.shader.attrib("aVertexPosition");
    if (positionLocation !== -1) {
      gl.vertexAttribPointer(
        positionLocation,
        this.mesh.config.positionSize,
        gl.FLOAT,
        false,
        4 * this.mesh.config.stride,
        0
      );
      gl.enableVertexAttribArray(positionLocation);
      this.shader.bindAttrib(positionLocation, "aVertexPosition");
    }

    if (this.mesh.config.colorSize !== 0) {
      const colorLocation = this.shader.attrib("aVertexColor");
      if (colorLocation !== -1) {
        gl.vertexAttribPointer(
          colorLocation,
          this.mesh.config.colorSize,
          gl.FLOAT,
          false,
          4 * this.mesh.config.stride,
          4 * this.mesh.config.positionSize
        );
        gl.enableVertexAttribArray(colorLocation);
        this.shader.bindAttrib(colorLocation, "aVertexColor");
      }
    }

    const uvLocation = this.shader.attrib("aTextureCoord");
    if (uvLocation !== -1) {
      gl.vertexAttribPointer(
        uvLocation,
        this.mesh.config.uvSize,
        gl.FLOAT,
        false,
        4 * this.mesh.config.stride,
        4 * (this.mesh.config.positionSize + this.mesh.config.colorSize)
      );
      gl.enableVertexAttribArray(uvLocation);
      this.shader.bindAttrib(uvLocation, "aTextureCoord");
    }
  }

  onStart() {
    mat4.perspective(
      this.projectionMatrix,
      this.app.config.fov || 45,
      this.app.canvas.width / this.app.canvas.height,
      this.app.config.zNear || 0.1,
      this.app.config.zFar || 100
    );

    this.shader.compile();
    this.initializeMeshBuffer();
    this.initializeAttributes();
    this.shader.link();
  }

  onRenderableUpdate(time: number, transform: Transform) {
    const gl = this.app.gl;
    this.shader.use();
    gl.bindBuffer(gl.ARRAY_BUFFER, this.meshBuffer);
    this.shader.setupUniforms(
      time,
      this.projectionMatrix,
      transform,
      this.camera
    );
    gl.drawArrays(
      this.config.drawMode ?? gl.TRIANGLE_STRIP,
      0,
      this.mesh.config.vertexCount
    );

    const err = gl.getError();
    if (err !== 0) {
      console.log({ err });
      throw new Error(
        `(MeshRenderer<Mesh#${this.mesh.name}>) webgl failure: ${err}`
      );
    }
  }
}
