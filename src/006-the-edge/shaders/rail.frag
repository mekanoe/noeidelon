#version 300 es
precision highp float;

/*
  This one is weird... We ran into engine limitations that won't exist in future iterations
  Namely that we don't have a way to get screen space pixel location yet.
*/

uniform float u_time;

in vec2 uv0;

out vec4 fragColor;

const float railWidth = 0.041666;
const float railWiggle = 0.0015;

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) { 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

  // First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

  // Permutations
  i = mod289(i); 
  vec4 p = permute( permute( permute( 
            i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
          + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
          + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

  // Gradients: 7x7 points over a square, mapped onto an octahedron.
  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  const float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0, 0, 0, 0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

  //Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  // Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
}

void main() {
  vec2 cUV = uv0 * 2.0 - 1.0;
  float sintime = sin(u_time * 0.0001);

  // wiggle
  float vY = cos(uv0.y * sintime);
  float vX = sin(uv0.x * sintime * 10000.0);
  float vibes = railWiggle * snoise(vec3(vY, vX, u_time));
  
  // smoothly calculate the wiggle
  float rail = 1.0 - step(abs(pow(abs(cUV.y) - railWidth + vibes, 30.0)), 1.0);
  
  // snip out wrapping
  // if (abs(cUV.y) > railWidth * 2.0) {
  //   discard;
  // }
  
  vec4 railColor = vec4(rail);

  // albedo (staticy colorful <333)
  float noise = abs(sin(snoise(uv0.xxy * 10000. * u_time)));
  float noise2 = abs(sin(snoise(uv0.yxy * 10000.* u_time)));
  float noise3 = abs(sin(snoise(uv0.xyx * 10000. * u_time)));
  railColor.rgb -= (vec3(noise, noise2, noise3) * 0.3);

  // simplex noise based on 3 moire spirals
  float theta = atan(cUV.y, uv0.x);
  float spiral = sin(10.0 * (sqrt(19.0 + (15.0 * sintime * 0.05))) - 1000.0 * theta - 0.01 * u_time * 0.0001); 

  float theta2 = atan(1.0-(cUV.y / 1000.0), uv0.x - (railWidth / 20.));
  float spiral2 = sin(10.0 * (sqrt(20.0 + u_time * 0.00001) - 10000.0 * theta2 - 0.01 * u_time * 0.0001)); 

  float theta3 = atan(1.0 - uv0.y/10.0, uv0.x);
  float spiral3 = sin(100.0 * (sqrt(100.0 + uv0.y) - 100000.0 * theta3 - 0.01 * sintime * 0.0001));

  float sparkleNoise = snoise(vec3(spiral, spiral2, u_time * 0.00001));
  fragColor.r = step(abs(spiral2 * spiral * sparkleNoise), mix(0.0333, 0.0666, abs(uv0.y + sin(u_time * 0.00001))));
  fragColor.r *= pow(1.0 - abs(cUV.y), 3.0) * abs(spiral3);
  fragColor.r *= 10.0;
  
  if (cUV.y > 0.0) {
    fragColor.r = 0.0;
  }

  // fragColor.g = spiral3;

  // keep within 0-1
  fragColor = clamp(vec4(fragColor + railColor), vec4(0), vec4(1));
}
