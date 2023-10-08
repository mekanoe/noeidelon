import { WebGPUApp } from "../renderer/webgpu";
import Torus from "../meshes/torus";
import { MeshRenderer } from "../renderer/mesh-renderer";

const app = new WebGPUApp({ fov: 20 });

// TODO:
// - torus!
// - white shader
// - real shader with UVs and uniforms

const torusRenderer = new MeshRenderer(app, Torus);

app.start();
