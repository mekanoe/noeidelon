#include "../color-conv.wgsl"
#include "../uniforms.wgsl"
#include "../basic-vert.wgsl"

@fragment
fn main(
  @location(0) uv : vec2f,
) -> @location(0) vec4f {
  f32 z = sin(uniforms.time) * 0.001 * 0.5 + 0.5;
  vec3f hsv = vec3f(uv.x, uv.y, z);
  hsv.x += uniforms.time * 0.0001;
  hsv.y = 1.0;
  hsv.z = 1.0;
  vec3f rgb = hsv2rgb(hsv);

  return saturate(vec4f(rgb, 1.0));
}
