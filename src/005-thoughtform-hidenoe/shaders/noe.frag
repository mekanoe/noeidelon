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

// 	float r = length(m);
	// float a = atan(m.y, m.x);
	// float v = sin(100.*(sqrt(r)-0.02*a-.3*t));
	// return clamp(v,0.,1.);

void main() {
  // 0..1 to -1..1
  vec2 cUV = uv0 * 2.0 - 1.0;
  float circleDistance = length(cUV);
  if (circleDistance > margin) {
    discard;
  }

  float theta = atan(cUV.y, cUV.x) ;
  float spiral = sin(100.0 * (sqrt(circleDistance*20.0) - 10.0 * theta - 0.01 * u_time * 0.001)); 

  float edgeLightZone = pow(clamp(abs(dot(cUV.xyx, light_pos)), 0.0, 1.0) * 2.0, 7.0);
  fragColor = vec4(0.0, spiral, edgeLightZone, 1.0);
}
