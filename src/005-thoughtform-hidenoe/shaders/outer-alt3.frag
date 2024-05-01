#version 300 es
precision highp float;

uniform float u_time;

in vec2 uv0;

out vec4 fragColor;

vec2 squareImaginary(vec2 number, float mod){
	return vec2(
		pow(number.x * mod,2.0) - pow(number.y * mod, 2.0),
		2.0 * number.x * number.y
	);
}

float iterateMandelbrot(vec2 coord){
	vec2 z = vec2(0,0);
  float maxIterations = 69.0;

	for (float i = 0.0; i < maxIterations; i++) {
		// float factor = cos((1.3*6.0) * sin(u_time * 0.0005));
		float mod = u_time * 0.0003;
		// mod = 0.5;
		z = squareImaginary(z, 1.0/mod) + coord;
		if (length(z) > 100.0) return i / float(maxIterations);
	}

	return maxIterations;
}

void main() {
  // uv0 is 0..1, we want to denormalize this to -1..1
  vec2 uvMirror = abs(uv0 * 2.0 - 1.0);
  fragColor = vec4(0.0);
  float mandelbrot = iterateMandelbrot((uvMirror.yx - vec2(-1.075, 1.0)) * 0.9);
  fragColor.r = mandelbrot;

  vec2 outerNoise = (mandelbrot) * (1.0 - uvMirror * 0.5);
  fragColor.gb += (1.0 - mandelbrot) * outerNoise;

	// fragColor.r += pow(1.0 - length(uvMirror), 18.0);

  fragColor.a = 1.0;
}
