var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};

// node_modules/gl-matrix/esm/quat.js
var exports_quat = {};
__export(exports_quat, {
  str: () => {
    {
      return str2;
    }
  },
  squaredLength: () => {
    {
      return squaredLength3;
    }
  },
  sqrLen: () => {
    {
      return sqrLen2;
    }
  },
  sqlerp: () => {
    {
      return sqlerp;
    }
  },
  slerp: () => {
    {
      return slerp;
    }
  },
  setAxisAngle: () => {
    {
      return setAxisAngle;
    }
  },
  setAxes: () => {
    {
      return setAxes;
    }
  },
  set: () => {
    {
      return set3;
    }
  },
  scale: () => {
    {
      return scale3;
    }
  },
  rotationTo: () => {
    {
      return rotationTo;
    }
  },
  rotateZ: () => {
    {
      return rotateZ2;
    }
  },
  rotateY: () => {
    {
      return rotateY2;
    }
  },
  rotateX: () => {
    {
      return rotateX2;
    }
  },
  random: () => {
    {
      return random2;
    }
  },
  pow: () => {
    {
      return pow;
    }
  },
  normalize: () => {
    {
      return normalize3;
    }
  },
  multiply: () => {
    {
      return multiply2;
    }
  },
  mul: () => {
    {
      return mul2;
    }
  },
  ln: () => {
    {
      return ln;
    }
  },
  lerp: () => {
    {
      return lerp3;
    }
  },
  length: () => {
    {
      return length3;
    }
  },
  len: () => {
    {
      return len2;
    }
  },
  invert: () => {
    {
      return invert;
    }
  },
  identity: () => {
    {
      return identity;
    }
  },
  getAxisAngle: () => {
    {
      return getAxisAngle;
    }
  },
  getAngle: () => {
    {
      return getAngle;
    }
  },
  fromValues: () => {
    {
      return fromValues3;
    }
  },
  fromMat3: () => {
    {
      return fromMat3;
    }
  },
  fromEuler: () => {
    {
      return fromEuler;
    }
  },
  exp: () => {
    {
      return exp;
    }
  },
  exactEquals: () => {
    {
      return exactEquals3;
    }
  },
  equals: () => {
    {
      return equals3;
    }
  },
  dot: () => {
    {
      return dot3;
    }
  },
  create: () => {
    {
      return create4;
    }
  },
  copy: () => {
    {
      return copy3;
    }
  },
  conjugate: () => {
    {
      return conjugate;
    }
  },
  clone: () => {
    {
      return clone3;
    }
  },
  calculateW: () => {
    {
      return calculateW;
    }
  },
  add: () => {
    {
      return add3;
    }
  }
});

// node_modules/gl-matrix/esm/common.js
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
var RANDOM = Math.random;
var degree = Math.PI / 180;
if (!Math.hypot)
  Math.hypot = function() {
    var y = 0, i = arguments.length;
    while (i--) {
      y += arguments[i] * arguments[i];
    }
    return Math.sqrt(y);
  };

// node_modules/gl-matrix/esm/mat3.js
function create() {
  var out = new ARRAY_TYPE(9);
  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
  }
  out[0] = 1;
  out[4] = 1;
  out[8] = 1;
  return out;
}

// node_modules/gl-matrix/esm/vec3.js
var exports_vec3 = {};
__export(exports_vec3, {
  zero: () => {
    {
      return zero;
    }
  },
  transformQuat: () => {
    {
      return transformQuat;
    }
  },
  transformMat4: () => {
    {
      return transformMat4;
    }
  },
  transformMat3: () => {
    {
      return transformMat3;
    }
  },
  subtract: () => {
    {
      return subtract;
    }
  },
  sub: () => {
    {
      return sub;
    }
  },
  str: () => {
    {
      return str;
    }
  },
  squaredLength: () => {
    {
      return squaredLength;
    }
  },
  squaredDistance: () => {
    {
      return squaredDistance;
    }
  },
  sqrLen: () => {
    {
      return sqrLen;
    }
  },
  sqrDist: () => {
    {
      return sqrDist;
    }
  },
  set: () => {
    {
      return set;
    }
  },
  scaleAndAdd: () => {
    {
      return scaleAndAdd;
    }
  },
  scale: () => {
    {
      return scale;
    }
  },
  round: () => {
    {
      return round;
    }
  },
  rotateZ: () => {
    {
      return rotateZ;
    }
  },
  rotateY: () => {
    {
      return rotateY;
    }
  },
  rotateX: () => {
    {
      return rotateX;
    }
  },
  random: () => {
    {
      return random;
    }
  },
  normalize: () => {
    {
      return normalize;
    }
  },
  negate: () => {
    {
      return negate;
    }
  },
  multiply: () => {
    {
      return multiply;
    }
  },
  mul: () => {
    {
      return mul;
    }
  },
  min: () => {
    {
      return min;
    }
  },
  max: () => {
    {
      return max;
    }
  },
  lerp: () => {
    {
      return lerp;
    }
  },
  length: () => {
    {
      return length;
    }
  },
  len: () => {
    {
      return len;
    }
  },
  inverse: () => {
    {
      return inverse;
    }
  },
  hermite: () => {
    {
      return hermite;
    }
  },
  fromValues: () => {
    {
      return fromValues;
    }
  },
  forEach: () => {
    {
      return forEach;
    }
  },
  floor: () => {
    {
      return floor;
    }
  },
  exactEquals: () => {
    {
      return exactEquals;
    }
  },
  equals: () => {
    {
      return equals;
    }
  },
  dot: () => {
    {
      return dot;
    }
  },
  divide: () => {
    {
      return divide;
    }
  },
  div: () => {
    {
      return div;
    }
  },
  distance: () => {
    {
      return distance;
    }
  },
  dist: () => {
    {
      return dist;
    }
  },
  cross: () => {
    {
      return cross;
    }
  },
  create: () => {
    {
      return create2;
    }
  },
  copy: () => {
    {
      return copy;
    }
  },
  clone: () => {
    {
      return clone;
    }
  },
  ceil: () => {
    {
      return ceil;
    }
  },
  bezier: () => {
    {
      return bezier;
    }
  },
  angle: () => {
    {
      return angle;
    }
  },
  add: () => {
    {
      return add;
    }
  }
});
function create2() {
  var out = new ARRAY_TYPE(3);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  return out;
}
function clone(a) {
  var out = new ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.hypot(x, y, z);
}
function fromValues(x, y, z) {
  var out = new ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}
function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}
function scaleAndAdd(out, a, b, scale2) {
  out[0] = a[0] + b[0] * scale2;
  out[1] = a[1] + b[1] * scale2;
  out[2] = a[2] + b[2] * scale2;
  return out;
}
function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.hypot(x, y, z);
}
function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}
function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}
function inverse(out, a) {
  out[0] = 1 / a[0];
  out[1] = 1 / a[1];
  out[2] = 1 / a[2];
  return out;
}
function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
  }
  out[0] = a[0] * len;
  out[1] = a[1] * len;
  out[2] = a[2] * len;
  return out;
}
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(out, a, b) {
  var ax = a[0], ay = a[1], az = a[2];
  var bx = b[0], by = b[1], bz = b[2];
  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}
