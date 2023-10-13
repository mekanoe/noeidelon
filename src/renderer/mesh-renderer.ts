import { mat4, quat, vec3 } from "gl-matrix";
import { Behavior } from "./behavior";
import { Mesh } from "./mesh";
import { Shader, ShaderMapping } from "./shader";
import { WebGLApp } from "./webgl";
import { Transform, v3 } from "./transform";

export type MeshRendererConfig = {
  drawMode?: number;
  cullMode?: number;
  meshTransform?: mat4; // Do not use this for per-frame shit. Just the model pre-transform.
};

export class MeshRenderer extends Behavior {
  private projectionMatrix = mat4.create();
  private buffers: {
    vao?: WebGLVertexArrayObject;
    position?: WebGLBuffer;
    uv?: WebGLBuffer;
    normal?: WebGLBuffer;
    color?: WebGLBuffer;
    faces?: WebGLBuffer;
  } = {};
  faceDataType: number;
  colorDataType: number | null;

  constructor(
    public app: WebGLApp,
    public mesh: Mesh,
    public shader: Shader,
    public camera: Transform = new Transform([0, 0, -6]),
    public light: Transform = new Transform([100, 100, 0]),
    public config: MeshRendererConfig = {}
  ) {
    super(app);

    this.faceDataType = this.getDataType(mesh.config.faces);
    this.colorDataType = mesh.config.colors
      ? this.getDataType(mesh.config.colors)
      : null;
  }

  getDataType(array: Uint16Array | Uint32Array | Uint8Array) {
    switch (array.BYTES_PER_ELEMENT) {
      case 1:
        return 5121; // uint8 UNSIGNED_BYTE
      case 2:
        return 5123; // uint16 UNSIGNED_SHORT
      case 4:
        return 5125; // uint32 UNSIGNED_INT
      default:
        return 5126; // float32 FLOAT
    }
  }

  configure(config: MeshRendererConfig) {
    this.config = config;
    return this;
  }

  makeBuffer(data: TypedArray, target: number = 34962) {
    const gl = this.app.gl;
    const buffer = gl.createBuffer();
    if (!buffer) {
      throw new Error("failed to create a buffer");
    }

    gl.bindBuffer(target, buffer);
    gl.bufferData(target, data, gl.STATIC_DRAW);
    gl.bindBuffer(target, null);

    return buffer;
  }

  initializeBuffers() {
    const vao = this.app.gl.createVertexArray();
    if (!vao) {
      throw new Error("VAO creation failed");
    }

    this.buffers.vao = vao;
    this.app.gl.bindVertexArray(vao);

    this.buffers.faces = this.makeBuffer(
      this.mesh.config.faces,
      this.app.gl.ELEMENT_ARRAY_BUFFER
    );

    const shaderMap = this.shader.mappings;

    this.buffers.position = this.makeBuffer(this.mesh.config.positions);
    this.bindAttrib(
      this.buffers.position,
      shaderMap.attributes.vertex,
      3,
      this.app.gl.FLOAT
    );

    if (this.mesh.config.normals) {
      this.buffers.normal = this.makeBuffer(this.mesh.config.normals);
      this.bindAttrib(
        this.buffers.normal,
        shaderMap.attributes.normal,
        3,
        this.app.gl.FLOAT,
        true
      );
    }

    if (this.mesh.config.colors) {
      this.buffers.color = this.makeBuffer(this.mesh.config.colors);
      this.bindAttrib(
        this.buffers.color,
        shaderMap.attributes.vertexColor,
        4,
        this.colorDataType || this.app.gl.UNSIGNED_BYTE
      );
    }

    if (this.mesh.config.uvs) {
      this.buffers.uv = this.makeBuffer(this.mesh.config.uvs);
      this.bindAttrib(
        this.buffers.uv,
        shaderMap.attributes.uv0,
        2,
        this.app.gl.FLOAT
      );
    }

    this.app.gl.bindVertexArray(null);
  }

  bindAttrib(
    buffer: WebGLBuffer,
    attribute: string | number,
    elements: number,
    glType: number,
    normalized: boolean = false
  ) {
    const gl = this.app.gl;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

    const attributePosition = Number.isSafeInteger(attribute)
      ? (attribute as number)
      : this.shader.attrib(attribute as string);
    if (attributePosition !== -1) {
      gl.vertexAttribPointer(
        attributePosition,
        elements,
        glType,
        normalized,
        0,
        0
      );
      gl.enableVertexAttribArray(attributePosition);
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, null);
  }

  initializeShader(time: number, transform: Transform) {
    const view = mat4.invert(mat4.create(), this.camera.toMat4());

    const gl = this.app.gl;
    const { uniforms } = this.shader.mappings;
    this.shader.use();

    gl.uniform1f(uniforms.time, time);
    gl.uniform4fv(uniforms.light0Color, [1, 1, 1, 1]);
    gl.uniformMatrix4fv(uniforms.view, false, view);
    gl.uniformMatrix4fv(uniforms.projection, false, this.projectionMatrix);
    gl.uniform3fv(uniforms.light0, this.light.position);
    gl.uniformMatrix4fv(uniforms.objectToWorld, false, transform.toMat4());
    gl.uniformMatrix4fv(
      uniforms.objectToWorldInv,
      false,
      mat4.invert(mat4.create(), transform.toMat4())
    );
  }

  onStart(_: never, app: WebGLApp) {
    app.loading("baking vectors");
    app.telemetry?.addRenderers(1);
    app.telemetry?.addTriangles(this.mesh.config.faces.length);
    app.telemetry?.addVertexes(this.mesh.config.vertexCount);

    mat4.perspective(
      this.projectionMatrix,
      this.app.config.fov || 45,
      this.app.aspect,
      this.app.config.zNear || 0.1,
      this.app.config.zFar || 100
    );

    this.shader.compile();
    this.shader.link();
    this.initializeBuffers();
    this.shader.link();
  }

  onRenderableUpdate(time: number, transform: Transform) {
    const gl = this.app.gl;

    gl.bindVertexArray(this.buffers.vao || null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers.faces || null);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position || null);

    this.initializeShader(time, transform);

    gl.drawElements(
      this.config.drawMode ?? gl.TRIANGLES,
      this.mesh.config.faces.length,
      this.faceDataType,
      0
    );

    const err = gl.getError();
    if (err !== 0) {
      console.log({ err });
      throw new Error(
        `(MeshRenderer<Mesh#${this.mesh.name}>) webgl failure: ${err}`
      );
    }

    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
  }
}
