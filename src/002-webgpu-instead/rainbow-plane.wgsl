struct Uniforms {
  modelViewProjectionMatrix: mat4x4<f32>,
  time: f32,
}

@group(0) @binding(0) var<uniform> uniforms: Uniforms;

struct v2f {
  @builtin(position) position : vec4f,
  @location(0) uv : vec2f,
}

@vertex
fn vertex_main(
  @builtin(position) position : vec4f,
  @location(0) uv : vec2f,
) -> v2f {
  return v2f(uniforms.modelViewProjectionMatrix * position, uv);
}

@fragment
fn fragment_main(
  @location(0) uv : vec2f,
) -> @location(0) vec4f {
  f32 zComponent = sin(uniforms.time) * 0.001 * 0.5 + 0.5;
  vec3f hsv = vec3f(uv.x, uv.y, zComponent);
  hsv.x += uniforms.time * 0.0001;
  hsv.y = 1.0;
  hsv.z = 1.0;
  vec3f rgb = hsv2rgb(hsv);

  return saturate(vec4f(rgb, 1.0));
}

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