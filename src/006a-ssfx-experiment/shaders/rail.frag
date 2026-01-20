#version 300 es
precision highp float;

uniform vec2 u_screen_size;

out vec4 fragColor; 

in vec2 uv0;

void main() {
  vec2 cUV = (gl_FragCoord.xy / u_screen_size.x) * (gl_FragCoord.xy / u_screen_size.y) * 2.0 - 0.5;
  // cUV.y += 0.5
  // vec2 cUVPixel = gl_FragCoord.yz;
  float circleDistance = length(cUV);



  fragColor = vec4(smoothstep(circleDistance, circleDistance + 0.005, 0.5 ), cUV, 1);



  // fragColor.rg = gl_FragCoord.xy;
}
