import { WebGPUApp } from "../renderer/webgpu";
import { MeshRenderer } from "../renderer/mesh-renderer";
import plane from "../meshes/plane";

const app = new WebGPUApp({ fov: 20 });

const renderer = new MeshRenderer(app, plane);

app.start();
