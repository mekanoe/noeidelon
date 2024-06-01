import{c as N} from"../chunk-d24458ad0a4be457.js";import{f as D,g as I,h as j,i as O,j as k,l as y,n as Q,o as z} from"../chunk-0ef35489d83e6289.js";var C=`#version 300 es
precision highp float;uniform float u_time;in vec2 uv0;out vec4 fragColor;vec2 squareImaginary(vec2 number,float mod){return vec2(pow(number.x*mod,2.0)-pow(number.y*mod,2.0),2.0*number.x*number.y);}float iterateMandelbrot(vec2 coord){vec2 z=vec2(0,0);float maxIterations=100.0;for(float i=0.0;i<maxIterations;i++){float factor=2.6+(1.3*sin(u_time*0.0001));z=squareImaginary(z,factor+1.0)+(coord/factor);if(length(z)>2.0)return i/float(maxIterations);}return maxIterations;}void main(){vec2 uvMirror=abs(uv0*2.0-1.0);fragColor=vec4(0.0);float mandelbrot=iterateMandelbrot((uvMirror.xy+vec2(0.14,-0.525))*0.9);fragColor.r=mandelbrot;vec2 outerNoise=(mandelbrot)*(1.0-uvMirror*0.5);fragColor.gb+=(1.0-mandelbrot)*outerNoise;fragColor.r+=pow(1.0-length(uvMirror),8.0);fragColor.a=1.0;}`;var V=`#version 300 es
precision highp float;uniform float u_time;in vec2 uv0;out vec4 fragColor;vec2 squareImaginary(vec2 number,float mod){return vec2(pow(number.x*mod,2.0)-pow(number.y*mod,2.0),2.0*number.x*number.y);}float iterateMandelbrot(vec2 coord){vec2 z=vec2(0,0);float maxIterations=69.0;for(float i=0.0;i<maxIterations;i++){float mod=u_time*0.0003;z=squareImaginary(z,1.0/mod)+coord;if(length(z)>100.0)return i/float(maxIterations);}return maxIterations;}void main(){vec2 uvMirror=abs(uv0*2.0-1.0);fragColor=vec4(0.0);float mandelbrot=iterateMandelbrot((uvMirror.yx-vec2(-1.075,1.0))*0.9);fragColor.r=mandelbrot;vec2 outerNoise=(mandelbrot)*(1.0-uvMirror*0.5);fragColor.gb+=(1.0-mandelbrot)*outerNoise;fragColor.a=1.0;}`;var R={attributes:{vertex:"a_vertex",uv0:"a_uv0",normal:"a_normal",vertexColor:"a_vertex_color"},uniforms:{view:"u_view",projection:"u_projection",objectToWorld:"u_object_to_world",objectToWorldInv:"u_object_to_world_inv",light0:"u_light_0",light0Color:"u_light_0_color",time:"u_time",albedo:"u_albedo",texture0:"u_texture_0",texture1:"u_texture_1",texture2:"u_texture_2"}},E={normal:C,alt3:V},Z=(_,x=C)=>new k(R).vertex(y).fragment(x).app(_);var J=`#version 300 es
precision highp float;uniform float u_time;in vec2 uv0;in vec3 light_pos;out vec4 fragColor;const float margin=0.5;vec3 hsv2rgb(vec3 c){vec4 K=vec4(1.0,2.0/3.0,1.0/3.0,3.0);vec3 p=abs(fract(c.xxx+K.xyz)*6.0-K.www);return c.z*mix(K.xxx,clamp(p-K.xxx,0.0,1.0),c.y);}void main(){vec2 cUV=uv0*2.0-1.0;float circleDistance=length(cUV);if(circleDistance>margin){discard;}float theta=atan(cUV.y,cUV.x);float spiral=sin(100.0*(sqrt(circleDistance*20.0)-10.0*theta-0.01*u_time*0.001));float edgeLightZone=pow(clamp(abs(dot(cUV.xyx,light_pos)),0.0,1.0)*2.0,4.0);float colorSpiral=sin(100.0*(sqrt(circleDistance*10.0)-0.001*theta-0.3*u_time*0.00005));vec3 hueRotation=hsv2rgb(vec3(colorSpiral,1.0,0.5));fragColor=vec4(hueRotation*spiral*edgeLightZone,1.0);fragColor.rgb+=min(spiral,0.0041666);}`;var $=`#version 300 es
precision highp float;uniform float u_time;in vec2 uv0;in vec3 light_pos;out vec4 fragColor;const float margin=0.5;vec3 hsv2rgb(vec3 c){vec4 K=vec4(1.0,2.0/3.0,1.0/3.0,3.0);vec3 p=abs(fract(c.xxx+K.xyz)*6.0-K.www);return c.z*mix(K.xxx,clamp(p-K.xxx,0.0,1.0),c.y);}void main(){vec2 cUV=uv0*2.0-1.0;float circleDistance=length(cUV);if(circleDistance>margin){discard;}float theta=atan(cUV.y,cUV.x);float spiral=sin(100.0*(sqrt(circleDistance*20.0)-10.0*theta-0.01*u_time*0.001));float edgeLightZone=pow(clamp(abs(dot(cUV.xyx,light_pos)),0.0,1.0)*2.0,4.0);float colorSpiral=sin(100.0*(sqrt(circleDistance*10.0)-0.001*theta-0.3*u_time*0.00005));vec3 hueRotation=hsv2rgb(vec3(colorSpiral,1.0,0.5));fragColor=vec4(colorSpiral,spiral,1.0,1.0);}`;var q=`#version 300 es
precision highp float;uniform float u_time;in vec2 uv0;in vec3 light_pos;out vec4 fragColor;const float margin=0.9;vec3 hsv2rgb(vec3 c){vec4 K=vec4(1.0,2.0/3.0,1.0/3.0,3.0);vec3 p=abs(fract(c.xxx+K.xyz)*6.0-K.www);return c.z*mix(K.xxx,clamp(p-K.xxx,0.0,1.0),c.y);}void main(){vec2 cUV=uv0*2.0-1.0;float circleDistance=length(cUV);if(circleDistance>margin){discard;}float theta=atan(cUV.y,cUV.x);float spiral=sin(100.0*(sqrt(circleDistance*13.0)-(u_time*0.0001)*theta-0.01*u_time*0.001));float colorSpiral=sin(100.0*(sqrt(circleDistance*10.0)-0.001*theta-0.3*u_time*0.00005));fragColor=vec4(0,spiral,0,1.0);}`;var v={attributes:{vertex:"a_vertex",uv0:"a_uv0",normal:"a_normal",vertexColor:"a_vertex_color"},uniforms:{view:"u_view",projection:"u_projection",objectToWorld:"u_object_to_world",objectToWorldInv:"u_object_to_world_inv",light0:"u_light_0",light0Color:"u_light_0_color",time:"u_time",albedo:"u_albedo",texture0:"u_texture_0",texture1:"u_texture_1",texture2:"u_texture_2"}},B={normal:J,debug:$,alt2:q},w=(_,x=J)=>new k(v).vertex(y).fragment(x).app(_);var i=new z({fov:45}),G=new D([0,0,2],I([0,0,0])),K=new D([1,-1,0],I([0,0,0])),b=new D(j(0),I([0,180,0]),j(1.8)),m=new D(j(0),I([0,180,180]),j(0.6));document.body.addEventListener("mousemove",(_)=>{const{clientX:x,clientY:L}=_,{clientWidth:M,clientHeight:P}=document.body,c=x/M,F=L/P,W=c*2-1,A=F*2-1;K.position[1]=W,K.position[0]=A});i.onUpdate((_,x)=>{});var U=B.normal,H=E.normal;if(location.search.includes("alt1"))U=B.debug;if(location.search.includes("alt2"))U=B.alt2;if(location.search.includes("alt3"))H=E.alt3;new Q(i,b,new O(i,N,Z(i,H),G).configure({}));new Q(i,m,new O(i,N,w(i,U),G,K).configure({}));i.start();