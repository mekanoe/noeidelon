#version 300 es
precision highp float;

uniform float u_time;

in vec2 uv0;

out vec4 fragColor;

vec2 squareImaginary(vec2 number){
	return vec2(
		pow(number.x,2.0) - pow(number.y, 2.0),
		2.0 * number.x * number.y
	);
}

float iterateMandelbrot(vec2 coord){
	vec2 z = vec2(0,0);
  float maxIterations = 100.0;

	for (float i = 0.0; i < maxIterations; i++) {
		z = squareImaginary(z) + (coord * -1.3);
		if (length(z) > 2.0) return i / float(maxIterations);
	}

	return maxIterations;
}

void main() {
  // uv0 is 0..1, we want to denormalize this to -1..1
  vec2 uvMirror = abs(uv0 * 2.0 - 1.0);
  fragColor = vec4(0.0);
  float mandelbrot = iterateMandelbrot((uvMirror.xy + vec2(0.14, -0.525)) * 0.9);
  fragColor.r = mandelbrot;

  vec2 outerNoise = (mandelbrot) * (1.0 - uvMirror * 0.5);
  fragColor.gb += (1.0 - mandelbrot) * outerNoise;
  fragColor.a = 1.0;
}
