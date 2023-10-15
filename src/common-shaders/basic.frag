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

uniform sampler2D u_texture_0;
uniform sampler2D u_texture_1;

in vec2 uv0;
in vec3 normal;
in vec3 light_pos; 

out vec4 fragColor;

void main() {
  vec4 normalTex = texture(u_texture_1, uv0);
  vec3 normal = normalize(normal * normalTex.xyz);

  float light = dot(normal,  light_pos);

  fragColor = vec4(1.0);
  fragColor.rgb = texture(u_texture_0, uv0).rgb;
  fragColor.rgb *= max(light, 0.1);
  fragColor.a = 1.0;
}
