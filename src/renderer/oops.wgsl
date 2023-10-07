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
) -> vec4f {
  return vec4f(1.0, 0.0, 1.0, 1.0);
}