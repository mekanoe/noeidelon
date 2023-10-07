import { WebGPUApp } from "../renderer/webgpu";

const app = new WebGPUApp({ fov: 20 });

app.start();
// TODO:
// - plane
// - white shader
// - real shader with UVs and uniforms
