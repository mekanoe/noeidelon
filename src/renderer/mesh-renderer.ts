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
  private modelMatrix = mat4.create();
  private projectionMatrix = mat4.create();
  private buffers: {
    position?: WebGLBuffer;
    uv?: WebGLBuffer;
    normal?: WebGLBuffer;
    color?: WebGLBuffer;
    faces?: WebGLBuffer;
  } = {};

  constructor(
    public app: WebGLApp,
    public mesh: Mesh,
    public shader: Shader,
    public camera: Transform = new Transform([0, 0, -6]),
    public light: Transform = new Transform([100, 100, 0]),
    public config: MeshRendererConfig = {}
  ) {
    super(app);
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
        this.app.gl.UNSIGNED_BYTE
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

  onStart() {
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

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers.faces || null);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position || null);

    this.initializeShader(time, transform);

    gl.drawElements(
      this.config.drawMode ?? gl.TRIANGLES,
      this.mesh.config.faces.length,
      gl.UNSIGNED_INT,
      0
    );

    // gl.drawArrays(
    //   0,
    //   this.mesh.config.vertexCount
    // );

    const err = gl.getError();
    if (err !== 0) {
      console.log({ err });
      throw new Error(
        `(MeshRenderer<Mesh#${this.mesh.name}>) webgl failure: ${err}`
      );
    }
  }
}