function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}
function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;
  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
  return out;
}
function random(out, scale2) {
  scale2 = scale2 || 1;
  var r = RANDOM() * 2 * Math.PI;
  var z = RANDOM() * 2 - 1;
  var zScale = Math.sqrt(1 - z * z) * scale2;
  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale2;
  return out;
}
function transformMat4(out, a, m) {
  var x = a[0], y = a[1], z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}
function transformMat3(out, a, m) {
  var x = a[0], y = a[1], z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}
function transformQuat(out, a, q) {
  var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
  var x = a[0], y = a[1], z = a[2];
  var uvx = qy * z - qz * y, uvy = qz * x - qx * z, uvz = qx * y - qy * x;
  var uuvx = qy * uvz - qz * uvy, uuvy = qz * uvx - qx * uvz, uuvz = qx * uvy - qy * uvx;
  var w2 = qw * 2;
  uvx *= w2;
  uvy *= w2;
  uvz *= w2;
  uuvx *= 2;
  uuvy *= 2;
  uuvz *= 2;
  out[0] = x + uvx + uuvx;
  out[1] = y + uvy + uuvy;
  out[2] = z + uvz + uuvz;
  return out;
}
function rotateX(out, a, b, rad) {
  var p = [], r = [];
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];
  r[0] = p[0];
  r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
  r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad);
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
function rotateY(out, a, b, rad) {
  var p = [], r = [];
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];
  r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad);
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
function rotateZ(out, a, b, rad) {
  var p = [], r = [];
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];
  r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
  r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
  r[2] = p[2];
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];
  return out;
}
function angle(a, b) {
  var ax = a[0], ay = a[1], az = a[2], bx = b[0], by = b[1], bz = b[2], mag1 = Math.sqrt(ax * ax + ay * ay + az * az), mag2 = Math.sqrt(bx * bx + by * by + bz * bz), mag = mag1 * mag2, cosine = mag && dot(a, b) / mag;
  return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
function zero(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  return out;
}
function str(a) {
  return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
function equals(a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2];
  var b0 = b[0], b1 = b[1], b2 = b[2];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2));
}
var sub = subtract;
var mul = multiply;
var div = divide;
var dist = distance;
var sqrDist = squaredDistance;
var len = length;
var sqrLen = squaredLength;
var forEach = function() {
  var vec = create2();
  return function(a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 3;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset;i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
    }
    return a;
  };
}();

// node_modules/gl-matrix/esm/vec4.js
function create3() {
  var out = new ARRAY_TYPE(4);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
  }
  return out;
}
function clone2(a) {
  var out = new ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
function fromValues2(x, y, z, w) {
  var out = new ARRAY_TYPE(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
function copy2(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}
function set2(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}
function add2(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}
function scale2(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}
function length2(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.hypot(x, y, z, w);
}
function squaredLength2(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}
function normalize2(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len2 = x * x + y * y + z * z + w * w;
  if (len2 > 0) {
    len2 = 1 / Math.sqrt(len2);
  }
  out[0] = x * len2;
  out[1] = y * len2;
  out[2] = z * len2;
  out[3] = w * len2;
  return out;
}
function dot2(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
function lerp2(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}
function exactEquals2(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
function equals2(a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3));
}
var forEach2 = function() {
  var vec = create3();
  return function(a, stride, offset, count, fn, arg) {
    var i, l;
    if (!stride) {
      stride = 4;
    }
    if (!offset) {
      offset = 0;
    }
    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }
    for (i = offset;i < l; i += stride) {
      vec[0] = a[i];
      vec[1] = a[i + 1];
      vec[2] = a[i + 2];
      vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];
      a[i + 1] = vec[1];
      a[i + 2] = vec[2];
      a[i + 3] = vec[3];
    }
    return a;
  };
}();

// node_modules/gl-matrix/esm/quat.js
function create4() {
  var out = new ARRAY_TYPE(4);
  if (ARRAY_TYPE != Float32Array) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
  }
  out[3] = 1;
  return out;
}
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}
function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2;
  var s = Math.sin(rad / 2);
  if (s > EPSILON) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}
function getAngle(a, b) {
  var dotproduct = dot3(a, b);
  return Math.acos(2 * dotproduct * dotproduct - 1);
}
function multiply2(out, a, b) {
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bx = b[0], by = b[1], bz = b[2], bw = b[3];
  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}
function rotateX2(out, a, rad) {
  rad *= 0.5;
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bx = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}
function rotateY2(out, a, rad) {
  rad *= 0.5;
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var by = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}
function rotateZ2(out, a, rad) {
  rad *= 0.5;
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bz = Math.sin(rad), bw = Math.cos(rad);
  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}
function calculateW(out, a) {
  var x = a[0], y = a[1], z = a[2];
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1 - x * x - y * y - z * z));
  return out;
}
function exp(out, a) {
  var x = a[0], y = a[1], z = a[2], w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var et = Math.exp(w);
  var s = r > 0 ? et * Math.sin(r) / r : 0;
  out[0] = x * s;
  out[1] = y * s;
  out[2] = z * s;
  out[3] = et * Math.cos(r);
  return out;
}
function ln(out, a) {
  var x = a[0], y = a[1], z = a[2], w = a[3];
  var r = Math.sqrt(x * x + y * y + z * z);
  var t = r > 0 ? Math.atan2(r, w) / r : 0;
  out[0] = x * t;
  out[1] = y * t;
  out[2] = z * t;
  out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
  return out;
}
function pow(out, a, b) {
  ln(out, a);
  scale3(out, out, b);
  exp(out, out);
  return out;
}
function slerp(out, a, b, t) {
  var ax = a[0], ay = a[1], az = a[2], aw = a[3];
  var bx = b[0], by = b[1], bz = b[2], bw = b[3];
  var omega, cosom, sinom, scale0, scale1;
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  if (cosom < 0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  }
  if (1 - cosom > EPSILON) {
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    scale0 = 1 - t;
    scale1 = t;
  }
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;
  return out;
}
function random2(out) {
  var u1 = RANDOM();
  var u2 = RANDOM();
  var u3 = RANDOM();
  var sqrt1MinusU1 = Math.sqrt(1 - u1);
  var sqrtU1 = Math.sqrt(u1);
  out[0] = sqrt1MinusU1 * Math.sin(2 * Math.PI * u2);
  out[1] = sqrt1MinusU1 * Math.cos(2 * Math.PI * u2);
  out[2] = sqrtU1 * Math.sin(2 * Math.PI * u3);
  out[3] = sqrtU1 * Math.cos(2 * Math.PI * u3);
  return out;
}
function invert(out, a) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  var dot3 = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot3 ? 1 / dot3 : 0;
  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}
