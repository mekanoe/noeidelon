export class BasicPlane {
  constructor(gl, core) {
    this.gl = gl;
    this.core = core;

    this.vertexPositions = new Float32Array([
      -1.0, -1.0, +1.0, -1.0, -1.0, +1.0, +1.0, +1.0,
    ]);
    this.positionBuffer = this.initBuffer(this.vertexPositions);
    this.textureBuffer = this.initBuffer(
      new Float32Array([0, 0, 1, 0, 0, 1, 1, 1])
    );
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
    this.gl.vertexAttribPointer(
      this.vertexPosition,
      2,
      this.gl.FLOAT,
      false,
      0,
      0
    );
    this.gl.enableVertexAttribArray(this.vertexPosition);

    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.textureBuffer);
    this.gl.vertexAttribPointer(
      this.textureCoord,
      2,
      this.gl.FLOAT,
      false,
      0,
      0
    );
    this.gl.enableVertexAttribArray(this.textureCoord);

    return this;
  }

  draw2D() {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
    this.shader.activate(this.core.projectionMatrix, this.core.modelViewMatrix);
    this.gl.drawArrays(
      this.gl.TRIANGLE_STRIP,
      0,
      this.vertexPositions.length / 2
    );
  }
}
