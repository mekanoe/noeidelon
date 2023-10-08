fn rgb2hsv(vec3f c) -> vec3f {
  vec4f K = vec4f(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4f p = mix(vec4f(c.bg, K.wz), vec4f(c.gb, K.xy), step(c.b, c.g));
  vec4f q = mix(vec4f(p.xyw, c.r), vec4f(c.r, p.yzx), step(p.x, c.r));

  f32 d = q.x - min(q.w, q.y);
  f32 e = 1.0e-10;
  return vec3f(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

fn hsv2rgb(vec3f c) -> vec3f {
  vec4f K = vec4f(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3f p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}