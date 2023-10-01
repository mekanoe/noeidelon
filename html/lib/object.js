export class Object {
  constructor(app) {
    this.gl = app.gl;
    this.app = app;
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
    this.shader.activate(this.app.projectionMatrix, this.app.modelViewMatrix);
    this.gl.drawArrays(
      this.gl.TRIANGLE_STRIP,
      0,
      this.vertexPositions.length / 2
    );
  }

  draw3D() {
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
    this.shader.activate(this.app.projectionMatrix, this.app.modelViewMatrix);
    this.gl.drawArrays(
      this.gl.TRIANGLE_STRIP,
      0,
      this.vertexPositions.length / 3
    );
  }
}
