import { WebGLApp } from "./webgl";
import { Transform, v3 } from "./transform";
import { Renderable } from "./renderable";
import { MeshRenderer } from "./mesh-renderer";
import { Mesh } from "./mesh";
import { Shader } from "./shader";
import { basicShaderConfig } from "../common-shaders/basic";
import basicVert from "../common-shaders/basic.vert";
import vertexColorsFrag from "../common-shaders/vertex-colors.frag";
import gizmo from "../meshes/gizmo";

const gizmoShader = (app: WebGLApp) =>
  new Shader(basicShaderConfig)
    .vertex(basicVert)
    .fragment(vertexColorsFrag)
    .app(app);

export const createGizmo = (
  app: WebGLApp,
  camera: Transform,
  transform?: Transform
) => {
  const localTransform = new Transform(
    transform?.position,
    transform?.rotation
    // v3(0.5)
  );

  const mr = new MeshRenderer(app, gizmo, gizmoShader(app), camera).configure(
    {}
  );

  new Renderable(app, localTransform, mr);
};
