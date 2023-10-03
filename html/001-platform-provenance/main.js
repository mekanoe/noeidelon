class Y{constructor(C){this.gl=C.gl,this.app=C,this.program=this.gl.createProgram()}attach(C,R){console.log("attaching shader",{type:C,source:R});const q=this.gl.createShader(C);if(this.gl.shaderSource(q,R),this.gl.compileShader(q),!this.gl.getShaderParameter(q,this.gl.COMPILE_STATUS))throw new Error("An error occurred compiling the shaders: "+this.gl.getShaderInfoLog(q));return this.gl.attachShader(this.program,q),this}link(){if(this.gl.linkProgram(this.program),!this.gl.getProgramParameter(this.program,this.gl.LINK_STATUS))throw new Error("Unable to initialize the shader program: "+this.gl.getProgramInfoLog(this.program));return console.log("shader linked"),this}location(C){if(C[0]==="a")return this.gl.getAttribLocation(this.program,C);else if(C[0]==="u")return this.gl.getUniformLocation(this.program,C)}updateTime(){const C=this.app.now(),R=Math.sin(C),q=Math.cos(C);this.gl.uniform1f(this.location("uTime"),C),this.gl.uniform1f(this.location("uSinTime"),R),this.gl.uniform1f(this.location("uCosTime"),q)}activate(C,R){this.gl.useProgram(this.program),this.gl.uniformMatrix4fv(this.location("uProjectionMatrix"),!1,C),this.gl.uniformMatrix4fv(this.location("uModelViewMatrix"),!1,R),this.updateTime()}}class _{constructor(C){this.gl=C.gl,this.app=C,this.vertexPositions=new Float32Array([]),this.positionBuffer=null,this.textureBuffer=null}initBuffer(C,R=this.gl.STATIC_DRAW){const q=this.gl.createBuffer();return this.gl.bindBuffer(this.gl.ARRAY_BUFFER,q),this.gl.bufferData(this.gl.ARRAY_BUFFER,new Float32Array(C),R),q}attachShader(C){return this.shader=C,this.vertexPosition=C.location("aVertexPosition"),this.textureCoord=C.location("aTextureCoord"),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.gl.vertexAttribPointer(this.vertexPosition,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.vertexPosition),this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.textureBuffer),this.gl.vertexAttribPointer(this.textureCoord,2,this.gl.FLOAT,!1,0,0),this.gl.enableVertexAttribArray(this.textureCoord),this}draw2D(){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.shader.activate(this.app.projectionMatrix,this.app.modelViewMatrix),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,this.vertexPositions.length/2)}draw3D(){this.gl.bindBuffer(this.gl.ARRAY_BUFFER,this.positionBuffer),this.shader.activate(this.app.projectionMatrix,this.app.modelViewMatrix),this.gl.drawArrays(this.gl.TRIANGLE_STRIP,0,this.vertexPositions.length/3)}}class k extends _{constructor(C){super(C);this.vertexPositions=new Float32Array([-1,-1,1,-1,-1,1,1,1]),this.positionBuffer=this.initBuffer(this.vertexPositions),this.textureBuffer=this.initBuffer(new Float32Array([0,0,1,0,0,1,1,1])),this.app.onUpdate(()=>this.draw2D())}}class B{constructor(C,R="#telemetry"){if(this.app=C,this.el=document.querySelector(R),this.el&&location.search.includes("telemetry"))this.el.style.display="block",this.app.onAfterUpdate(()=>this.onAfterUpdate());this.frameTimes=[],this.maxFrameTimes=100,this.lastFrameTime=0}insertTime(C){if(this.frameTimes.push(C),this.frameTimes.length>this.maxFrameTimes)this.frameTimes.shift()}onAfterUpdate(){const C=this.app.now()-this.lastFrameTime;this.insertTime(C);const R=this.frameTimes.reduce((I,K)=>I+K,0)/this.frameTimes.length,q=1000/R;this.el.innerHTML=`
      ${q.toFixed(1)} FPS (${R.toFixed(3)} ms)<br />
      bU: ${this.app.registry.onBeforeUpdate.length} | U: ${this.app.registry.onUpdate.length} | aU: ${this.app.registry.onAfterUpdate.length}
    `,this.lastFrameTime=this.app.now()}}class E{constructor(C={fov:45}){if(this._now=0,this.registry={onStart:[],onUpdate:[],onBeforeUpdate:[],onAfterUpdate:[]},this.config=C,this.canvas=document.querySelector("canvas"),this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.gl=this.canvas.getContext("webgl2"),this.gl===null)throw document.querySelector("main").innerHTML="<div><i>your browser didn't let me set up webgl</i></div>",new Error("Unable to initialize WebGL. Your browser or machine may not support it.");const R=this.gl,q=this.config.fov*Math.PI/180,I=R.canvas.clientWidth/R.canvas.clientHeight,K=0.1,P=100,G=glMatrix.mat4.create();glMatrix.mat4.perspective(G,q,I,K,P);const U=glMatrix.mat4.create();glMatrix.mat4.translate(U,U,[-0,0,-6]),this.projectionMatrix=G,this.modelViewMatrix=U,this.clear(),this.onBeforeUpdate(()=>this.clear()),this.telemetry=new B(this)}clear(){const C=this.gl;C.clearColor(0,0,0,1),C.clearDepth(1),C.enable(C.DEPTH_TEST),C.depthFunc(C.LEQUAL),C.clear(C.COLOR_BUFFER_BIT|C.DEPTH_BUFFER_BIT)}onStart(C){this.registry.onStart.push(C)}onUpdate(C){this.registry.onUpdate.push(C)}onBeforeUpdate(C){this.registry.onBeforeUpdate.push(C)}onAfterUpdate(C){this.registry.onAfterUpdate.push(C)}start(){this.registry.onStart.forEach((C)=>C(this))}update(){this.registry.onBeforeUpdate.forEach((C)=>C(this)),this.registry.onUpdate.forEach((C)=>C(this)),this.registry.onAfterUpdate.forEach((C)=>C(this))}oneShot(){requestAnimationFrame((C)=>{this._now=C,this.start(),this.update()})}loop(){const C=(R)=>{this._now=R,this.update(),requestAnimationFrame(C)};requestAnimationFrame(C)}now(){return this._now}}var H=`precision highp float;

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
}`;var J=`attribute vec4 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat4 uModelViewMatrix;
uniform mat4 uProjectionMatrix;

varying highp vec2 vTextureCoord;

void main() {
  gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
  vTextureCoord = aTextureCoord;
}`;var D=new E({fov:20}),L=D.gl,X=new Y(D).attach(L.VERTEX_SHADER,J).attach(L.FRAGMENT_SHADER,H).link(),Z=new k(D);Z.attachShader(X);D.loop();
