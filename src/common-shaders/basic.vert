#version 300 es
layout(location = 0) in mat4 model;
layout(location = 4) in mat4 view;
layout(location = 8) in mat4 projection;
layout(location = 12) in vec3 worldPos;
layout(location = 13) in mat4 light0;
layout(location = 17) in vec4 light0Color;
layout(location = 18) in vec2 uv0;
layout(location = 19) in vec3 normals;
layout(location = 20) in vec4 vertexColor;
layout(location = 21) in float time;

// injection point

void main() {
  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
}