function fromMat3(out, m) {
  var fTrace = m[0] + m[4] + m[8];
  var fRoot;
  if (fTrace > 0) {
    fRoot = Math.sqrt(fTrace + 1);
    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    var i = 0;
    if (m[4] > m[0])
      i = 1;
    if (m[8] > m[i * 3 + i])
      i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;
    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }
  return out;
}
function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;
  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);
  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;
  return out;
}
function str2(a) {
  return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
var clone3 = clone2;
var fromValues3 = fromValues2;
var copy3 = copy2;
var set3 = set2;
var add3 = add2;
var mul2 = multiply2;
var scale3 = scale2;
var dot3 = dot2;
var lerp3 = lerp2;
var length3 = length2;
var len2 = length3;
var squaredLength3 = squaredLength2;
var sqrLen2 = squaredLength3;
var normalize3 = normalize2;
var exactEquals3 = exactEquals2;
var equals3 = equals2;
var rotationTo = function() {
  var tmpvec3 = create2();
  var xUnitVec3 = fromValues(1, 0, 0);
  var yUnitVec3 = fromValues(0, 1, 0);
  return function(out, a, b) {
    var dot4 = dot(a, b);
    if (dot4 < -0.999999) {
      cross(tmpvec3, xUnitVec3, a);
      if (len(tmpvec3) < 0.000001)
        cross(tmpvec3, yUnitVec3, a);
      normalize(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot4 > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      cross(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot4;
      return normalize3(out, out);
    }
  };
}();
var sqlerp = function() {
  var temp1 = create4();
  var temp2 = create4();
  return function(out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));
    return out;
  };
}();
var setAxes = function() {
  var matr = create();
  return function(out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];
    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];
    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];
    return normalize3(out, fromMat3(out, matr));
  };
}();

// node_modules/gl-matrix/esm/mat4.js
var exports_mat4 = {};
__export(exports_mat4, {
  transpose: () => {
    {
      return transpose;
    }
  },
  translate: () => {
    {
      return translate;
    }
  },
  targetTo: () => {
    {
      return targetTo;
    }
  },
  subtract: () => {
    {
      return subtract2;
    }
  },
  sub: () => {
    {
      return sub2;
    }
  },
  str: () => {
    {
      return str3;
    }
  },
  set: () => {
    {
      return set4;
    }
  },
  scale: () => {
    {
      return scale4;
    }
  },
  rotateZ: () => {
    {
      return rotateZ3;
    }
  },
  rotateY: () => {
    {
      return rotateY3;
    }
  },
  rotateX: () => {
    {
      return rotateX3;
    }
  },
  rotate: () => {
    {
      return rotate;
    }
  },
  perspectiveZO: () => {
    {
      return perspectiveZO;
    }
  },
  perspectiveNO: () => {
    {
      return perspectiveNO;
    }
  },
  perspectiveFromFieldOfView: () => {
    {
      return perspectiveFromFieldOfView;
    }
  },
  perspective: () => {
    {
      return perspective;
    }
  },
  orthoZO: () => {
    {
      return orthoZO;
    }
  },
  orthoNO: () => {
    {
      return orthoNO;
    }
  },
  ortho: () => {
    {
      return ortho;
    }
  },
  multiplyScalarAndAdd: () => {
    {
      return multiplyScalarAndAdd;
    }
  },
  multiplyScalar: () => {
    {
      return multiplyScalar;
    }
  },
  multiply: () => {
    {
      return multiply3;
    }
  },
  mul: () => {
    {
      return mul3;
    }
  },
  lookAt: () => {
    {
      return lookAt;
    }
  },
  invert: () => {
    {
      return invert2;
    }
  },
  identity: () => {
    {
      return identity2;
    }
  },
  getTranslation: () => {
    {
      return getTranslation;
    }
  },
  getScaling: () => {
    {
      return getScaling;
    }
  },
  getRotation: () => {
    {
      return getRotation;
    }
  },
  frustum: () => {
    {
      return frustum;
    }
  },
  fromZRotation: () => {
    {
      return fromZRotation;
    }
  },
  fromYRotation: () => {
    {
      return fromYRotation;
    }
  },
  fromXRotation: () => {
    {
      return fromXRotation;
    }
  },
  fromValues: () => {
    {
      return fromValues4;
    }
  },
  fromTranslation: () => {
    {
      return fromTranslation;
    }
  },
  fromScaling: () => {
    {
      return fromScaling;
    }
  },
  fromRotationTranslationScaleOrigin: () => {
    {
      return fromRotationTranslationScaleOrigin;
    }
  },
  fromRotationTranslationScale: () => {
    {
      return fromRotationTranslationScale;
    }
  },
  fromRotationTranslation: () => {
    {
      return fromRotationTranslation;
    }
  },
  fromRotation: () => {
    {
      return fromRotation;
    }
  },
  fromQuat2: () => {
    {
      return fromQuat2;
    }
  },
  fromQuat: () => {
    {
      return fromQuat;
    }
  },
  frob: () => {
    {
      return frob;
    }
  },
  exactEquals: () => {
    {
      return exactEquals4;
    }
  },
  equals: () => {
    {
      return equals4;
    }
  },
  determinant: () => {
    {
      return determinant;
    }
  },
  create: () => {
    {
      return create5;
    }
  },
  copy: () => {
    {
      return copy4;
    }
  },
  clone: () => {
    {
      return clone4;
    }
  },
  adjoint: () => {
    {
      return adjoint;
    }
  },
  add: () => {
    {
      return add4;
    }
  }
});
function create5() {
  var out = new ARRAY_TYPE(16);
  if (ARRAY_TYPE != Float32Array) {
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
  }
  out[0] = 1;
  out[5] = 1;
  out[10] = 1;
  out[15] = 1;
  return out;
}
function clone4(a) {
  var out = new ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
function copy4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
function fromValues4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
function set4(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}
function identity2(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function transpose(out, a) {
  if (out === a) {
    var a01 = a[1], a02 = a[2], a03 = a[3];
    var a12 = a[6], a13 = a[7];
    var a23 = a[11];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }
  return out;
}
function invert2(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;
  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
  if (!det) {
    return null;
  }
  det = 1 / det;
  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
  return out;
}
function adjoint(out, a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}
function determinant(a) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}
function multiply3(out, a, b) {
  var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
  var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
  var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
  var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[4];
  b1 = b[5];
  b2 = b[6];
  b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[8];
  b1 = b[9];
  b2 = b[10];
  b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  b0 = b[12];
  b1 = b[13];
  b2 = b[14];
  b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}
function translate(out, a, v) {
  var x = v[0], y = v[1], z = v[2];
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a03;
    out[4] = a10;
    out[5] = a11;
    out[6] = a12;
    out[7] = a13;
    out[8] = a20;
    out[9] = a21;
    out[10] = a22;
    out[11] = a23;
    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }
  return out;
}
function scale4(out, a, v) {
  var x = v[0], y = v[1], z = v[2];
  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}
function rotate(out, a, rad, axis) {
  var x = axis[0], y = axis[1], z = axis[2];
  var len3 = Math.hypot(x, y, z);
  var s, c, t;
  var a00, a01, a02, a03;
  var a10, a11, a12, a13;
  var a20, a21, a22, a23;
  var b00, b01, b02;
  var b10, b11, b12;
  var b20, b21, b22;
  if (len3 < EPSILON) {
    return null;
  }
  len3 = 1 / len3;
  x *= len3;
  y *= len3;
  z *= len3;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  a00 = a[0];
  a01 = a[1];
  a02 = a[2];
  a03 = a[3];
  a10 = a[4];
  a11 = a[5];
  a12 = a[6];
  a13 = a[7];
  a20 = a[8];
  a21 = a[9];
  a22 = a[10];
  a23 = a[11];
  b00 = x * x * t + c;
  b01 = y * x * t + z * s;
  b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;
  b11 = y * y * t + c;
  b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;
  b21 = y * z * t - x * s;
  b22 = z * z * t + c;
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;
  if (a !== out) {
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}
function rotateX3(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];
  if (a !== out) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}
