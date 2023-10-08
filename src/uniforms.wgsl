struct Uniforms {
  modelViewProjectionMatrix: mat4x4<f32>,
  time: f32,
}

@group(0) @binding(0) var<uniform> uniforms: Uniforms;