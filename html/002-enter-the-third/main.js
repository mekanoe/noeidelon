import {
App,
BasicPlane,
Shader
} from "../chunk-2775206da9dea9ea.js";

// src/002-enter-the-third/main.ts
var app2 = new App({ fov: 20 });
var gl = app2.gl;
var shader2 = new Shader(app2).attach(gl.VERTEX_SHADER, `
      attribute vec4 aVertexPosition;
      attribute vec2 aTextureCoord;
      
      uniform mat4 uModelViewMatrix;
      uniform mat4 uProjectionMatrix;
      
      void main() {
        gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
      }
    `).attach(gl.FRAGMENT_SHADER, `
      void main() {
        gl_FragColor = vec4(1.0);
      }
    `).link();
var plane = new BasicPlane(app2);
plane.attachShader(shader2);
app2.loop();
