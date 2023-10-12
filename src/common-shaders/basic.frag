#version 300 es
precision highp float;

uniform float u_time;

in vec2 uv0;
in vec3 normal;
in vec4 vertex_color;
in vec3 light_pos; 

out vec4 fragColor;

vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
  vec3 normal = normalize(normal);
  float light = dot(normal,  light_pos);

  float zComponent = sin(u_time) * 0.004 * 0.5 + 0.5;
  vec3 hsv = rgb2hsv(vec3(uv0, zComponent));
  hsv.x += u_time * 0.0004;
  hsv.y = 1.0;
  hsv.z = 1.0;
  vec3 rgb = hsv2rgb(hsv);

  fragColor = vec4(rgb, 1.0);
  fragColor *= max(light, 0.1);
}
