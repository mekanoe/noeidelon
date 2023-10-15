#version 300 es
precision highp float;

uniform vec4 u_light_0_color;
uniform vec4 u_albedo; // ambient color

uniform sampler2D u_texture_0;
uniform sampler2D u_texture_1;
uniform sampler2D u_texture_2;

in vec2 uv0;
in vec3 normal;
in vec3 light_pos; 

out vec4 fragColor;

void main() {
  // vec4 normalTex = texture(u_texture_1, uv0);
  // vec3 normal = normalize(normal * normalTex.rgb);
  vec3 normal = normalize(normal);

  float light = clamp(dot(normal, light_pos), 0.0, 1.0);

  vec3 ramp = texture(u_texture_2, vec2(light, 0.0)).rgb;

  fragColor = vec4(1.0);
  fragColor.rgb = texture(u_texture_0, uv0).rgb;
  fragColor.rgb *= ramp;
  fragColor.a = 1.0;
}
