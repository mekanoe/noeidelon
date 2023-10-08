import { Shader } from "./shader";
import { BasicPlane } from "./basic-plane";
import { App } from "./app";
import fragment from "./fragment.glsl";
import vertex from "./vertex.glsl";

const app = new App({ fov: 20 });
const gl = app.gl;

const shader = new Shader(app)
  .attach(gl.VERTEX_SHADER, vertex)
  .attach(gl.FRAGMENT_SHADER, fragment)
  .link();

const plane = new BasicPlane(app);
plane.attachShader(shader);

app.loop();