function rotateY3(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];
  if (a !== out) {
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}
function rotateZ3(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  if (a !== out) {
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromRotation(out, rad, axis) {
  var x = axis[0], y = axis[1], z = axis[2];
  var len3 = Math.hypot(x, y, z);
  var s, c, t;
  if (len3 < EPSILON) {
    return null;
  }
  len3 = 1 / len3;
  x *= len3;
  y *= len3;
  z *= len3;
  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;
  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function fromRotationTranslation(out, q, v) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
function fromQuat2(out, a) {
  var translation = new ARRAY_TYPE(3);
  var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7];
  var magnitude = bx * bx + by * by + bz * bz + bw * bw;
  if (magnitude > 0) {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
  } else {
    translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
    translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
    translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
  }
  fromRotationTranslation(out, a, translation);
  return out;
}
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];
  return out;
}
function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];
  out[0] = Math.hypot(m11, m12, m13);
  out[1] = Math.hypot(m21, m22, m23);
  out[2] = Math.hypot(m31, m32, m33);
  return out;
}
function getRotation(out, mat) {
  var scaling = new ARRAY_TYPE(3);
  getScaling(scaling, mat);
  var is1 = 1 / scaling[0];
  var is2 = 1 / scaling[1];
  var is3 = 1 / scaling[2];
  var sm11 = mat[0] * is1;
  var sm12 = mat[1] * is2;
  var sm13 = mat[2] * is3;
  var sm21 = mat[4] * is1;
  var sm22 = mat[5] * is2;
  var sm23 = mat[6] * is3;
  var sm31 = mat[8] * is1;
  var sm32 = mat[9] * is2;
  var sm33 = mat[10] * is3;
  var trace = sm11 + sm22 + sm33;
  var S = 0;
  if (trace > 0) {
    S = Math.sqrt(trace + 1) * 2;
    out[3] = 0.25 * S;
    out[0] = (sm23 - sm32) / S;
    out[1] = (sm31 - sm13) / S;
    out[2] = (sm12 - sm21) / S;
  } else if (sm11 > sm22 && sm11 > sm33) {
    S = Math.sqrt(1 + sm11 - sm22 - sm33) * 2;
    out[3] = (sm23 - sm32) / S;
    out[0] = 0.25 * S;
    out[1] = (sm12 + sm21) / S;
    out[2] = (sm31 + sm13) / S;
  } else if (sm22 > sm33) {
    S = Math.sqrt(1 + sm22 - sm11 - sm33) * 2;
    out[3] = (sm31 - sm13) / S;
    out[0] = (sm12 + sm21) / S;
    out[1] = 0.25 * S;
    out[2] = (sm23 + sm32) / S;
  } else {
    S = Math.sqrt(1 + sm33 - sm11 - sm22) * 2;
    out[3] = (sm12 - sm21) / S;
    out[0] = (sm31 + sm13) / S;
    out[1] = (sm23 + sm32) / S;
    out[2] = 0.25 * S;
  }
  return out;
}
function fromRotationTranslationScale(out, q, v, s) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];
  var ox = o[0];
  var oy = o[1];
  var oz = o[2];
  var out0 = (1 - (yy + zz)) * sx;
  var out1 = (xy + wz) * sx;
  var out2 = (xz - wy) * sx;
  var out4 = (xy - wz) * sy;
  var out5 = (1 - (xx + zz)) * sy;
  var out6 = (yz + wx) * sy;
  var out8 = (xz + wy) * sz;
  var out9 = (yz - wx) * sz;
  var out10 = (1 - (xx + yy)) * sz;
  out[0] = out0;
  out[1] = out1;
  out[2] = out2;
  out[3] = 0;
  out[4] = out4;
  out[5] = out5;
  out[6] = out6;
  out[7] = 0;
  out[8] = out8;
  out[9] = out9;
  out[10] = out10;
  out[11] = 0;
  out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
  out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
  out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
  out[15] = 1;
  return out;
}
function fromQuat(out, q) {
  var x = q[0], y = q[1], z = q[2], w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;
  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;
  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;
  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}
