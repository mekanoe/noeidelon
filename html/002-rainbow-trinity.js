import { Shader, colorUtils, commonFrag, commonVert } from "./lib/shader.js";
import { BasicPlane } from "./lib/basic-plane.js";
import { App } from "./lib/app.js";

const app = new App({ fov: 20 });
const gl = app.gl;

const shader = new Shader(app)
  .attach(
    gl.VERTEX_SHADER,
    `
      ${commonVert}

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
      ${commonFrag}
      ${colorUtils}

      varying highp vec2 vTextureCoord;

      vec3 circle(vec2 pos, vec3 color) {
        float radius = 0.75;
        float dist = length(pos);
        float circle = smoothstep(radius + 0.001, radius, dist);
        return color * vec3(1.0 - circle);
      }

      vec3 colorRotator(vec3 color, float phase, vec2 uv) {
        color.x += uSinTime * 0.0001 + uv.y;
        vec3 hsv = rgb2hsv(color);
        hsv.x += uSinTime * 0.001 * uv.y - phase;
        hsv.y = 1.0;
        hsv.z = 0.5;
        vec3 rgb = hsv2rgb(hsv);
        return rgb;
      }

      void main() {
        float value = sin(uTime * 0.00025) * 0.5 + 0.5;
        vec2 sv = vec2(1.0, 1.0);
        vec3 triUpper = hsv2rgb(vec3(value, sv));
        vec3 triLeft = hsv2rgb(vec3(value + 0.33, sv));
        vec3 triRight = hsv2rgb(vec3(value + 0.66, sv));

        vec2 uv = vTextureCoord * 2.0 - 1.0;
        vec3 color = vec3(0.0);

        // place 3 circles in a triangle
        color += circle(vec2(uv.x, uv.y + 0.5), colorRotator(triUpper, 1.0, uv));
        color += circle(vec2(uv.x - 0.5, uv.y - 0.33), colorRotator(triLeft, 0.667, uv));
        color += circle(vec2(uv.x + 0.5, uv.y - 0.33), colorRotator(triRight, 0.333, uv));

        // color = 1.0 - color;

        gl_FragColor = vec4(color, 1.0);
        gl_FragColor = clamp(gl_FragColor, 0.0, 1.0);
      }
    `
  )
  .link();

const plane = new BasicPlane(app);
plane.attachShader(shader);

app.loop();
