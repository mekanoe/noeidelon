export const clear = (gl) => {};

export const main = (next) => {
  const canvas = document.querySelector("canvas");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Initialize the GL context
  const gl = canvas.getContext("webgl");

  // Only continue if WebGL is available and working
  if (gl === null) {
    alert(
      "Unable to initialize WebGL. Your browser or machine may not support it."
    );
    return;
  }

  const core = renderingCore(gl);
  core.clear();

  next(gl, core);
};

const renderingCore = (gl) => {
  const fieldOfView = (10 * Math.PI) / 180; // in radians
  const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight;
  const zNear = 0.1;
  const zFar = 100.0;
  const projectionMatrix = glMatrix.mat4.create();
  glMatrix.mat4.perspective(projectionMatrix, fieldOfView, aspect, zNear, zFar);

  const modelViewMatrix = glMatrix.mat4.create();
  glMatrix.mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -6.0]);

  return {
    projectionMatrix,
    modelViewMatrix,
    clear() {
      gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
      gl.clearDepth(1.0); // Clear everything
      gl.enable(gl.DEPTH_TEST); // Enable depth testing
      gl.depthFunc(gl.LEQUAL); // Near things obscure far things
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    },
  };
};

export const glMatrix = window.glMatrix;
