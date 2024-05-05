import {
Texture,
basic_vertex_rounding_default
} from "../chunk-701c22b55952babe.js";
import {
Mesh,
MeshRenderer,
Renderable,
Shader,
Transform,
WebGLApp,
basic,
basic_default,
etoq,
exports_quat,
v3
} from "../chunk-652b721da622b7d9.js";

// src/meshes/trianglething/trianglething.ts
var trianglething_default = new Mesh({
  colors: null,
  faces: new Uint8Array([0, 1, 2, 1, 0, 3, 0, 2, 4, 0, 4, 5, 0, 5, 3, 1, 3, 6, 2, 1, 7, 4, 2, 8, 9, 10, 11, 12, 9, 13, 1, 6, 7, 2, 7, 8, 10, 8, 11, 9, 11, 13, 12, 13, 6, 7, 6, 14, 8, 7, 14, 11, 8, 14, 13, 11, 14, 6, 13, 14, 15, 16, 17, 17, 16, 18, 19, 20, 21, 18, 16, 22, 22, 16, 15, 23, 24, 25]),
  name: "src/meshes/trianglething/trianglething.ply",
  normals: new Float32Array([0, -1, 0.00000083803394, -0.5257306, -0.44721383, 0.723607, -0.8506533, -0.44721213, -0.2763879, 0.5257306, -0.4472139, 0.723607, 0, -0.44721153, -0.89442825, 0.8506533, -0.4472122, -0.27638793, 0, 0.44721153, 0.89442825, -0.8506533, 0.44721216, 0.27638793, -0.5257306, 0.4472139, -0.72360694, 0.8506533, -0.4472122, -0.27638793, 0, -0.44721153, -0.89442825, 0.5257306, 0.4472139, -0.72360694, 0.5257306, -0.4472139, 0.723607, 0.85065323, 0.4472122, 0.2763879, 0, 1, -0.0000008165459, 0.8999471, -0.43599886, 0.00000024163015, -0.00000005150958, 1, 0, -0.000000030203772, -0.4359989, 0.8999472, -0.8999471, -0.4359989, -0.00000024291313, -0.000000030203772, -0.4359989, 0.8999472, 0, -0.43599886, -0.8999471, 0.8999471, -0.43599886, 0.00000024163015, 0, -0.43599886, -0.8999471, -0.000000030203772, -0.4359989, 0.8999472, -0.8999471, -0.4359989, -0.00000024291313, 0, -0.43599886, -0.8999471]),
  positions: new Float32Array([0, 2.6090002, 0, -0.36800402, 2.9959497, 0.50652003, -0.5954481, 2.9959497, -0.19346952, 0.36800402, 2.9959497, 0.50652003, 0, 2.9959497, -0.62609756, 0.5954481, 2.9959497, -0.19346952, 0, 3.6220508, 0.62609756, -0.5954481, 3.6220508, 0.19346952, -0.36800402, 3.6220508, -0.50652003, 0.5954481, 2.9959497, -0.19346952, 0, 2.9959497, -0.62609756, 0.36800402, 3.6220508, -0.50652003, 0.36800402, 2.9959497, 0.50652003, 0.5954481, 3.6220508, 0.19346952, 0, 4.0090003, 0, 1.0000001, 0, 0, 0, 2.5000002, 0, -0.000000043711395, 0, 1.0000001, -1.0000001, 0, -0.00000008742279, -0.000000043711395, 0, 1.0000001, 0.000000011924882, 0, -1.0000001, 1.0000001, 0, 0, 0.000000011924882, 0, -1.0000001, -0.000000043711395, 0, 1.0000001, -1.0000001, 0, -0.00000008742279, 0.000000011924882, 0, -1.0000001]),
  uvs: new Float32Array([0.7660872, 0.5526656, 0.6449925, 0.52286637, 0.8418907, 0.33128682, 0.60803074, 0.79587877, 0.96344936, 0.40123126, 0.8416727, 0.64077806, 0.50600564, 0.49428308, 0.704352, 0.31297976, 0.79145527, 0.046412975, 0.35179207, 0.26814616, 0.47356877, 0.028599411, 0.5382167, 0.15491244, 0.118150145, 0.42324704, 0.40614995, 0.39580685, 0.5992601, 0.26365823, 0.4984935, 0.5027367, 0.24900003, 0.7522302, -0.00049349666, 0.50273675, -0.00049346685, 1.0017238, 0.7633698, 0.99398905, 0.99752307, 0.7598357, 0.9975231, 0.99398893, 0.49849355, 1.0017238, 0.99646366, 0.7612665, 0.99646366, 0.9954198, 0.7623104, 0.9954198]),
  vertexCount: 26
});

// src/meshes/trianglething/textures/texture0.png
var texture0_default = "../texture0-577d5216cdab32bc.png";

// src/meshes/trianglething/textures/texture1.png
var texture1_default = "../texture1-e472a46c91711e86.png";

// src/common-shaders/basic-vertex-rounding.ts
var basicShaderConfig = {
  attributes: {
    vertex: "a_vertex",
    uv0: "a_uv0",
    normal: "a_normal",
    vertexColor: "a_vertex_color"
  },
  uniforms: {
    view: "u_view",
    projection: "u_projection",
    objectToWorld: "u_object_to_world",
    objectToWorldInv: "u_object_to_world_inv",
    light0: "u_light_0",
    light0Color: "u_light_0_color",
    time: "u_time",
    albedo: "u_albedo",
    texture0: "u_texture_0",
    texture1: "u_texture_1",
    texture2: "u_texture_2"
  }
};
var basicVertexRounding = (app) => new Shader(basicShaderConfig).vertex(basic_vertex_rounding_default).fragment(basic_default).app(app);

// src/003-scene/main.ts
var app = new WebGLApp({ fov: 45 });
var camera = new Transform([2, 3, 3], etoq([-15, 40, 0]));
var light = new Transform([2, 2, 0]);
var transform2 = new Transform(v3(0), etoq([0, 0, 0]));
var transform22 = new Transform([-3, 0, 1], etoq([0, 0, 0]));
var trithingTexture = new Texture(app, texture0_default);
var trithingTextureNormals = new Texture(app, texture1_default);
app.onUpdate(() => {
  exports_quat.rotateY(transform2.rotation, transform2.rotation, 0.001);
  exports_quat.rotateY(transform22.rotation, transform22.rotation, 0.001);
});
new Renderable(app, transform2, new MeshRenderer(app, trianglething_default, basicVertexRounding(app).addTexture("texture0", trithingTexture).addTexture("texture1", trithingTextureNormals), camera, light).configure({}));
new Renderable(app, transform22, new MeshRenderer(app, trianglething_default, basic(app).addTexture("texture0", trithingTexture).addTexture("texture1", trithingTextureNormals), camera, light).configure({}));
app.start();
