#version 300 es
precision highp float;

// uniform mat4 u_view;
// uniform mat4 u_projection;
// uniform mat4 u_object_to_world;
// uniform mat4 u_object_to_world_inv;
// uniform vec3 u_light_0;
// uniform vec4 u_light_0_color;
uniform float u_time;
// uniform vec4 u_albedo;

in vec2 uv0;
in vec3 light_pos; 

out vec4 fragColor;

const float margin = 0.5;

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
  // 0..1 to -1..1
  vec2 cUV = uv0 * 2.0 - 1.0;
  float circleDistance = length(cUV);
  if (circleDistance > margin) {
    discard;
  }

  float theta = atan(cUV.y, cUV.x) ;
  float spiral = sin(100.0 * (sqrt(circleDistance*20.0) - 10.0 * theta - 0.01 * u_time * 0.001)); 

  float edgeLightZone = pow(clamp(abs(dot(cUV.xyx, light_pos)), 0.0, 1.0) * 2.0, 4.0);

  float colorSpiral = sin(100.0 * (sqrt(circleDistance * 10.0) - 0.001 * theta - 0.3 * u_time * 0.00005));
  vec3 hueRotation = hsv2rgb(vec3(colorSpiral, 1.0, 0.5));

  fragColor = vec4(hueRotation * spiral * edgeLightZone, 1.0);
  fragColor.rgb += min(spiral, 0.0041666);
}