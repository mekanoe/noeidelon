import{a as Y} from"../chunk-32eefd9b41c928dd.js";class E{constructor(C){this.gl=C.gl,this.app=C,this.program=this.gl.createProgram()}attach(C,D){console.log("attaching shader",{type:C,source:D});const R=this.gl.createShader(C);if(this.gl.shaderSource(R,D),this.gl.compileShader(R),!this.gl.getShaderParameter(R,this.gl.COMPILE_STATUS))throw new Error("An error occurred compiling the shaders: "+this.gl.getShaderInfoLog(R));return this.gl.attachShader(this.program,R),this}link(){if(this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))throw new Error("Unable to initialize the shader program: "+this.gl.getProgramInfoLog(this.program));return console.log("shader linked"),this}location(C){if(C[0]==="a")return this.gl.getAttribLocation(this.program,C);else if(C[0]==="u")return this.gl.getUniformLocation(this.program,C)}updateTime(){const C=this.app.now(),D=Math.sin(C),R=Math.cos(C);this.gl.uniform1f(this.location("uTime"),C),this.gl.uniform1f(this.location("uSinTime"),D),this.gl.uniform1f(this.location("uCosTime"),R)}activate(C,D){this.gl.useProgram(this.program),this.gl.uniformMatrix4fv(this.location("uProjectionMatrix"),!1,C),this.gl.uniformMatrix4fv(this.location("uModelViewMatrix"),!1,D),this.updateTime()}}class I{constructor(C){this.gl=C.gl,this.app=C,this.vertexPositions=new Float32Array([]),this.positionBuffer=null,this.textureBuffer=null}initBuffer(C,D=this.gl.STATIC_DRAW){const R=this.gl.createBuffer();return this.gl.bindBuffer(this.gl.ARRAY_BUFFER,R),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(C),D),R}attachShader(C){return this.shader=C,this.vertexPosition=C.location("aVertexPosition"),this.textureCoord=C.location("aTextureCoord"),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.vertexAttribPointer(this.vertexPosition,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.vertexPosition),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.textureBuffer),this.gl.vertexAttribPointer(this.textureCoord,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.textureCoord),this}draw2D(){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.shader.activate(this.app.projectionMatrix,this.app.modelViewMatrix),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,this.vertexPositions.length/2)}draw3D(){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.shader.activate(this.app.projectionMatrix,this.app.modelViewMatrix),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,this.vertexPositions.length/3)}}class K extends I{constructor(C){super(C);this.vertexPositions=new Float32Array([-1,-1,1,-1,-1,1,1,1]),this.positionBuffer=this.initBuffer(this.vertexPositions),this.textureBuffer=this.initBuffer(new Float32Array([0,0,1,0,0,1,1,1])),this.app.onUpdate(()=>this.draw2D())}}class L{constructor(C={fov:45}){if(this._now=0,this.registry={onStart:[],onUpdate:[],onBeforeUpdate:[],onAfterUpdate:[]},this.config=C,this.canvas=document.querySelector("canvas"),this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.gl=this.canvas.getContext("webgl2"),this.gl===null)throw document.querySelector("main").innerHTML="<div><i>your browser didn't let me set up webgl</i></div>",new Error("Unable to initialize WebGL. Your browser or machine may not support it.");const D=this.gl,R=this.config.fov*Math.PI/180,G=D.canvas.clientWidth/D.canvas.clientHeight,H=0.1,J=100,P=glMatrix.mat4.create();glMatrix.mat4.perspective(P,R,G,H,J);const q=glMatrix.mat4.create();glMatrix.mat4.translate(q,q,[-0,0,-6]),this.projectionMatrix=P,this.modelViewMatrix=q,this.clear(),this.onBeforeUpdate(()=>this.clear()),this.telemetry=new Y(this)}clear(){const C=this.gl;C.clearColor(0,0,0,1),C.clearDepth(1),C.enable(C.DEPTH_TEST),C.depthFunc(C.LEQUAL),C.clear(C.COLOR_BUFFER_BIT|C.DEPTH_BUFFER_BIT)}onStart(C){this.registry.onStart.push(C)}onUpdate(C){this.registry.onUpdate.push(C)}onBeforeUpdate(C){this.registry.onBeforeUpdate.push(C)}onAfterUpdate(C){this.registry.onAfterUpdate.push(C)}start(){this.registry.onStart.forEach((C)=>C(this))}update(){this.registry.onBeforeUpdate.forEach((C)=>C(this)),this.registry.onUpdate.forEach((C)=>C(this)),this.registry.onAfterUpdate.forEach((C)=>C(this))}oneShot(){requestAnimationFrame((C)=>{this._now=C,this.start(),this.update()})}loop(){const C=(D)=>{this._now=D,this.update(),requestAnimationFrame(C)};requestAnimationFrame(C)}now(){return this._now}}var k=`precision highp float;

uniform float uTime;
uniform float uSinTime;
uniform float uCosTime;

varying highp vec2 vTextureCoord;

vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main() {
  float zComponent = uSinTime * 0.001 * 0.5 + 0.5;
  vec3 hsv = rgb2hsv(vec3(vTextureCoord, zComponent));
  hsv.x += uTime * 0.0001;
  hsv.y = 1.0;
  hsv.z = 1.0;
  vec3 rgb = hsv2rgb(hsv);

  gl_FragColor = vec4(rgb, 1.0);
  gl_FragColor = clamp(gl_FragColor, 0.0, 1.0);
}`;var A=`attribute vec4 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

varying highp vec2 vTextureCoord;

void main() {
  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
  vTextureCoord = aTextureCoord;
}`;var _=new L({fov:20}),B=_.gl,U=new E(_).attach(B.VERTEX_SHADER,A).attach(B.FRAGMENT_SHADER,k).link(),W=new K(_);W.attachShader(U);_.loop();
