import { WebGPUApp } from "../renderer/webgpu";
import { MeshRenderer } from "../renderer/mesh-renderer";
import plane from "../meshes/plane";
import rainbowPlane from "./rainbow-plane.wgsl";
import { Shader } from "../renderer/shader";

const app = new WebGPUApp({ fov: 20 });

const renderer = new MeshRenderer(app, plane);
const shader = new Shader(rainbowPlane);
app.start();
