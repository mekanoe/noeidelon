#version 300 es
precision highp float;

// uniform mat4 u_view;
// uniform mat4 u_projection;
// uniform mat4 u_object_to_world;
// uniform mat4 u_object_to_world_inv;
// uniform vec3 u_light_0;
// uniform vec4 u_light_0_color;
// uniform float u_time;
// uniform vec4 u_albedo;

in vec2 uv0;
in vec3 normal;
in vec3 light_pos; 

out vec4 fragColor;


void main() {
  vec3 normal = normalize(normal);
  float light = dot(normal,  light_pos);



  fragColor = vec4(1.0);
  fragColor.rgb *= max(light, 0.1);
}