function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}
function perspectiveNO(out, fovy, aspect, near, far) {
  var f = 1 / Math.tan(fovy / 2), nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = (far + near) * nf;
    out[14] = 2 * far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -2 * near;
  }
  return out;
}
function perspectiveZO(out, fovy, aspect, near, far) {
  var f = 1 / Math.tan(fovy / 2), nf;
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[15] = 0;
  if (far != null && far !== Infinity) {
    nf = 1 / (near - far);
    out[10] = far * nf;
    out[14] = far * near * nf;
  } else {
    out[10] = -1;
    out[14] = -near;
  }
  return out;
}
function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180);
  var xScale = 2 / (leftTan + rightTan);
  var yScale = 2 / (upTan + downTan);
  out[0] = xScale;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = yScale;
  out[6] = 0;
  out[7] = 0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near / (near - far);
  out[15] = 0;
  return out;
}
function orthoNO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}
function orthoZO(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = near * nf;
  out[15] = 1;
  return out;
}
function lookAt(out, eye, center, up) {
  var x0, x1, x2, y0, y1, y2, z0, z1, z2, len3;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];
  if (Math.abs(eyex - centerx) < EPSILON && Math.abs(eyey - centery) < EPSILON && Math.abs(eyez - centerz) < EPSILON) {
    return identity2(out);
  }
  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;
  len3 = 1 / Math.hypot(z0, z1, z2);
  z0 *= len3;
  z1 *= len3;
  z2 *= len3;
  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len3 = Math.hypot(x0, x1, x2);
  if (!len3) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len3 = 1 / len3;
    x0 *= len3;
    x1 *= len3;
    x2 *= len3;
  }
  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;
  len3 = Math.hypot(y0, y1, y2);
  if (!len3) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len3 = 1 / len3;
    y0 *= len3;
    y1 *= len3;
    y2 *= len3;
  }
  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;
  return out;
}
function targetTo(out, eye, target, up) {
  var eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
  var z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
  var len3 = z0 * z0 + z1 * z1 + z2 * z2;
  if (len3 > 0) {
    len3 = 1 / Math.sqrt(len3);
    z0 *= len3;
    z1 *= len3;
    z2 *= len3;
  }
  var x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
  len3 = x0 * x0 + x1 * x1 + x2 * x2;
  if (len3 > 0) {
    len3 = 1 / Math.sqrt(len3);
    x0 *= len3;
    x1 *= len3;
    x2 *= len3;
  }
  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
}
function str3(a) {
  return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
function frob(a) {
  return Math.hypot(a[0], a[1], a[2], a[3], a[4], a[5], a[6], a[7], a[8], a[9], a[10], a[11], a[12], a[13], a[14], a[15]);
}
function add4(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}
function subtract2(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}
function multiplyScalarAndAdd(out, a, b, scale5) {
  out[0] = a[0] + b[0] * scale5;
  out[1] = a[1] + b[1] * scale5;
  out[2] = a[2] + b[2] * scale5;
  out[3] = a[3] + b[3] * scale5;
  out[4] = a[4] + b[4] * scale5;
  out[5] = a[5] + b[5] * scale5;
  out[6] = a[6] + b[6] * scale5;
  out[7] = a[7] + b[7] * scale5;
  out[8] = a[8] + b[8] * scale5;
  out[9] = a[9] + b[9] * scale5;
  out[10] = a[10] + b[10] * scale5;
  out[11] = a[11] + b[11] * scale5;
  out[12] = a[12] + b[12] * scale5;
  out[13] = a[13] + b[13] * scale5;
  out[14] = a[14] + b[14] * scale5;
  out[15] = a[15] + b[15] * scale5;
  return out;
}
function exactEquals4(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
function equals4(a, b) {
  var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
  var a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
  var a8 = a[8], a9 = a[9], a10 = a[10], a11 = a[11];
  var a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
  var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
  var b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
  var b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
  var b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
  return Math.abs(a0 - b0) <= EPSILON * Math.max(1, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= EPSILON * Math.max(1, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= EPSILON * Math.max(1, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= EPSILON * Math.max(1, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= EPSILON * Math.max(1, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= EPSILON * Math.max(1, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= EPSILON * Math.max(1, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= EPSILON * Math.max(1, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= EPSILON * Math.max(1, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= EPSILON * Math.max(1, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= EPSILON * Math.max(1, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= EPSILON * Math.max(1, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= EPSILON * Math.max(1, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= EPSILON * Math.max(1, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= EPSILON * Math.max(1, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= EPSILON * Math.max(1, Math.abs(a15), Math.abs(b15));
}
var perspective = perspectiveNO;
var ortho = orthoNO;
var mul3 = multiply3;
var sub2 = subtract2;

// src/renderer/transform.ts
class Transform {
  position;
  rotation;
  scale5;
  constructor(position = exports_vec3.create(), rotation = exports_quat.create(), scale5 = exports_vec3.fromValues(1, 1, 1)) {
    this.position = position;
    this.rotation = rotation;
    this.scale = scale5;
  }
  rotateEuler(x, y, z) {
    exports_quat.fromEuler(this.rotation, x, y, z);
    return this;
  }
  toMat4() {
    const mat = exports_mat4.create();
    exports_mat4.fromRotationTranslationScale(mat, this.rotation, this.position, this.scale);
    return mat;
  }
}
var etoq = (v3) => exports_quat.fromEuler(exports_quat.create(), v3[0], v3[1], v3[2]);
var v3 = (v) => [v, v, v];

// src/renderer/behavior.ts
class Behavior {
  app;
  constructor(app) {
    this.app = app;
    this.onStart && app.onStart(this.onStart.bind(this));
    this.onUpdate && app.onUpdate(this.onUpdate.bind(this));
    this.onAfterUpdate && app.onAfterUpdate(this.onAfterUpdate.bind(this));
    this.onBeforeUpdate && app.onBeforeUpdate(this.onBeforeUpdate.bind(this));
    this.onDraw && app.onDraw(this.onDraw.bind(this));
  }
}

// src/renderer/mesh-renderer.ts
class MeshRenderer extends Behavior {
  app;
  mesh;
  shader;
  camera;
  light;
  config;
  projectionMatrix = exports_mat4.create();
  buffers = { textures: {} };
  faceDataType;
  colorDataType;
  constructor(app, mesh, shader, camera = new Transform([0, 0, -6]), light = new Transform([100, 100, 0]), config = {}) {
    super(app);
    this.app = app;
    this.mesh = mesh;
    this.shader = shader;
    this.camera = camera;
    this.light = light;
    this.config = config;
    this.faceDataType = this.getDataType(mesh.config.faces);
    this.colorDataType = mesh.config.colors ? this.getDataType(mesh.config.colors) : null;
  }
  getDataType(array) {
    switch (array.BYTES_PER_ELEMENT) {
      case 1:
        return 5121;
      case 2:
        return 5123;
      case 4:
        return 5125;
      default:
        return 5126;
    }
  }
  configure(config) {
    this.config = config;
    return this;
  }
  makeBuffer(data, target = 34962) {
    const gl = this.app.gl;
    const buffer = gl.createBuffer();
    if (!buffer) {
      throw new Error("failed to create a buffer");
    }
    gl.bindBuffer(target, buffer);
    gl.bufferData(target, data, gl.STATIC_DRAW);
    gl.bindBuffer(target, null);
    return buffer;
  }
  initializeBuffers() {
    const vao = this.app.gl.createVertexArray();
    if (!vao) {
      throw new Error("VAO creation failed");
    }
    this.buffers.vao = vao;
    this.app.gl.bindVertexArray(vao);
    this.buffers.faces = this.makeBuffer(this.mesh.config.faces, this.app.gl.ELEMENT_ARRAY_BUFFER);
    const shaderMap = this.shader.mappings;
    this.buffers.position = this.makeBuffer(this.mesh.config.positions);
    this.bindAttrib(this.buffers.position, shaderMap.attributes.vertex, 3, this.app.gl.FLOAT);
    if (this.mesh.config.normals) {
      this.buffers.normal = this.makeBuffer(this.mesh.config.normals);
      this.bindAttrib(this.buffers.normal, shaderMap.attributes.normal, 3, this.app.gl.FLOAT, true);
    }
    if (this.mesh.config.colors) {
      this.buffers.color = this.makeBuffer(this.mesh.config.colors);
      this.bindAttrib(this.buffers.color, shaderMap.attributes.vertexColor, 4, this.colorDataType || this.app.gl.UNSIGNED_BYTE);
    }
    if (this.mesh.config.uvs) {
      this.buffers.uv = this.makeBuffer(this.mesh.config.uvs);
      this.bindAttrib(this.buffers.uv, shaderMap.attributes.uv0, 2, this.app.gl.FLOAT);
    }
    this.app.gl.bindVertexArray(null);
  }
  async initializeTextures() {
    const { gl } = this.app;
    for (const [name, textureObject] of Object.entries(this.shader.textures)) {
      await textureObject.loadImage();
      const glTex = gl.createTexture();
      if (!glTex) {
        throw new Error("failed to allocate texture");
      }
      const tex = textureObject.texture;
      gl.bindTexture(gl.TEXTURE_2D, glTex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, textureObject.width, textureObject.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, tex);
      const uvOverflow = textureObject.config.uvClamp ? gl.CLAMP_TO_EDGE : gl.REPEAT;
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, uvOverflow);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, uvOverflow);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      this.buffers.textures[name] = glTex;
    }
  }
  bindTextures() {
    const { gl } = this.app;
    const intStart = this.app.gl.TEXTURE0;
    const textures = Object.entries(this.buffers.textures);
    const destructors = [];
    textures.forEach(([key, tex], index) => {
      const uniform = this.shader.mappings.uniforms[key];
      if (!uniform) {
        return;
      }
      gl.activeTexture(intStart + index);
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.uniform1i(uniform, index);
      destructors.push(() => {
        gl.activeTexture(intStart + index);
        gl.bindTexture(gl.TEXTURE_2D, null);
      });
    });
    return destructors;
  }
  bindAttrib(buffer, attribute, elements, glType, normalized = false) {
    const gl = this.app.gl;
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    const attributePosition = Number.isSafeInteger(attribute) ? attribute : this.shader.attrib(attribute);
    if (attributePosition !== -1) {
      gl.vertexAttribPointer(attributePosition, elements, glType, normalized, 0, 0);
      gl.enableVertexAttribArray(attributePosition);
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
  }
  initializeShader(time, transform2) {
    const view = exports_mat4.invert(exports_mat4.create(), this.camera.toMat4());
    const gl = this.app.gl;
    const { uniforms } = this.shader.mappings;
    this.shader.use();
    gl.uniform1f(uniforms.time, time);
    gl.uniform4fv(uniforms.light0Color, [1, 1, 1, 1]);
    gl.uniformMatrix4fv(uniforms.view, false, view);
    gl.uniformMatrix4fv(uniforms.projection, false, this.projectionMatrix);
    gl.uniform3fv(uniforms.light0, this.light.position);
    gl.uniformMatrix4fv(uniforms.objectToWorld, false, transform2.toMat4());
    gl.uniformMatrix4fv(uniforms.objectToWorldInv, false, exports_mat4.invert(exports_mat4.create(), transform2.toMat4()));
    this.shader.onPrerender(this.app, time);
  }
  async onStart(_, app) {
    app.loading("baking vectors");
    app.telemetry?.addRenderers(1);
    app.telemetry?.addTriangles(this.mesh.config.faces.length);
    app.telemetry?.addVertexes(this.mesh.config.vertexCount);
    exports_mat4.perspective(this.projectionMatrix, this.app.config.fov || 45, this.app.aspect, this.app.config.zNear || 0.1, this.app.config.zFar || 100);
    this.shader.compile();
    this.shader.link();
    this.initializeBuffers();
    this.shader.link();
    await this.initializeTextures();
  }
  onRenderableUpdate(time, transform2) {
    const gl = this.app.gl;
    gl.bindVertexArray(this.buffers.vao || null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.buffers.faces || null);
    gl.bindBuffer(gl.ARRAY_BUFFER, this.buffers.position || null);
    this.initializeShader(time, transform2);
    const textureDestructors = this.bindTextures();
    gl.drawElements(this.config.drawMode ?? gl.TRIANGLES, this.mesh.config.faces.length, this.faceDataType, 0);
    const err = gl.getError();
    if (err !== 0) {
      console.log({ err });
      throw new Error(`(MeshRenderer<Mesh#${this.mesh.name}>) webgl failure: ${err}`);
    }
    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    textureDestructors.forEach((i) => i());
  }
}

// src/renderer/shader.ts
class Shader {
  config;
  static VERTEX = 35633;
  static FRAGMENT = 35632;
  constructor(config) {
    this.config = config;
  }
  vertexCode = "";
  fragmentCode = "";
  _app;
  program = null;
  mappings = {};
  textures = {};
  materialValues = {};
  prerenderHooks = [];
  get gl() {
    const gl = this._app?.gl;
    if (!gl) {
      throw new Error("GL context not defined at shader compile time.");
    }
    return gl;
  }
  app(app) {
    this._app = app;
    this.program = app.gl.createProgram();
    return this;
  }
  vertex(code) {
    this.vertexCode = code;
    return this;
  }
  fragment(code) {
    this.fragmentCode = code;
    return this;
  }
  prerenderHook(fn) {
    this.prerenderHooks.push(fn);
    return this;
  }
  attrib(name) {
    return this.gl.getAttribLocation(this.program, name);
  }
  uniform(name) {
    return this.gl.getUniformLocation(this.program, name);
  }
  generateMappings(config) {
    return {
      attributes: {
        normal: this.attrib(config.attributes.normal),
        uv0: this.attrib(config.attributes.uv0),
        vertex: this.attrib(config.attributes.vertex),
        vertexColor: this.attrib(config.attributes.vertexColor)
      },
      uniforms: {
        albedo: this.uniform(config.uniforms.albedo),
        light0: this.uniform(config.uniforms.light0),
        light0Color: this.uniform(config.uniforms.light0Color),
        objectToWorld: this.uniform(config.uniforms.objectToWorld),
        objectToWorldInv: this.uniform(config.uniforms.objectToWorldInv),
        projection: this.uniform(config.uniforms.projection),
        texture0: this.uniform(config.uniforms.texture0),
        texture1: this.uniform(config.uniforms.texture1),
        texture2: this.uniform(config.uniforms.texture2),
        time: this.uniform(config.uniforms.time),
        view: this.uniform(config.uniforms.view)
      }
    };
  }
  attach(which, source) {
    const gl = this.gl;
    const shader = gl.createShader(which);
    if (!shader) {
      throw new Error(`failed to init ${humanShaderType(which)} shader`);
    }
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    gl.attachShader(this.program, shader);
  }
  addTexture(slot, texture) {
    this.textures[slot] = texture;
    return this;
  }
  compile() {
    const gl = this.gl;
    this.attach(gl.FRAGMENT_SHADER, this.fragmentCode);
    this.attach(gl.VERTEX_SHADER, this.vertexCode);
  }
  link() {
    this.gl.linkProgram(this.program);
    if (!this.gl.getProgramParameter(this.program, this.gl.LINK_STATUS)) {
      throw new Error("Unable to initialize the shader program: " + this.gl.getProgramInfoLog(this.program));
    }
    this.mappings = this.generateMappings(this.config);
  }
  bindAttrib(attribLocation, name) {
    this.gl.bindAttribLocation(this.program, attribLocation, name);
  }
  use() {
    this._app?.gl.useProgram(this.program);
  }
  onPrerender(app, time) {
    for (const fn of this.prerenderHooks) {
      fn(app, this, time);
    }
  }
}
var humanShaderType = (which) => {
  switch (which) {
    case Shader.FRAGMENT:
      return "fragment";
    case Shader.VERTEX:
      return "vertex";
    default:
      return "some unknown type of";
  }
};

// src/common-shaders/basic.frag
var basic_default = `#version 300 es
precision highp float;

// uniform mat4 u_view;
// uniform mat4 u_projection;
// uniform mat4 u_object_to_world;
// uniform mat4 u_object_to_world_inv;
// uniform vec3 u_light_0;
// uniform vec4 u_light_0_color;
// uniform float u_time;
// uniform vec4 u_albedo;

uniform sampler2D u_texture_0;
uniform sampler2D u_texture_1;

in vec2 uv0;
in vec3 normal;
in vec3 light_pos; 

out vec4 fragColor;

void main() {
  vec4 normalTex = texture(u_texture_1, uv0);
  vec3 normal = normalize(normal * normalTex.xyz);

  float light = dot(normal,  light_pos);

  fragColor = vec4(1.0);
  fragColor.rgb = texture(u_texture_0, uv0).rgb;
  fragColor.rgb *= max(light, 0.1);
  fragColor.a = 1.0;
}
`;

// src/common-shaders/basic.vert
var basic_default2 = `#version 300 es
uniform mat4 u_view;
uniform mat4 u_projection;
uniform mat4 u_object_to_world;
uniform mat4 u_object_to_world_inv;
uniform vec3 u_light_0;
// uniform vec4 u_light_0_color;
// uniform float u_time;
// uniform vec4 u_albedo;

in vec4 a_vertex;
in vec2 a_uv0;
in vec3 a_normal;
in vec4 a_vertex_color;

out vec2 uv0;
out vec3 normal;
out vec4 vertex_color;
out vec3 light_pos;

// injection point 1

void main() {
  mat4 worldInv = inverse(u_view);
  mat4 MVW = u_projection * u_view * u_object_to_world;
  gl_Position = MVW * a_vertex;

  uv0 = a_uv0;
  normal = normalize(mat3(worldInv) * a_normal);
  vertex_color = a_vertex_color;
  light_pos = normalize(mat3(u_object_to_world_inv) * u_light_0);

  // injection point 2
}`;

// src/common-shaders/basic.ts
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
var basic3 = (app) => new Shader(basicShaderConfig).vertex(basic_default2).fragment(basic_default).app(app);

// src/common-shaders/vertex-colors.frag
var vertex_colors_default = `#version 300 es
precision highp float;

in vec4 vertex_color;

out vec4 fragColor;


void main() {
  fragColor = vertex_color;
}
`;

// src/renderer/mesh.ts
class Mesh {
  config;
  constructor(config) {
    this.config = config;
  }
  get name() {
    return this.config.name;
  }
}

// src/meshes/gizmo.ts
var gizmo_default = new Mesh({
  colors: new Uint8Array([0, 254, 0, 255, 0, 254, 0, 255, 0, 254, 0, 255, 0, 254, 0, 255, 0, 254, 0, 255, 0, 254, 0, 255, 0, 254, 0, 255, 0, 254, 0, 255, 0, 254, 0, 255, 0, 254, 0, 255, 0, 254, 0, 255, 0, 254, 0, 255, 0, 254, 0, 255, 0, 254, 0, 255, 254, 0, 0, 255, 254, 0, 0, 255, 254, 0, 0, 255, 254, 0, 0, 255, 254, 0, 0, 255, 254, 0, 0, 255, 254, 0, 0, 255, 254, 0, 0, 255, 254, 0, 0, 255, 254, 0, 0, 255, 254, 0, 0, 255, 254, 0, 0, 255, 254, 0, 0, 255, 254, 0, 0, 255, 0, 0, 254, 255, 0, 0, 254, 255, 0, 0, 254, 255, 0, 0, 254, 255, 0, 0, 254, 255, 0, 0, 254, 255, 0, 0, 254, 255, 0, 0, 254, 255, 0, 0, 254, 255, 0, 0, 254, 255, 0, 0, 254, 255, 0, 0, 254, 255, 0, 0, 254, 255, 0, 0, 254, 255]),
  faces: new Uint8Array([0, 1, 2, 3, 4, 1, 5, 6, 4, 7, 8, 6, 4, 9, 10, 11, 7, 5, 0, 3, 1, 3, 5, 4, 5, 7, 6, 7, 12, 8, 4, 6, 9, 11, 13, 7, 14, 15, 16, 17, 18, 15, 19, 20, 18, 21, 22, 20, 18, 23, 24, 25, 21, 19, 14, 17, 15, 17, 19, 18, 19, 21, 20, 21, 26, 22, 18, 20, 23, 25, 27, 21, 28, 29, 30, 31, 32, 29, 33, 34, 32, 35, 36, 34, 32, 37, 38, 39, 35, 33, 28, 31, 29, 31, 33, 32, 33, 35, 34, 35, 40, 36, 32, 34, 37, 39, 41, 35]),
  name: "src/meshes/gizmo.ply",
  normals: new Float32Array([-0.057735033, 0.5773503, -0.5773503, 0.057735033, -0.5773503, -0.5773503, -0.057735033, -0.5773503, -0.5773503, 0.057735033, 0.5773503, -0.5773503, 0.057735033, -0.5773503, 0.5773503, 0.057735033, 0.5773503, 0.5773503, -0.057735033, -0.5773503, 0.5773503, -0.057735033, 0.5773503, 0.5773503, -0.057735033, -0.5773503, -0.5773503, -0.057735033, -0.5773503, -0.5773503, 0.057735033, -0.5773503, -0.5773503, 0.057735033, 0.5773503, -0.5773503, -0.057735033, 0.5773503, -0.5773503, -0.057735033, 0.5773503, -0.5773503, -0.5773503, 0.5773503, -0.057735033, 0.5773503, -0.5773503, -0.057735033, -0.5773503, -0.5773503, -0.057735033, 0.5773503, 0.5773503, -0.057735033, 0.5773503, -0.5773503, 0.057735033, 0.5773503, 0.5773503, 0.057735033, -0.5773503, -0.5773503, 0.057735033, -0.5773503, 0.5773503, 0.057735033, -0.5773503, -0.5773503, -0.057735033, -0.5773503, -0.5773503, -0.057735033, 0.5773503, -0.5773503, -0.057735033, 0.5773503, 0.5773503, -0.057735033, -0.5773503, 0.5773503, -0.057735033, -0.5773503, 0.5773503, -0.057735033, -0.5773503, 0.057735033, -0.5773503, 0.5773503, -0.057735033, -0.5773503, -0.5773503, -0.057735033, -0.5773503, 0.5773503, 0.057735033, -0.5773503, 0.5773503, -0.057735033, 0.5773503, 0.5773503, 0.057735033, 0.5773503, -0.5773503, -0.057735033, 0.5773503, -0.5773503, 0.057735033, 0.5773503, -0.5773503, -0.057735033, -0.5773503, -0.5773503, -0.057735033, -0.5773503, 0.5773503, -0.057735033, -0.5773503, 0.5773503, 0.057735033, -0.5773503, -0.5773503, 0.057735033, -0.5773503, -0.5773503, 0.057735033, -0.5773503]),
  positions: new Float32Array([0, 0.05, -0.05, 1, -0.05, -0.05, 0, -0.05, -0.05, 1, 0.05, -0.05, 1, -0.05, 0.05, 1, 0.05, 0.05, 0, -0.05, 0.05, 0, 0.05, 0.05, 0, -0.05, -0.05, 0, -0.05, -0.05, 1, -0.05, -0.05, 1, 0.05, -0.05, 0, 0.05, -0.05, 0, 0.05, -0.05, -0.05, 0.05, 0, 0.05, -0.05, 0, -0.05, -0.05, 0, 0.05, 0.05, 0, 0.05, -0.05, 1, 0.05, 0.05, 1, -0.05, -0.05, 1, -0.05, 0.05, 1, -0.05, -0.05, 0, -0.05, -0.05, 0, 0.05, -0.05, 0, 0.05, 0.05, 0, -0.05, 0.05, 0, -0.05, 0.05, 0, -0.05, 1, -0.05, 0.05, 0, -0.05, -0.05, 0, -0.05, 0.05, 1, -0.05, 0.05, 0, 0.05, 0.05, 1, 0.05, -0.05, 0, 0.05, -0.05, 1, 0.05, -0.05, 0, -0.05, -0.05, 0, -0.05, 0.05, 0, -0.05, 0.05, 1, -0.05, -0.05, 1, -0.05, -0.05, 1, -0.05]),
  uvs: new Float32Array([0.625, 0, 0.375, 0.25, 0.375, 0, 0.625, 0.25, 0.375, 0.5, 0.625, 0.5, 0.375, 0.75, 0.625, 0.75, 0.375, 1, 0.125, 0.75, 0.125, 0.5, 0.875, 0.5, 0.625, 1, 0.875, 0.75, 0.625, 0, 0.375, 0.25, 0.375, 0, 0.625, 0.25, 0.375, 0.5, 0.625, 0.5, 0.375, 0.75, 0.625, 0.75, 0.375, 1, 0.125, 0.75, 0.125, 0.5, 0.875, 0.5, 0.625, 1, 0.875, 0.75, 0.625, 0, 0.375, 0.25, 0.375, 0, 0.625, 0.25, 0.375, 0.5, 0.625, 0.5, 0.375, 0.75, 0.625, 0.75, 0.375, 1, 0.125, 0.75, 0.125, 0.5, 0.875, 0.5, 0.625, 1, 0.875, 0.75]),
  vertexCount: 42
});

// src/renderer/gizmo.ts
var gizmoShader = (app) => new Shader(basicShaderConfig).vertex(basic_default2).fragment(vertex_colors_default).app(app);
var createGizmo = (app, camera, transform3) => {
  const localTransform = new Transform(transform3?.position, transform3?.rotation);
  const mr = new MeshRenderer(app, gizmo_default, gizmoShader(app), camera).configure({});
  new Renderable(app, localTransform, mr);
};

// src/renderer/renderable.ts
class Renderable extends Behavior {
  app;
  transform3;
  renderer;
  constructor(app, transform3, renderer, enableGizmo = false) {
    super(app);
    this.app = app;
    this.transform = transform3;
    this.renderer = renderer;
    if (enableGizmo)
      createGizmo(app, renderer.camera, transform3);
  }
  onDraw(time) {
    this.renderer.onRenderableUpdate(time, this.transform);
  }
}

// src/renderer/editor.ts
class Editor extends Behavior {
  constructor() {
    super(...arguments);
  }
  panes = [];
  addTransform(name, onChange) {
    this.panes.push({ name, type: "transform", onChange });
  }
}

// src/renderer/telemetry.ts
class Telemetry extends Behavior {
  app;
  el;
  frameTimes = [];
  maxFrameTimes = 100;
  lastFrameTime = 0;
  activeTriangles = 0;
  activeVertexes = 0;
  activeRenderers = 0;
  activeTextures = 0;
  constructor(app, selector = "#telemetry") {
    super(app);
    this.app = app;
    this.el = document.querySelector(selector);
    if (this.el && location.search.includes("telemetry")) {
      this.el.style.display = "block";
    }
  }
  insertTime(time) {
    this.frameTimes.push(time);
    if (this.frameTimes.length > this.maxFrameTimes) {
      this.frameTimes.shift();
    }
  }
  async onStart() {
    this.lastFrameTime = 0;
    this.frameTimes = [];
    setTimeout(() => this.setText(), 0);
    setInterval(() => {
      this.setText();
    }, 1001);
  }
  setText() {
    const averageFrameTime = this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;
    const framesPerSecond = 1000 / averageFrameTime;
    this.el.innerHTML = `${framesPerSecond.toFixed(1)} FPS (${averageFrameTime.toFixed(3)} ms)<br />update :: b: ${this.app.registry.onBeforeUpdate.length} | u: ${this.app.registry.onUpdate.length} | a: ${this.app.registry.onAfterUpdate.length} | d: ${this.app.registry.onDraw.length}<br />render :: mr: ${this.activeRenderers} | v: ${this.activeVertexes} | t: ${this.activeTriangles}<br />others :: tex: ${this.activeTextures}`;
  }
  onAfterUpdate(time) {
    const frameTime = time - this.lastFrameTime;
    this.insertTime(frameTime);
    this.lastFrameTime = time;
  }
  addTriangles(n) {
    this.activeTriangles += n;
  }
  addVertexes(n) {
    this.activeVertexes += n;
  }
  addRenderers(n) {
    this.activeRenderers += n;
  }
  addTextures(n) {
    this.activeTextures += n;
  }
}

// src/renderer/webgl.ts
class WebGLApp {
  config;
  canvas;
  telemetry;
  gl;
  editor;
  loadingMessages = new Set(["[noeidelon] [stage 2]"]);
  registry = {
    onBeforeUpdate: [],
    onAfterUpdate: [],
    onUpdate: [],
    onStart: [],
    onDraw: []
  };
  constructor(config = {}) {
    this.config = config;
    try {
      this.canvas = document.querySelector("canvas");
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      const context = this.canvas.getContext("webgl2");
      if (!context) {
        throw new Error("Canvas was unable to get a webgl2 context");
      }
      const gl = this.gl = context;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      this.gl.getExtension("EXT_texture_filter_anisotropic");
      if (location.search.includes("telemetry") || config.telemetry) {
        this.telemetry = new Telemetry(this);
      }
      if (location.search.includes("editor") || config.editor) {
        this.editor = new Editor(this);
      }
    } catch (e) {
      const main = document.querySelector("main");
      if (main) {
        main.innerHTML = `<div><i>your browser didn't let me set up webgl.</i></div>`;
      }
      throw new Error(`Unable to initialize WebGL. Your browser or machine may not support it.\n  -> ${e}`);
    }
  }
  get aspect() {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }
  clear() {
    const gl = this.gl;
    gl.clearColor(0, 0, 0, 1);
    gl.clearDepth(1);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  }
  loading(message) {
    this.loadingMessages.add(message.toLowerCase());
    document.querySelector("#loading-text").innerHTML = [
      ...this.loadingMessages
    ].join("<br />");
  }
  ready() {
    document.querySelector("#loading")?.classList.remove("loading-active");
  }
  onBeforeUpdate(handle) {
    this.registry.onBeforeUpdate.push(handle);
  }
  onAfterUpdate(handle) {
    this.registry.onAfterUpdate.push(handle);
  }
  onUpdate(handle) {
    this.registry.onUpdate.push(handle);
  }
  onStart(handle) {
    this.registry.onStart.push(handle);
  }
  onDraw(handle) {
    this.registry.onDraw.push(handle);
  }
  doUpdate(time) {
    this.registry.onBeforeUpdate.forEach((handle) => handle(time, this));
    this.registry.onUpdate.forEach((handle) => handle(time, this));
    this.registry.onAfterUpdate.forEach((handle) => handle(time, this));
    this.registry.onDraw.forEach((handle) => handle(time, this));
  }
  async doStart(time = 0) {
    this.loading("setting launch parameters");
    this.clear();
    try {
      for (const fn of this.registry.onStart) {
        await fn(time, this);
      }
    } catch (e) {
      this.loading(`[panic] <span style="color: red">failed to start noeidelon</span>`);
      if (this.telemetry) {
        this.loading(`<span style="color: purple">${e}</span>`);
      }
      return;
    }
    this.ready();
  }
  async oneShot(time = 0) {
    await this.doStart(time);
    this.doUpdate(time);
  }
  async start() {
    await this.doStart();
    const run = (time) => {
      this.doUpdate(time);
      requestAnimationFrame(run);
    };
    requestAnimationFrame(run);
  }
}

export { Mesh, exports_quat, Transform, etoq, v3, MeshRenderer, Shader, basic_default, basic_default2 as basic_default1, basic3 as basic, Renderable, WebGLApp };
