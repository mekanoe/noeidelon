#version 300 es
uniform mat4 u_view;
uniform mat4 u_projection;
uniform mat4 u_object_to_world;
uniform mat4 u_object_to_world_inv;
uniform vec3 u_light_0;
uniform vec4 u_light_0_color;
uniform float u_time;

in vec4 a_vertex;
in vec2 a_uv0;
in vec3 a_normal;
in vec4 a_vertex_color;

out vec2 uv0;
out vec3 normal;
out vec4 vertex_color;
out vec3 light_pos;

// injection point 1

void main() {
  mat4 worldInv = inverse(u_view);
  mat4 MVW = u_projection * u_view * u_object_to_world;
  gl_Position = MVW * a_vertex;

  uv0 = a_uv0;
  normal = normalize(mat3(worldInv) * a_normal);
  vertex_color = a_vertex_color;
  light_pos = normalize(mat3(u_object_to_world_inv) * u_light_0);

  // injection point 2
}