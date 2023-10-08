struct v2f {
  @builtin(position) position : vec4f,
  @location(0) color : vec4f,
  @location(1) uv : vec2f,
}

@vertex
fn main(
  @builtin(position) position : vec4f,
  @location(0) color : vec4f,
  @location(1) uv : vec2f,
) -> v2f {
  return v2f(uniforms.modelViewProjectionMatrix * position, color, uv);
}
