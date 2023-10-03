import { Shader } from "../shader";
import { BasicPlane } from "../basic-plane";
import { App } from "../app";

const app = new App({ fov: 20 });
const gl = app.gl;

const shader = new Shader(app)
  .attach(
    gl.VERTEX_SHADER,
    `
      attribute vec4 aVertexPosition;
      attribute vec2 aTextureCoord;
      
      uniform mat4 uModelViewMatrix;
      uniform mat4 uProjectionMatrix;
      
      void main() {
        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      }
    `
  )
  .attach(
    gl.FRAGMENT_SHADER,
    `
      void main() {
        gl_FragColor = vec4(1.0);
      }
    `
  )
  .link();

const plane = new BasicPlane(app);
plane.attachShader(shader);

app.loop();
