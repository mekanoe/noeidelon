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
  vec2 uv = uv0;
  if (light_pos.x < 0.0) {
    uv.y = -uv.y + 0.025;
  }

  vec2 maps = texture(u_texture_1, uv0).rg;
  float sheen = maps.r;
  float edgeShine = maps.g;

  fragColor = vec4(1.0);
  fragColor.rgb = texture(u_texture_0, uv).rgb;
  fragColor.a = 1.0;

  fragColor.rgb += (4.0 * edgeShine + sheen);
}
