import {
plane_default
} from "../chunk-a6d990db9d9ec9c3.js";
import {
MeshRenderer,
Renderable,
Shader,
Transform,
WebGLApp,
basic_default1 as basic_default,
etoq,
v3
} from "../chunk-652b721da622b7d9.js";

// src/005-thoughtform-hidenoe/shaders/outer.frag
var outer_default = `#version 300 es
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
  float maxIterations = 100.0;

	for (float i = 0.0; i < maxIterations; i++) {
		float factor = 2.6 + (1.3 * sin(u_time * 0.0001));
		z = squareImaginary(z, factor + 1.0) + (coord / factor);
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

	fragColor.r += pow(1.0 - length(uvMirror), 8.0);

  fragColor.a = 1.0;
}
`;

// src/005-thoughtform-hidenoe/shaders/outer-alt3.frag
var outer_alt3_default = `#version 300 es
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
`;

// src/005-thoughtform-hidenoe/shaders/outer.ts
var basicShaderConfig = {
  attributes: {
    vertex: "a_vertex",
    uv0: "a_uv0",
    normal: "a_normal",
    vertexColor: "a_vertex_color"
  },
  uniforms: {
    view: "u_view",
    projection: "u_projection",
    objectToWorld: "u_object_to_world",
    objectToWorldInv: "u_object_to_world_inv",
    light0: "u_light_0",
    light0Color: "u_light_0_color",
    time: "u_time",
    albedo: "u_albedo",
    texture0: "u_texture_0",
    texture1: "u_texture_1",
    texture2: "u_texture_2"
  }
};
var outerFrags = {
  normal: outer_default,
  alt3: outer_alt3_default
};
var outer2 = (app, fragShader = outer_default) => new Shader(basicShaderConfig).vertex(basic_default).fragment(fragShader).app(app);

// src/005-thoughtform-hidenoe/shaders/noe.frag
var noe_default = `#version 300 es
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
}`;

// src/005-thoughtform-hidenoe/shaders/noe-debug.frag
var noe_debug_default = `#version 300 es
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

  fragColor = vec4(colorSpiral, spiral, 1.0, 1.0);
}`;

// src/005-thoughtform-hidenoe/shaders/noe-alt2.frag
var noe_alt2_default = `#version 300 es
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

const float margin = 0.9;

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
  float spiral = sin(100.0 * (sqrt(circleDistance*13.0) - (u_time * 0.0001) * theta - 0.01 * u_time * 0.001)); 

  // float edgeLightZone = pow(clamp(abs(dot(cUV.xyx, light_pos)), 0.0, 1.0) * 2.0, 4.0);

  float colorSpiral = sin(100.0 * (sqrt(circleDistance * 10.0) - 0.001 * theta - 0.3 * u_time * 0.00005));
  // vec3 hueRotation = hsv2rgb(vec3(colorSpiral, 1.0, 0.5));

  fragColor = vec4(0, spiral, 0, 1.0);
}`;

// src/005-thoughtform-hidenoe/shaders/noe.ts
var basicShaderConfig2 = {
  attributes: {
    vertex: "a_vertex",
    uv0: "a_uv0",
    normal: "a_normal",
    vertexColor: "a_vertex_color"
  },
  uniforms: {
    view: "u_view",
    projection: "u_projection",
    objectToWorld: "u_object_to_world",
    objectToWorldInv: "u_object_to_world_inv",
    light0: "u_light_0",
    light0Color: "u_light_0_color",
    time: "u_time",
    albedo: "u_albedo",
    texture0: "u_texture_0",
    texture1: "u_texture_1",
    texture2: "u_texture_2"
  }
};
var frags = {
  normal: noe_default,
  debug: noe_debug_default,
  alt2: noe_alt2_default
};
var noe2 = (app, fragShader = noe_default) => new Shader(basicShaderConfig2).vertex(basic_default).fragment(fragShader).app(app);

// src/005-thoughtform-hidenoe/main.ts
var app = new WebGLApp({ fov: 45 });
var camera = new Transform([0, 0, 2], etoq([0, 0, 0]));
var light = new Transform([1, -1, 0], etoq([0, 0, 0]));
var transformPlane = new Transform(v3(0), etoq([0, 180, 0]), v3(1.8));
var transformSphere = new Transform(v3(0), etoq([0, 180, 180]), v3(0.6));
document.body.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;
  const { clientWidth, clientHeight } = document.body;
  const screenX = clientX / clientWidth;
  const screenY = clientY / clientHeight;
  const centeredX = screenX * 2 - 1;
  const centeredY = screenY * 2 - 1;
  light.position[1] = centeredX;
  light.position[0] = centeredY;
});
app.onUpdate((time, app2) => {
});
var noeShader = frags.normal;
var hShader = outerFrags.normal;
if (location.search.includes("alt1")) {
  noeShader = frags.debug;
}
if (location.search.includes("alt2")) {
  noeShader = frags.alt2;
}
if (location.search.includes("alt3")) {
  hShader = outerFrags.alt3;
}
new Renderable(app, transformPlane, new MeshRenderer(app, plane_default, outer2(app, hShader), camera).configure({}));
new Renderable(app, transformSphere, new MeshRenderer(app, plane_default, noe2(app, noeShader), camera, light).configure({}));
app.start();
