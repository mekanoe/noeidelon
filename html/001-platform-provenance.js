import { Shader } from "./lib/shader.js";
import { BasicPlane } from "./lib/basic-plane.js";
import { App } from "./lib/app.js";

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

      varying highp vec2 vTextureCoord;
      
      void main() {
        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
        vTextureCoord = aTextureCoord;
      }
    `
  )
  .attach(
    gl.FRAGMENT_SHADER,
    `
      uniform lowp float uTime;
      uniform lowp float uSinTime;
      uniform lowp float uCosTime;

      varying highp vec2 vTextureCoord;

      void main() {
        lowp float slowedSinTime = sin(uTime*0.001)*0.5+0.5;
        lowp float slowedCosTime = cos(uTime*0.005)*0.5+0.5;
        
        gl_FragColor = vec4(vTextureCoord.x * 0.5 - slowedSinTime, vTextureCoord.y, vTextureCoord.y * 0.5 + slowedSinTime, 1.0);
        gl_FragColor = clamp(gl_FragColor, 0.0, 1.0);
      }
    `
  )
  .link();

const plane = new BasicPlane(app);
plane.attachShader(shader);

app.loop();
