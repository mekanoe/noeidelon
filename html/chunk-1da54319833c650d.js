var v0=Object.defineProperty;var z=(M,C)=>{for(var h in C)v0(M,h,{get:C[h],enumerable:!0,configurable:!0,set:(V)=>C[h]=()=>V})};var _0={};z(_0,{str:()=>{{return qM}},squaredLength:()=>{{return T0}},sqrLen:()=>{{return zM}},sqlerp:()=>{{return eM}},slerp:()=>{{return c}},setAxisAngle:()=>{{return A0}},setAxes:()=>{{return mM}},set:()=>{{return wM}},scale:()=>{{return F0}},rotationTo:()=>{{return xM}},rotateZ:()=>{{return TM}},rotateY:()=>{{return kM}},rotateX:()=>{{return RM}},random:()=>{{return jM}},pow:()=>{{return SM}},normalize:()=>{{return m}},multiply:()=>{{return H0}},mul:()=>{{return lM}},ln:()=>{{return U0}},lerp:()=>{{return rM}},length:()=>{{return k0}},len:()=>{{return cM}},invert:()=>{{return gM}},identity:()=>{{return UM}},getAxisAngle:()=>{{return DM}},getAngle:()=>{{return FM}},fromValues:()=>{{return fM}},fromMat3:()=>{{return D0}},fromEuler:()=>{{return nM}},exp:()=>{{return J0}},exactEquals:()=>{{return sM}},equals:()=>{{return yM}},dot:()=>{{return R0}},create:()=>{{return e}},copy:()=>{{return vM}},conjugate:()=>{{return pM}},clone:()=>{{return iM}},calculateW:()=>{{return _M}},add:()=>{{return dM}}});var U=0.000001,R=typeof Float32Array!=="undefined"?Float32Array:Array,q=Math.random,rC=Math.PI/180;if(!Math.hypot)Math.hypot=function(){var M=0,C=arguments.length;while(C--)M+=arguments[C]*arguments[C];return Math.sqrt(M)};function t(){var M=new R(9);if(R!=Float32Array)M[1]=0,M[2]=0,M[3]=0,M[5]=0,M[6]=0,M[7]=0;return M[0]=1,M[4]=1,M[8]=1,M}var x={};z(x,{zero:()=>{{return YM}},transformQuat:()=>{{return QM}},transformMat4:()=>{{return hM}},transformMat3:()=>{{return VM}},subtract:()=>{{return M0}},sub:()=>{{return PM}},str:()=>{{return ZM}},squaredLength:()=>{{return I0}},squaredDistance:()=>{{return Q0}},sqrLen:()=>{{return LM}},sqrDist:()=>{{return EM}},set:()=>{{return r0}},scaleAndAdd:()=>{{return b0}},scale:()=>{{return m0}},round:()=>{{return e0}},rotateZ:()=>{{return BM}},rotateY:()=>{{return NM}},rotateX:()=>{{return IM}},random:()=>{{return CM}},normalize:()=>{{return s}},negate:()=>{{return u0}},multiply:()=>{{return C0}},mul:()=>{{return WM}},min:()=>{{return y0}},max:()=>{{return x0}},lerp:()=>{{return t0}},length:()=>{{return a}},len:()=>{{return y}},inverse:()=>{{return o0}},hermite:()=>{{return a0}},fromValues:()=>{{return l}},forEach:()=>{{return AM}},floor:()=>{{return s0}},exactEquals:()=>{{return KM}},equals:()=>{{return OM}},dot:()=>{{return r}},divide:()=>{{return h0}},div:()=>{{return $M}},distance:()=>{{return V0}},dist:()=>{{return GM}},cross:()=>{{return w}},create:()=>{{return d}},copy:()=>{{return l0}},clone:()=>{{return d0}},ceil:()=>{{return z0}},bezier:()=>{{return MM}},angle:()=>{{return XM}},add:()=>{{return c0}}});function d(){var M=new R(3);if(R!=Float32Array)M[0]=0,M[1]=0,M[2]=0;return M}function d0(M){var C=new R(3);return C[0]=M[0],C[1]=M[1],C[2]=M[2],C}function a(M){var C=M[0],h=M[1],V=M[2];return Math.hypot(C,h,V)}function l(M,C,h){var V=new R(3);return V[0]=M,V[1]=C,V[2]=h,V}function l0(M,C){return M[0]=C[0],M[1]=C[1],M[2]=C[2],M}function r0(M,C,h,V){return M[0]=C,M[1]=h,M[2]=V,M}function c0(M,C,h){return M[0]=C[0]+h[0],M[1]=C[1]+h[1],M[2]=C[2]+h[2],M}function M0(M,C,h){return M[0]=C[0]-h[0],M[1]=C[1]-h[1],M[2]=C[2]-h[2],M}function C0(M,C,h){return M[0]=C[0]*h[0],M[1]=C[1]*h[1],M[2]=C[2]*h[2],M}function h0(M,C,h){return M[0]=C[0]/h[0],M[1]=C[1]/h[1],M[2]=C[2]/h[2],M}function z0(M,C){return M[0]=Math.ceil(C[0]),M[1]=Math.ceil(C[1]),M[2]=Math.ceil(C[2]),M}function s0(M,C){return M[0]=Math.floor(C[0]),M[1]=Math.floor(C[1]),M[2]=Math.floor(C[2]),M}function y0(M,C,h){return M[0]=Math.min(C[0],h[0]),M[1]=Math.min(C[1],h[1]),M[2]=Math.min(C[2],h[2]),M}function x0(M,C,h){return M[0]=Math.max(C[0],h[0]),M[1]=Math.max(C[1],h[1]),M[2]=Math.max(C[2],h[2]),M}function e0(M,C){return M[0]=Math.round(C[0]),M[1]=Math.round(C[1]),M[2]=Math.round(C[2]),M}function m0(M,C,h){return M[0]=C[0]*h,M[1]=C[1]*h,M[2]=C[2]*h,M}function b0(M,C,h,V){return M[0]=C[0]+h[0]*V,M[1]=C[1]+h[1]*V,M[2]=C[2]+h[2]*V,M}function V0(M,C){var h=C[0]-M[0],V=C[1]-M[1],Q=C[2]-M[2];return Math.hypot(h,V,Q)}function Q0(M,C){var h=C[0]-M[0],V=C[1]-M[1],Q=C[2]-M[2];return h*h+V*V+Q*Q}function I0(M){var C=M[0],h=M[1],V=M[2];return C*C+h*h+V*V}function u0(M,C){return M[0]=-C[0],M[1]=-C[1],M[2]=-C[2],M}function o0(M,C){return M[0]=1/C[0],M[1]=1/C[1],M[2]=1/C[2],M}function s(M,C){var h=C[0],V=C[1],Q=C[2],I=h*h+V*V+Q*Q;if(I>0)I=1/Math.sqrt(I);return M[0]=C[0]*I,M[1]=C[1]*I,M[2]=C[2]*I,M}function r(M,C){return M[0]*C[0]+M[1]*C[1]+M[2]*C[2]}function w(M,C,h){var V=C[0],Q=C[1],I=C[2],N=h[0],B=h[1],X=h[2];return M[0]=Q*X-I*B,M[1]=I*N-V*X,M[2]=V*B-Q*N,M}function t0(M,C,h,V){var Q=C[0],I=C[1],N=C[2];return M[0]=Q+V*(h[0]-Q),M[1]=I+V*(h[1]-I),M[2]=N+V*(h[2]-N),M}function a0(M,C,h,V,Q,I){var N=I*I,B=N*(2*I-3)+1,X=N*(I-2)+I,Y=N*(I-1),Z=N*(3-2*I);return M[0]=C[0]*B+h[0]*X+V[0]*Y+Q[0]*Z,M[1]=C[1]*B+h[1]*X+V[1]*Y+Q[1]*Z,M[2]=C[2]*B+h[2]*X+V[2]*Y+Q[2]*Z,M}function MM(M,C,h,V,Q,I){var N=1-I,B=N*N,X=I*I,Y=B*N,Z=3*I*B,O=3*X*N,W=X*I;return M[0]=C[0]*Y+h[0]*Z+V[0]*O+Q[0]*W,M[1]=C[1]*Y+h[1]*Z+V[1]*O+Q[1]*W,M[2]=C[2]*Y+h[2]*Z+V[2]*O+Q[2]*W,M}function CM(M,C){C=C||1;var h=q()*2*Math.PI,V=q()*2-1,Q=Math.sqrt(1-V*V)*C;return M[0]=Math.cos(h)*Q,M[1]=Math.sin(h)*Q,M[2]=V*C,M}function hM(M,C,h){var V=C[0],Q=C[1],I=C[2],N=h[3]*V+h[7]*Q+h[11]*I+h[15];return N=N||1,M[0]=(h[0]*V+h[4]*Q+h[8]*I+h[12])/N,M[1]=(h[1]*V+h[5]*Q+h[9]*I+h[13])/N,M[2]=(h[2]*V+h[6]*Q+h[10]*I+h[14])/N,M}function VM(M,C,h){var V=C[0],Q=C[1],I=C[2];return M[0]=V*h[0]+Q*h[3]+I*h[6],M[1]=V*h[1]+Q*h[4]+I*h[7],M[2]=V*h[2]+Q*h[5]+I*h[8],M}function QM(M,C,h){var V=h[0],Q=h[1],I=h[2],N=h[3],B=C[0],X=C[1],Y=C[2],Z=Q*Y-I*X,O=I*B-V*Y,W=V*X-Q*B,P=Q*W-I*O,G=I*Z-V*W,$=V*O-Q*Z,K=N*2;return Z*=K,O*=K,W*=K,P*=2,G*=2,$*=2,M[0]=B+Z+P,M[1]=X+O+G,M[2]=Y+W+$,M}function IM(M,C,h,V){var Q=[],I=[];return Q[0]=C[0]-h[0],Q[1]=C[1]-h[1],Q[2]=C[2]-h[2],I[0]=Q[0],I[1]=Q[1]*Math.cos(V)-Q[2]*Math.sin(V),I[2]=Q[1]*Math.sin(V)+Q[2]*Math.cos(V),M[0]=I[0]+h[0],M[1]=I[1]+h[1],M[2]=I[2]+h[2],M}function NM(M,C,h,V){var Q=[],I=[];return Q[0]=C[0]-h[0],Q[1]=C[1]-h[1],Q[2]=C[2]-h[2],I[0]=Q[2]*Math.sin(V)+Q[0]*Math.cos(V),I[1]=Q[1],I[2]=Q[2]*Math.cos(V)-Q[0]*Math.sin(V),M[0]=I[0]+h[0],M[1]=I[1]+h[1],M[2]=I[2]+h[2],M}function BM(M,C,h,V){var Q=[],I=[];return Q[0]=C[0]-h[0],Q[1]=C[1]-h[1],Q[2]=C[2]-h[2],I[0]=Q[0]*Math.cos(V)-Q[1]*Math.sin(V),I[1]=Q[0]*Math.sin(V)+Q[1]*Math.cos(V),I[2]=Q[2],M[0]=I[0]+h[0],M[1]=I[1]+h[1],M[2]=I[2]+h[2],M}function XM(M,C){var h=M[0],V=M[1],Q=M[2],I=C[0],N=C[1],B=C[2],X=Math.sqrt(h*h+V*V+Q*Q),Y=Math.sqrt(I*I+N*N+B*B),Z=X*Y,O=Z&&r(M,C)/Z;return Math.acos(Math.min(Math.max(O,-1),1))}function YM(M){return M[0]=0,M[1]=0,M[2]=0,M}function ZM(M){return"vec3("+M[0]+", "+M[1]+", "+M[2]+")"}function KM(M,C){return M[0]===C[0]&&M[1]===C[1]&&M[2]===C[2]}function OM(M,C){var h=M[0],V=M[1],Q=M[2],I=C[0],N=C[1],B=C[2];return Math.abs(h-I)<=U*Math.max(1,Math.abs(h),Math.abs(I))&&Math.abs(V-N)<=U*Math.max(1,Math.abs(V),Math.abs(N))&&Math.abs(Q-B)<=U*Math.max(1,Math.abs(Q),Math.abs(B))}var PM=M0,WM=C0,$M=h0,GM=V0,EM=Q0,y=a,LM=I0,AM=function(){var M=d();return function(C,h,V,Q,I,N){var B,X;if(!h)h=3;if(!V)V=0;if(Q)X=Math.min(Q*h+V,C.length);else X=C.length;for(B=V;B<X;B+=h)M[0]=C[B],M[1]=C[B+1],M[2]=C[B+2],I(M,M,N),C[B]=M[0],C[B+1]=M[1],C[B+2]=M[2];return C}}();function HM(){var M=new R(4);if(R!=Float32Array)M[0]=0,M[1]=0,M[2]=0,M[3]=0;return M}function N0(M){var C=new R(4);return C[0]=M[0],C[1]=M[1],C[2]=M[2],C[3]=M[3],C}function B0(M,C,h,V){var Q=new R(4);return Q[0]=M,Q[1]=C,Q[2]=h,Q[3]=V,Q}function X0(M,C){return M[0]=C[0],M[1]=C[1],M[2]=C[2],M[3]=C[3],M}function Y0(M,C,h,V,Q){return M[0]=C,M[1]=h,M[2]=V,M[3]=Q,M}function Z0(M,C,h){return M[0]=C[0]+h[0],M[1]=C[1]+h[1],M[2]=C[2]+h[2],M[3]=C[3]+h[3],M}function K0(M,C,h){return M[0]=C[0]*h,M[1]=C[1]*h,M[2]=C[2]*h,M[3]=C[3]*h,M}function O0(M){var C=M[0],h=M[1],V=M[2],Q=M[3];return Math.hypot(C,h,V,Q)}function P0(M){var C=M[0],h=M[1],V=M[2],Q=M[3];return C*C+h*h+V*V+Q*Q}function W0(M,C){var h=C[0],V=C[1],Q=C[2],I=C[3],N=h*h+V*V+Q*Q+I*I;if(N>0)N=1/Math.sqrt(N);return M[0]=h*N,M[1]=V*N,M[2]=Q*N,M[3]=I*N,M}function $0(M,C){return M[0]*C[0]+M[1]*C[1]+M[2]*C[2]+M[3]*C[3]}function G0(M,C,h,V){var Q=C[0],I=C[1],N=C[2],B=C[3];return M[0]=Q+V*(h[0]-Q),M[1]=I+V*(h[1]-I),M[2]=N+V*(h[2]-N),M[3]=B+V*(h[3]-B),M}function E0(M,C){return M[0]===C[0]&&M[1]===C[1]&&M[2]===C[2]&&M[3]===C[3]}function L0(M,C){var h=M[0],V=M[1],Q=M[2],I=M[3],N=C[0],B=C[1],X=C[2],Y=C[3];return Math.abs(h-N)<=U*Math.max(1,Math.abs(h),Math.abs(N))&&Math.abs(V-B)<=U*Math.max(1,Math.abs(V),Math.abs(B))&&Math.abs(Q-X)<=U*Math.max(1,Math.abs(Q),Math.abs(X))&&Math.abs(I-Y)<=U*Math.max(1,Math.abs(I),Math.abs(Y))}var cC=function(){var M=HM();return function(C,h,V,Q,I,N){var B,X;if(!h)h=4;if(!V)V=0;if(Q)X=Math.min(Q*h+V,C.length);else X=C.length;for(B=V;B<X;B+=h)M[0]=C[B],M[1]=C[B+1],M[2]=C[B+2],M[3]=C[B+3],I(M,M,N),C[B]=M[0],C[B+1]=M[1],C[B+2]=M[2],C[B+3]=M[3];return C}}();function e(){var M=new R(4);if(R!=Float32Array)M[0]=0,M[1]=0,M[2]=0;return M[3]=1,M}function UM(M){return M[0]=0,M[1]=0,M[2]=0,M[3]=1,M}function A0(M,C,h){h=h*0.5;var V=Math.sin(h);return M[0]=V*C[0],M[1]=V*C[1],M[2]=V*C[2],M[3]=Math.cos(h),M}function DM(M,C){var h=Math.acos(C[3])*2,V=Math.sin(h/2);if(V>U)M[0]=C[0]/V,M[1]=C[1]/V,M[2]=C[2]/V;else M[0]=1,M[1]=0,M[2]=0;return h}function FM(M,C){var h=R0(M,C);return Math.acos(2*h*h-1)}function H0(M,C,h){var V=C[0],Q=C[1],I=C[2],N=C[3],B=h[0],X=h[1],Y=h[2],Z=h[3];return M[0]=V*Z+N*B+Q*Y-I*X,M[1]=Q*Z+N*X+I*B-V*Y,M[2]=I*Z+N*Y+V*X-Q*B,M[3]=N*Z-V*B-Q*X-I*Y,M}function RM(M,C,h){h*=0.5;var V=C[0],Q=C[1],I=C[2],N=C[3],B=Math.sin(h),X=Math.cos(h);return M[0]=V*X+N*B,M[1]=Q*X+I*B,M[2]=I*X-Q*B,M[3]=N*X-V*B,M}function kM(M,C,h){h*=0.5;var V=C[0],Q=C[1],I=C[2],N=C[3],B=Math.sin(h),X=Math.cos(h);return M[0]=V*X-I*B,M[1]=Q*X+N*B,M[2]=I*X+V*B,M[3]=N*X-Q*B,M}function TM(M,C,h){h*=0.5;var V=C[0],Q=C[1],I=C[2],N=C[3],B=Math.sin(h),X=Math.cos(h);return M[0]=V*X+Q*B,M[1]=Q*X-V*B,M[2]=I*X+N*B,M[3]=N*X-I*B,M}function _M(M,C){var h=C[0],V=C[1],Q=C[2];return M[0]=h,M[1]=V,M[2]=Q,M[3]=Math.sqrt(Math.abs(1-h*h-V*V-Q*Q)),M}function J0(M,C){var h=C[0],V=C[1],Q=C[2],I=C[3],N=Math.sqrt(h*h+V*V+Q*Q),B=Math.exp(I),X=N>0?B*Math.sin(N)/N:0;return M[0]=h*X,M[1]=V*X,M[2]=Q*X,M[3]=B*Math.cos(N),M}function U0(M,C){var h=C[0],V=C[1],Q=C[2],I=C[3],N=Math.sqrt(h*h+V*V+Q*Q),B=N>0?Math.atan2(N,I)/N:0;return M[0]=h*B,M[1]=V*B,M[2]=Q*B,M[3]=0.5*Math.log(h*h+V*V+Q*Q+I*I),M}function SM(M,C,h){return U0(M,C),F0(M,M,h),J0(M,M),M}function c(M,C,h,V){var Q=C[0],I=C[1],N=C[2],B=C[3],X=h[0],Y=h[1],Z=h[2],O=h[3],W,P,G,$,K;if(P=Q*X+I*Y+N*Z+B*O,P<0)P=-P,X=-X,Y=-Y,Z=-Z,O=-O;if(1-P>U)W=Math.acos(P),G=Math.sin(W),$=Math.sin((1-V)*W)/G,K=Math.sin(V*W)/G;else $=1-V,K=V;return M[0]=$*Q+K*X,M[1]=$*I+K*Y,M[2]=$*N+K*Z,M[3]=$*B+K*O,M}function jM(M){var C=q(),h=q(),V=q(),Q=Math.sqrt(1-C),I=Math.sqrt(C);return M[0]=Q*Math.sin(2*Math.PI*h),M[1]=Q*Math.cos(2*Math.PI*h),M[2]=I*Math.sin(2*Math.PI*V),M[3]=I*Math.cos(2*Math.PI*V),M}function gM(M,C){var h=C[0],V=C[1],Q=C[2],I=C[3],N=h*h+V*V+Q*Q+I*I,B=N?1/N:0;return M[0]=-h*B,M[1]=-V*B,M[2]=-Q*B,M[3]=I*B,M}function pM(M,C){return M[0]=-C[0],M[1]=-C[1],M[2]=-C[2],M[3]=C[3],M}function D0(M,C){var h=C[0]+C[4]+C[8],V;if(h>0)V=Math.sqrt(h+1),M[3]=0.5*V,V=0.5/V,M[0]=(C[5]-C[7])*V,M[1]=(C[6]-C[2])*V,M[2]=(C[1]-C[3])*V;else{var Q=0;if(C[4]>C[0])Q=1;if(C[8]>C[Q*3+Q])Q=2;var I=(Q+1)%3,N=(Q+2)%3;V=Math.sqrt(C[Q*3+Q]-C[I*3+I]-C[N*3+N]+1),M[Q]=0.5*V,V=0.5/V,M[3]=(C[I*3+N]-C[N*3+I])*V,M[I]=(C[I*3+Q]+C[Q*3+I])*V,M[N]=(C[N*3+Q]+C[Q*3+N])*V}return M}function nM(M,C,h,V){var Q=0.5*Math.PI/180;C*=Q,h*=Q,V*=Q;var I=Math.sin(C),N=Math.cos(C),B=Math.sin(h),X=Math.cos(h),Y=Math.sin(V),Z=Math.cos(V);return M[0]=I*X*Z-N*B*Y,M[1]=N*B*Z+I*X*Y,M[2]=N*X*Y-I*B*Z,M[3]=N*X*Z+I*B*Y,M}function qM(M){return"quat("+M[0]+", "+M[1]+", "+M[2]+", "+M[3]+")"}var iM=N0,fM=B0,vM=X0,wM=Y0,dM=Z0,lM=H0,F0=K0,R0=$0,rM=G0,k0=O0,cM=k0,T0=P0,zM=T0,m=W0,sM=E0,yM=L0,xM=function(){var M=d(),C=l(1,0,0),h=l(0,1,0);return function(V,Q,I){var N=r(Q,I);if(N<-0.999999){if(w(M,C,Q),y(M)<0.000001)w(M,h,Q);return s(M,M),A0(V,M,Math.PI),V}else if(N>0.999999)return V[0]=0,V[1]=0,V[2]=0,V[3]=1,V;else return w(M,Q,I),V[0]=M[0],V[1]=M[1],V[2]=M[2],V[3]=1+N,m(V,V)}}(),eM=function(){var M=e(),C=e();return function(h,V,Q,I,N,B){return c(M,V,N,B),c(C,Q,I,B),c(h,M,C,2*B*(1-B)),h}}(),mM=function(){var M=t();return function(C,h,V,Q){return M[0]=V[0],M[3]=V[1],M[6]=V[2],M[1]=Q[0],M[4]=Q[1],M[7]=Q[2],M[2]=-h[0],M[5]=-h[1],M[8]=-h[2],m(C,D0(C,M))}}();var f0={};z(f0,{transpose:()=>{{return MC}},translate:()=>{{return QC}},targetTo:()=>{{return SC}},subtract:()=>{{return i0}},sub:()=>{{return wC}},str:()=>{{return jC}},set:()=>{{return aM}},scale:()=>{{return IC}},rotateZ:()=>{{return YC}},rotateY:()=>{{return XC}},rotateX:()=>{{return BC}},rotate:()=>{{return NC}},perspectiveZO:()=>{{return FC}},perspectiveNO:()=>{{return n0}},perspectiveFromFieldOfView:()=>{{return RC}},perspective:()=>{{return DC}},orthoZO:()=>{{return TC}},orthoNO:()=>{{return q0}},ortho:()=>{{return kC}},multiplyScalarAndAdd:()=>{{return qC}},multiplyScalar:()=>{{return nC}},multiply:()=>{{return j0}},mul:()=>{{return vC}},lookAt:()=>{{return _C}},invert:()=>{{return CC}},identity:()=>{{return S0}},getTranslation:()=>{{return EC}},getScaling:()=>{{return p0}},getRotation:()=>{{return LC}},frustum:()=>{{return UC}},fromZRotation:()=>{{return $C}},fromYRotation:()=>{{return WC}},fromXRotation:()=>{{return PC}},fromValues:()=>{{return tM}},fromTranslation:()=>{{return ZC}},fromScaling:()=>{{return KC}},fromRotationTranslationScaleOrigin:()=>{{return HC}},fromRotationTranslationScale:()=>{{return AC}},fromRotationTranslation:()=>{{return g0}},fromRotation:()=>{{return OC}},fromQuat2:()=>{{return GC}},fromQuat:()=>{{return JC}},frob:()=>{{return gC}},exactEquals:()=>{{return iC}},equals:()=>{{return fC}},determinant:()=>{{return VC}},create:()=>{{return bM}},copy:()=>{{return oM}},clone:()=>{{return uM}},adjoint:()=>{{return hC}},add:()=>{{return pC}}});function bM(){var M=new R(16);if(R!=Float32Array)M[1]=0,M[2]=0,M[3]=0,M[4]=0,M[6]=0,M[7]=0,M[8]=0,M[9]=0,M[11]=0,M[12]=0,M[13]=0,M[14]=0;return M[0]=1,M[5]=1,M[10]=1,M[15]=1,M}function uM(M){var C=new R(16);return C[0]=M[0],C[1]=M[1],C[2]=M[2],C[3]=M[3],C[4]=M[4],C[5]=M[5],C[6]=M[6],C[7]=M[7],C[8]=M[8],C[9]=M[9],C[10]=M[10],C[11]=M[11],C[12]=M[12],C[13]=M[13],C[14]=M[14],C[15]=M[15],C}function oM(M,C){return M[0]=C[0],M[1]=C[1],M[2]=C[2],M[3]=C[3],M[4]=C[4],M[5]=C[5],M[6]=C[6],M[7]=C[7],M[8]=C[8],M[9]=C[9],M[10]=C[10],M[11]=C[11],M[12]=C[12],M[13]=C[13],M[14]=C[14],M[15]=C[15],M}function tM(M,C,h,V,Q,I,N,B,X,Y,Z,O,W,P,G,$){var K=new R(16);return K[0]=M,K[1]=C,K[2]=h,K[3]=V,K[4]=Q,K[5]=I,K[6]=N,K[7]=B,K[8]=X,K[9]=Y,K[10]=Z,K[11]=O,K[12]=W,K[13]=P,K[14]=G,K[15]=$,K}function aM(M,C,h,V,Q,I,N,B,X,Y,Z,O,W,P,G,$,K){return M[0]=C,M[1]=h,M[2]=V,M[3]=Q,M[4]=I,M[5]=N,M[6]=B,M[7]=X,M[8]=Y,M[9]=Z,M[10]=O,M[11]=W,M[12]=P,M[13]=G,M[14]=$,M[15]=K,M}function S0(M){return M[0]=1,M[1]=0,M[2]=0,M[3]=0,M[4]=0,M[5]=1,M[6]=0,M[7]=0,M[8]=0,M[9]=0,M[10]=1,M[11]=0,M[12]=0,M[13]=0,M[14]=0,M[15]=1,M}function MC(M,C){if(M===C){var h=C[1],V=C[2],Q=C[3],I=C[6],N=C[7],B=C[11];M[1]=C[4],M[2]=C[8],M[3]=C[12],M[4]=h,M[6]=C[9],M[7]=C[13],M[8]=V,M[9]=I,M[11]=C[14],M[12]=Q,M[13]=N,M[14]=B}else M[0]=C[0],M[1]=C[4],M[2]=C[8],M[3]=C[12],M[4]=C[1],M[5]=C[5],M[6]=C[9],M[7]=C[13],M[8]=C[2],M[9]=C[6],M[10]=C[10],M[11]=C[14],M[12]=C[3],M[13]=C[7],M[14]=C[11],M[15]=C[15];return M}function CC(M,C){var h=C[0],V=C[1],Q=C[2],I=C[3],N=C[4],B=C[5],X=C[6],Y=C[7],Z=C[8],O=C[9],W=C[10],P=C[11],G=C[12],$=C[13],K=C[14],E=C[15],D=h*B-V*N,J=h*X-Q*N,H=h*Y-I*N,L=V*X-Q*B,A=V*Y-I*B,S=Q*Y-I*X,k=Z*$-O*G,T=Z*K-W*G,_=Z*E-P*G,j=O*K-W*$,g=O*E-P*$,p=W*E-P*K,F=D*p-J*g+H*j+L*_-A*T+S*k;if(!F)return null;return F=1/F,M[0]=(B*p-X*g+Y*j)*F,M[1]=(Q*g-V*p-I*j)*F,M[2]=($*S-K*A+E*L)*F,M[3]=(W*A-O*S-P*L)*F,M[4]=(X*_-N*p-Y*T)*F,M[5]=(h*p-Q*_+I*T)*F,M[6]=(K*H-G*S-E*J)*F,M[7]=(Z*S-W*H+P*J)*F,M[8]=(N*g-B*_+Y*k)*F,M[9]=(V*_-h*g-I*k)*F,M[10]=(G*A-$*H+E*D)*F,M[11]=(O*H-Z*A-P*D)*F,M[12]=(B*T-N*j-X*k)*F,M[13]=(h*j-V*T+Q*k)*F,M[14]=($*J-G*L-K*D)*F,M[15]=(Z*L-O*J+W*D)*F,M}function hC(M,C){var h=C[0],V=C[1],Q=C[2],I=C[3],N=C[4],B=C[5],X=C[6],Y=C[7],Z=C[8],O=C[9],W=C[10],P=C[11],G=C[12],$=C[13],K=C[14],E=C[15];return M[0]=B*(W*E-P*K)-O*(X*E-Y*K)+$*(X*P-Y*W),M[1]=-(V*(W*E-P*K)-O*(Q*E-I*K)+$*(Q*P-I*W)),M[2]=V*(X*E-Y*K)-B*(Q*E-I*K)+$*(Q*Y-I*X),M[3]=-(V*(X*P-Y*W)-B*(Q*P-I*W)+O*(Q*Y-I*X)),M[4]=-(N*(W*E-P*K)-Z*(X*E-Y*K)+G*(X*P-Y*W)),M[5]=h*(W*E-P*K)-Z*(Q*E-I*K)+G*(Q*P-I*W),M[6]=-(h*(X*E-Y*K)-N*(Q*E-I*K)+G*(Q*Y-I*X)),M[7]=h*(X*P-Y*W)-N*(Q*P-I*W)+Z*(Q*Y-I*X),M[8]=N*(O*E-P*$)-Z*(B*E-Y*$)+G*(B*P-Y*O),M[9]=-(h*(O*E-P*$)-Z*(V*E-I*$)+G*(V*P-I*O)),M[10]=h*(B*E-Y*$)-N*(V*E-I*$)+G*(V*Y-I*B),M[11]=-(h*(B*P-Y*O)-N*(V*P-I*O)+Z*(V*Y-I*B)),M[12]=-(N*(O*K-W*$)-Z*(B*K-X*$)+G*(B*W-X*O)),M[13]=h*(O*K-W*$)-Z*(V*K-Q*$)+G*(V*W-Q*O),M[14]=-(h*(B*K-X*$)-N*(V*K-Q*$)+G*(V*X-Q*B)),M[15]=h*(B*W-X*O)-N*(V*W-Q*O)+Z*(V*X-Q*B),M}function VC(M){var C=M[0],h=M[1],V=M[2],Q=M[3],I=M[4],N=M[5],B=M[6],X=M[7],Y=M[8],Z=M[9],O=M[10],W=M[11],P=M[12],G=M[13],$=M[14],K=M[15],E=C*N-h*I,D=C*B-V*I,J=C*X-Q*I,H=h*B-V*N,L=h*X-Q*N,A=V*X-Q*B,S=Y*G-Z*P,k=Y*$-O*P,T=Y*K-W*P,_=Z*$-O*G,j=Z*K-W*G,g=O*K-W*$;return E*g-D*j+J*_+H*T-L*k+A*S}function j0(M,C,h){var V=C[0],Q=C[1],I=C[2],N=C[3],B=C[4],X=C[5],Y=C[6],Z=C[7],O=C[8],W=C[9],P=C[10],G=C[11],$=C[12],K=C[13],E=C[14],D=C[15],J=h[0],H=h[1],L=h[2],A=h[3];return M[0]=J*V+H*B+L*O+A*$,M[1]=J*Q+H*X+L*W+A*K,M[2]=J*I+H*Y+L*P+A*E,M[3]=J*N+H*Z+L*G+A*D,J=h[4],H=h[5],L=h[6],A=h[7],M[4]=J*V+H*B+L*O+A*$,M[5]=J*Q+H*X+L*W+A*K,M[6]=J*I+H*Y+L*P+A*E,M[7]=J*N+H*Z+L*G+A*D,J=h[8],H=h[9],L=h[10],A=h[11],M[8]=J*V+H*B+L*O+A*$,M[9]=J*Q+H*X+L*W+A*K,M[10]=J*I+H*Y+L*P+A*E,M[11]=J*N+H*Z+L*G+A*D,J=h[12],H=h[13],L=h[14],A=h[15],M[12]=J*V+H*B+L*O+A*$,M[13]=J*Q+H*X+L*W+A*K,M[14]=J*I+H*Y+L*P+A*E,M[15]=J*N+H*Z+L*G+A*D,M}function QC(M,C,h){var V=h[0],Q=h[1],I=h[2],N,B,X,Y,Z,O,W,P,G,$,K,E;if(C===M)M[12]=C[0]*V+C[4]*Q+C[8]*I+C[12],M[13]=C[1]*V+C[5]*Q+C[9]*I+C[13],M[14]=C[2]*V+C[6]*Q+C[10]*I+C[14],M[15]=C[3]*V+C[7]*Q+C[11]*I+C[15];else N=C[0],B=C[1],X=C[2],Y=C[3],Z=C[4],O=C[5],W=C[6],P=C[7],G=C[8],$=C[9],K=C[10],E=C[11],M[0]=N,M[1]=B,M[2]=X,M[3]=Y,M[4]=Z,M[5]=O,M[6]=W,M[7]=P,M[8]=G,M[9]=$,M[10]=K,M[11]=E,M[12]=N*V+Z*Q+G*I+C[12],M[13]=B*V+O*Q+$*I+C[13],M[14]=X*V+W*Q+K*I+C[14],M[15]=Y*V+P*Q+E*I+C[15];return M}function IC(M,C,h){var V=h[0],Q=h[1],I=h[2];return M[0]=C[0]*V,M[1]=C[1]*V,M[2]=C[2]*V,M[3]=C[3]*V,M[4]=C[4]*Q,M[5]=C[5]*Q,M[6]=C[6]*Q,M[7]=C[7]*Q,M[8]=C[8]*I,M[9]=C[9]*I,M[10]=C[10]*I,M[11]=C[11]*I,M[12]=C[12],M[13]=C[13],M[14]=C[14],M[15]=C[15],M}function NC(M,C,h,V){var Q=V[0],I=V[1],N=V[2],B=Math.hypot(Q,I,N),X,Y,Z,O,W,P,G,$,K,E,D,J,H,L,A,S,k,T,_,j,g,p,F,n;if(B<U)return null;if(B=1/B,Q*=B,I*=B,N*=B,X=Math.sin(h),Y=Math.cos(h),Z=1-Y,O=C[0],W=C[1],P=C[2],G=C[3],$=C[4],K=C[5],E=C[6],D=C[7],J=C[8],H=C[9],L=C[10],A=C[11],S=Q*Q*Z+Y,k=I*Q*Z+N*X,T=N*Q*Z-I*X,_=Q*I*Z-N*X,j=I*I*Z+Y,g=N*I*Z+Q*X,p=Q*N*Z+I*X,F=I*N*Z-Q*X,n=N*N*Z+Y,M[0]=O*S+$*k+J*T,M[1]=W*S+K*k+H*T,M[2]=P*S+E*k+L*T,M[3]=G*S+D*k+A*T,M[4]=O*_+$*j+J*g,M[5]=W*_+K*j+H*g,M[6]=P*_+E*j+L*g,M[7]=G*_+D*j+A*g,M[8]=O*p+$*F+J*n,M[9]=W*p+K*F+H*n,M[10]=P*p+E*F+L*n,M[11]=G*p+D*F+A*n,C!==M)M[12]=C[12],M[13]=C[13],M[14]=C[14],M[15]=C[15];return M}function BC(M,C,h){var V=Math.sin(h),Q=Math.cos(h),I=C[4],N=C[5],B=C[6],X=C[7],Y=C[8],Z=C[9],O=C[10],W=C[11];if(C!==M)M[0]=C[0],M[1]=C[1],M[2]=C[2],M[3]=C[3],M[12]=C[12],M[13]=C[13],M[14]=C[14],M[15]=C[15];return M[4]=I*Q+Y*V,M[5]=N*Q+Z*V,M[6]=B*Q+O*V,M[7]=X*Q+W*V,M[8]=Y*Q-I*V,M[9]=Z*Q-N*V,M[10]=O*Q-B*V,M[11]=W*Q-X*V,M}function XC(M,C,h){var V=Math.sin(h),Q=Math.cos(h),I=C[0],N=C[1],B=C[2],X=C[3],Y=C[8],Z=C[9],O=C[10],W=C[11];if(C!==M)M[4]=C[4],M[5]=C[5],M[6]=C[6],M[7]=C[7],M[12]=C[12],M[13]=C[13],M[14]=C[14],M[15]=C[15];return M[0]=I*Q-Y*V,M[1]=N*Q-Z*V,M[2]=B*Q-O*V,M[3]=X*Q-W*V,M[8]=I*V+Y*Q,M[9]=N*V+Z*Q,M[10]=B*V+O*Q,M[11]=X*V+W*Q,M}function YC(M,C,h){var V=Math.sin(h),Q=Math.cos(h),I=C[0],N=C[1],B=C[2],X=C[3],Y=C[4],Z=C[5],O=C[6],W=C[7];if(C!==M)M[8]=C[8],M[9]=C[9],M[10]=C[10],M[11]=C[11],M[12]=C[12],M[13]=C[13],M[14]=C[14],M[15]=C[15];return M[0]=I*Q+Y*V,M[1]=N*Q+Z*V,M[2]=B*Q+O*V,M[3]=X*Q+W*V,M[4]=Y*Q-I*V,M[5]=Z*Q-N*V,M[6]=O*Q-B*V,M[7]=W*Q-X*V,M}function ZC(M,C){return M[0]=1,M[1]=0,M[2]=0,M[3]=0,M[4]=0,M[5]=1,M[6]=0,M[7]=0,M[8]=0,M[9]=0,M[10]=1,M[11]=0,M[12]=C[0],M[13]=C[1],M[14]=C[2],M[15]=1,M}function KC(M,C){return M[0]=C[0],M[1]=0,M[2]=0,M[3]=0,M[4]=0,M[5]=C[1],M[6]=0,M[7]=0,M[8]=0,M[9]=0,M[10]=C[2],M[11]=0,M[12]=0,M[13]=0,M[14]=0,M[15]=1,M}function OC(M,C,h){var V=h[0],Q=h[1],I=h[2],N=Math.hypot(V,Q,I),B,X,Y;if(N<U)return null;return N=1/N,V*=N,Q*=N,I*=N,B=Math.sin(C),X=Math.cos(C),Y=1-X,M[0]=V*V*Y+X,M[1]=Q*V*Y+I*B,M[2]=I*V*Y-Q*B,M[3]=0,M[4]=V*Q*Y-I*B,M[5]=Q*Q*Y+X,M[6]=I*Q*Y+V*B,M[7]=0,M[8]=V*I*Y+Q*B,M[9]=Q*I*Y-V*B,M[10]=I*I*Y+X,M[11]=0,M[12]=0,M[13]=0,M[14]=0,M[15]=1,M}function PC(M,C){var h=Math.sin(C),V=Math.cos(C);return M[0]=1,M[1]=0,M[2]=0,M[3]=0,M[4]=0,M[5]=V,M[6]=h,M[7]=0,M[8]=0,M[9]=-h,M[10]=V,M[11]=0,M[12]=0,M[13]=0,M[14]=0,M[15]=1,M}function WC(M,C){var h=Math.sin(C),V=Math.cos(C);return M[0]=V,M[1]=0,M[2]=-h,M[3]=0,M[4]=0,M[5]=1,M[6]=0,M[7]=0,M[8]=h,M[9]=0,M[10]=V,M[11]=0,M[12]=0,M[13]=0,M[14]=0,M[15]=1,M}function $C(M,C){var h=Math.sin(C),V=Math.cos(C);return M[0]=V,M[1]=h,M[2]=0,M[3]=0,M[4]=-h,M[5]=V,M[6]=0,M[7]=0,M[8]=0,M[9]=0,M[10]=1,M[11]=0,M[12]=0,M[13]=0,M[14]=0,M[15]=1,M}function g0(M,C,h){var V=C[0],Q=C[1],I=C[2],N=C[3],B=V+V,X=Q+Q,Y=I+I,Z=V*B,O=V*X,W=V*Y,P=Q*X,G=Q*Y,$=I*Y,K=N*B,E=N*X,D=N*Y;return M[0]=1-(P+$),M[1]=O+D,M[2]=W-E,M[3]=0,M[4]=O-D,M[5]=1-(Z+$),M[6]=G+K,M[7]=0,M[8]=W+E,M[9]=G-K,M[10]=1-(Z+P),M[11]=0,M[12]=h[0],M[13]=h[1],M[14]=h[2],M[15]=1,M}function GC(M,C){var h=new R(3),V=-C[0],Q=-C[1],I=-C[2],N=C[3],B=C[4],X=C[5],Y=C[6],Z=C[7],O=V*V+Q*Q+I*I+N*N;if(O>0)h[0]=(B*N+Z*V+X*I-Y*Q)*2/O,h[1]=(X*N+Z*Q+Y*V-B*I)*2/O,h[2]=(Y*N+Z*I+B*Q-X*V)*2/O;else h[0]=(B*N+Z*V+X*I-Y*Q)*2,h[1]=(X*N+Z*Q+Y*V-B*I)*2,h[2]=(Y*N+Z*I+B*Q-X*V)*2;return g0(M,C,h),M}function EC(M,C){return M[0]=C[12],M[1]=C[13],M[2]=C[14],M}function p0(M,C){var h=C[0],V=C[1],Q=C[2],I=C[4],N=C[5],B=C[6],X=C[8],Y=C[9],Z=C[10];return M[0]=Math.hypot(h,V,Q),M[1]=Math.hypot(I,N,B),M[2]=Math.hypot(X,Y,Z),M}function LC(M,C){var h=new R(3);p0(h,C);var V=1/h[0],Q=1/h[1],I=1/h[2],N=C[0]*V,B=C[1]*Q,X=C[2]*I,Y=C[4]*V,Z=C[5]*Q,O=C[6]*I,W=C[8]*V,P=C[9]*Q,G=C[10]*I,$=N+Z+G,K=0;if($>0)K=Math.sqrt($+1)*2,M[3]=0.25*K,M[0]=(O-P)/K,M[1]=(W-X)/K,M[2]=(B-Y)/K;else if(N>Z&&N>G)K=Math.sqrt(1+N-Z-G)*2,M[3]=(O-P)/K,M[0]=0.25*K,M[1]=(B+Y)/K,M[2]=(W+X)/K;else if(Z>G)K=Math.sqrt(1+Z-N-G)*2,M[3]=(W-X)/K,M[0]=(B+Y)/K,M[1]=0.25*K,M[2]=(O+P)/K;else K=Math.sqrt(1+G-N-Z)*2,M[3]=(B-Y)/K,M[0]=(W+X)/K,M[1]=(O+P)/K,M[2]=0.25*K;return M}function AC(M,C,h,V){var Q=C[0],I=C[1],N=C[2],B=C[3],X=Q+Q,Y=I+I,Z=N+N,O=Q*X,W=Q*Y,P=Q*Z,G=I*Y,$=I*Z,K=N*Z,E=B*X,D=B*Y,J=B*Z,H=V[0],L=V[1],A=V[2];return M[0]=(1-(G+K))*H,M[1]=(W+J)*H,M[2]=(P-D)*H,M[3]=0,M[4]=(W-J)*L,M[5]=(1-(O+K))*L,M[6]=($+E)*L,M[7]=0,M[8]=(P+D)*A,M[9]=($-E)*A,M[10]=(1-(O+G))*A,M[11]=0,M[12]=h[0],M[13]=h[1],M[14]=h[2],M[15]=1,M}function HC(M,C,h,V,Q){var I=C[0],N=C[1],B=C[2],X=C[3],Y=I+I,Z=N+N,O=B+B,W=I*Y,P=I*Z,G=I*O,$=N*Z,K=N*O,E=B*O,D=X*Y,J=X*Z,H=X*O,L=V[0],A=V[1],S=V[2],k=Q[0],T=Q[1],_=Q[2],j=(1-($+E))*L,g=(P+H)*L,p=(G-J)*L,F=(P-H)*A,n=(1-(W+E))*A,i=(K+D)*A,f=(G+J)*S,u=(K-D)*S,o=(1-(W+$))*S;return M[0]=j,M[1]=g,M[2]=p,M[3]=0,M[4]=F,M[5]=n,M[6]=i,M[7]=0,M[8]=f,M[9]=u,M[10]=o,M[11]=0,M[12]=h[0]+k-(j*k+F*T+f*_),M[13]=h[1]+T-(g*k+n*T+u*_),M[14]=h[2]+_-(p*k+i*T+o*_),M[15]=1,M}function JC(M,C){var h=C[0],V=C[1],Q=C[2],I=C[3],N=h+h,B=V+V,X=Q+Q,Y=h*N,Z=V*N,O=V*B,W=Q*N,P=Q*B,G=Q*X,$=I*N,K=I*B,E=I*X;return M[0]=1-O-G,M[1]=Z+E,M[2]=W-K,M[3]=0,M[4]=Z-E,M[5]=1-Y-G,M[6]=P+$,M[7]=0,M[8]=W+K,M[9]=P-$,M[10]=1-Y-O,M[11]=0,M[12]=0,M[13]=0,M[14]=0,M[15]=1,M}function UC(M,C,h,V,Q,I,N){var B=1/(h-C),X=1/(Q-V),Y=1/(I-N);return M[0]=I*2*B,M[1]=0,M[2]=0,M[3]=0,M[4]=0,M[5]=I*2*X,M[6]=0,M[7]=0,M[8]=(h+C)*B,M[9]=(Q+V)*X,M[10]=(N+I)*Y,M[11]=-1,M[12]=0,M[13]=0,M[14]=N*I*2*Y,M[15]=0,M}function n0(M,C,h,V,Q){var I=1/Math.tan(C/2),N;if(M[0]=I/h,M[1]=0,M[2]=0,M[3]=0,M[4]=0,M[5]=I,M[6]=0,M[7]=0,M[8]=0,M[9]=0,M[11]=-1,M[12]=0,M[13]=0,M[15]=0,Q!=null&&Q!==Infinity)N=1/(V-Q),M[10]=(Q+V)*N,M[14]=2*Q*V*N;else M[10]=-1,M[14]=-2*V;return M}function FC(M,C,h,V,Q){var I=1/Math.tan(C/2),N;if(M[0]=I/h,M[1]=0,M[2]=0,M[3]=0,M[4]=0,M[5]=I,M[6]=0,M[7]=0,M[8]=0,M[9]=0,M[11]=-1,M[12]=0,M[13]=0,M[15]=0,Q!=null&&Q!==Infinity)N=1/(V-Q),M[10]=Q*N,M[14]=Q*V*N;else M[10]=-1,M[14]=-V;return M}function RC(M,C,h,V){var Q=Math.tan(C.upDegrees*Math.PI/180),I=Math.tan(C.downDegrees*Math.PI/180),N=Math.tan(C.leftDegrees*Math.PI/180),B=Math.tan(C.rightDegrees*Math.PI/180),X=2/(N+B),Y=2/(Q+I);return M[0]=X,M[1]=0,M[2]=0,M[3]=0,M[4]=0,M[5]=Y,M[6]=0,M[7]=0,M[8]=-((N-B)*X*0.5),M[9]=(Q-I)*Y*0.5,M[10]=V/(h-V),M[11]=-1,M[12]=0,M[13]=0,M[14]=V*h/(h-V),M[15]=0,M}function q0(M,C,h,V,Q,I,N){var B=1/(C-h),X=1/(V-Q),Y=1/(I-N);return M[0]=-2*B,M[1]=0,M[2]=0,M[3]=0,M[4]=0,M[5]=-2*X,M[6]=0,M[7]=0,M[8]=0,M[9]=0,M[10]=2*Y,M[11]=0,M[12]=(C+h)*B,M[13]=(Q+V)*X,M[14]=(N+I)*Y,M[15]=1,M}function TC(M,C,h,V,Q,I,N){var B=1/(C-h),X=1/(V-Q),Y=1/(I-N);return M[0]=-2*B,M[1]=0,M[2]=0,M[3]=0,M[4]=0,M[5]=-2*X,M[6]=0,M[7]=0,M[8]=0,M[9]=0,M[10]=Y,M[11]=0,M[12]=(C+h)*B,M[13]=(Q+V)*X,M[14]=I*Y,M[15]=1,M}function _C(M,C,h,V){var Q,I,N,B,X,Y,Z,O,W,P,G=C[0],$=C[1],K=C[2],E=V[0],D=V[1],J=V[2],H=h[0],L=h[1],A=h[2];if(Math.abs(G-H)<U&&Math.abs($-L)<U&&Math.abs(K-A)<U)return S0(M);if(Z=G-H,O=$-L,W=K-A,P=1/Math.hypot(Z,O,W),Z*=P,O*=P,W*=P,Q=D*W-J*O,I=J*Z-E*W,N=E*O-D*Z,P=Math.hypot(Q,I,N),!P)Q=0,I=0,N=0;else P=1/P,Q*=P,I*=P,N*=P;if(B=O*N-W*I,X=W*Q-Z*N,Y=Z*I-O*Q,P=Math.hypot(B,X,Y),!P)B=0,X=0,Y=0;else P=1/P,B*=P,X*=P,Y*=P;return M[0]=Q,M[1]=B,M[2]=Z,M[3]=0,M[4]=I,M[5]=X,M[6]=O,M[7]=0,M[8]=N,M[9]=Y,M[10]=W,M[11]=0,M[12]=-(Q*G+I*$+N*K),M[13]=-(B*G+X*$+Y*K),M[14]=-(Z*G+O*$+W*K),M[15]=1,M}function SC(M,C,h,V){var Q=C[0],I=C[1],N=C[2],B=V[0],X=V[1],Y=V[2],Z=Q-h[0],O=I-h[1],W=N-h[2],P=Z*Z+O*O+W*W;if(P>0)P=1/Math.sqrt(P),Z*=P,O*=P,W*=P;var G=X*W-Y*O,$=Y*Z-B*W,K=B*O-X*Z;if(P=G*G+$*$+K*K,P>0)P=1/Math.sqrt(P),G*=P,$*=P,K*=P;return M[0]=G,M[1]=$,M[2]=K,M[3]=0,M[4]=O*K-W*$,M[5]=W*G-Z*K,M[6]=Z*$-O*G,M[7]=0,M[8]=Z,M[9]=O,M[10]=W,M[11]=0,M[12]=Q,M[13]=I,M[14]=N,M[15]=1,M}function jC(M){return"mat4("+M[0]+", "+M[1]+", "+M[2]+", "+M[3]+", "+M[4]+", "+M[5]+", "+M[6]+", "+M[7]+", "+M[8]+", "+M[9]+", "+M[10]+", "+M[11]+", "+M[12]+", "+M[13]+", "+M[14]+", "+M[15]+")"}function gC(M){return Math.hypot(M[0],M[1],M[2],M[3],M[4],M[5],M[6],M[7],M[8],M[9],M[10],M[11],M[12],M[13],M[14],M[15])}function pC(M,C,h){return M[0]=C[0]+h[0],M[1]=C[1]+h[1],M[2]=C[2]+h[2],M[3]=C[3]+h[3],M[4]=C[4]+h[4],M[5]=C[5]+h[5],M[6]=C[6]+h[6],M[7]=C[7]+h[7],M[8]=C[8]+h[8],M[9]=C[9]+h[9],M[10]=C[10]+h[10],M[11]=C[11]+h[11],M[12]=C[12]+h[12],M[13]=C[13]+h[13],M[14]=C[14]+h[14],M[15]=C[15]+h[15],M}function i0(M,C,h){return M[0]=C[0]-h[0],M[1]=C[1]-h[1],M[2]=C[2]-h[2],M[3]=C[3]-h[3],M[4]=C[4]-h[4],M[5]=C[5]-h[5],M[6]=C[6]-h[6],M[7]=C[7]-h[7],M[8]=C[8]-h[8],M[9]=C[9]-h[9],M[10]=C[10]-h[10],M[11]=C[11]-h[11],M[12]=C[12]-h[12],M[13]=C[13]-h[13],M[14]=C[14]-h[14],M[15]=C[15]-h[15],M}function nC(M,C,h){return M[0]=C[0]*h,M[1]=C[1]*h,M[2]=C[2]*h,M[3]=C[3]*h,M[4]=C[4]*h,M[5]=C[5]*h,M[6]=C[6]*h,M[7]=C[7]*h,M[8]=C[8]*h,M[9]=C[9]*h,M[10]=C[10]*h,M[11]=C[11]*h,M[12]=C[12]*h,M[13]=C[13]*h,M[14]=C[14]*h,M[15]=C[15]*h,M}function qC(M,C,h,V){return M[0]=C[0]+h[0]*V,M[1]=C[1]+h[1]*V,M[2]=C[2]+h[2]*V,M[3]=C[3]+h[3]*V,M[4]=C[4]+h[4]*V,M[5]=C[5]+h[5]*V,M[6]=C[6]+h[6]*V,M[7]=C[7]+h[7]*V,M[8]=C[8]+h[8]*V,M[9]=C[9]+h[9]*V,M[10]=C[10]+h[10]*V,M[11]=C[11]+h[11]*V,M[12]=C[12]+h[12]*V,M[13]=C[13]+h[13]*V,M[14]=C[14]+h[14]*V,M[15]=C[15]+h[15]*V,M}function iC(M,C){return M[0]===C[0]&&M[1]===C[1]&&M[2]===C[2]&&M[3]===C[3]&&M[4]===C[4]&&M[5]===C[5]&&M[6]===C[6]&&M[7]===C[7]&&M[8]===C[8]&&M[9]===C[9]&&M[10]===C[10]&&M[11]===C[11]&&M[12]===C[12]&&M[13]===C[13]&&M[14]===C[14]&&M[15]===C[15]}function fC(M,C){var h=M[0],V=M[1],Q=M[2],I=M[3],N=M[4],B=M[5],X=M[6],Y=M[7],Z=M[8],O=M[9],W=M[10],P=M[11],G=M[12],$=M[13],K=M[14],E=M[15],D=C[0],J=C[1],H=C[2],L=C[3],A=C[4],S=C[5],k=C[6],T=C[7],_=C[8],j=C[9],g=C[10],p=C[11],F=C[12],n=C[13],i=C[14],f=C[15];return Math.abs(h-D)<=U*Math.max(1,Math.abs(h),Math.abs(D))&&Math.abs(V-J)<=U*Math.max(1,Math.abs(V),Math.abs(J))&&Math.abs(Q-H)<=U*Math.max(1,Math.abs(Q),Math.abs(H))&&Math.abs(I-L)<=U*Math.max(1,Math.abs(I),Math.abs(L))&&Math.abs(N-A)<=U*Math.max(1,Math.abs(N),Math.abs(A))&&Math.abs(B-S)<=U*Math.max(1,Math.abs(B),Math.abs(S))&&Math.abs(X-k)<=U*Math.max(1,Math.abs(X),Math.abs(k))&&Math.abs(Y-T)<=U*Math.max(1,Math.abs(Y),Math.abs(T))&&Math.abs(Z-_)<=U*Math.max(1,Math.abs(Z),Math.abs(_))&&Math.abs(O-j)<=U*Math.max(1,Math.abs(O),Math.abs(j))&&Math.abs(W-g)<=U*Math.max(1,Math.abs(W),Math.abs(g))&&Math.abs(P-p)<=U*Math.max(1,Math.abs(P),Math.abs(p))&&Math.abs(G-F)<=U*Math.max(1,Math.abs(G),Math.abs(F))&&Math.abs($-n)<=U*Math.max(1,Math.abs($),Math.abs(n))&&Math.abs(K-i)<=U*Math.max(1,Math.abs(K),Math.abs(i))&&Math.abs(E-f)<=U*Math.max(1,Math.abs(E),Math.abs(f))}var DC=n0,kC=q0,vC=j0,wC=i0;class b{M;constructor(M){this.app=M;this.onStart&&M.onStart(this.onStart.bind(this)),this.onUpdate&&M.onUpdate(this.onUpdate.bind(this)),this.onAfterUpdate&&M.onAfterUpdate(this.onAfterUpdate.bind(this)),this.onBeforeUpdate&&M.onBeforeUpdate(this.onBeforeUpdate.bind(this))}}class dC extends b{M;el;frameTimes=[];maxFrameTimes=100;lastFrameTime=0;constructor(M,C="#telemetry"){super(M);this.app=M;if(this.el=document.querySelector(C),this.el&&location.search.includes("telemetry"))this.el.style.display="block"}insertTime(M){if(this.frameTimes.push(M),this.frameTimes.length>this.maxFrameTimes)this.frameTimes.shift()}onStart(){this.lastFrameTime=0,this.frameTimes=[],setInterval(()=>{const M=this.frameTimes.reduce((h,V)=>h+V,0)/this.frameTimes.length,C=1000/M;this.el.innerHTML=`${C.toFixed(1)} FPS (${M.toFixed(3)} ms)<br />bU: ${this.app.registry.onBeforeUpdate.length} | U: ${this.app.registry.onUpdate.length} | aU: ${this.app.registry.onAfterUpdate.length}`},1000)}onAfterUpdate(M){const C=M-this.lastFrameTime;this.insertTime(C),this.lastFrameTime=M}}
export{b as a,dC as b,f0 as c,x as d,_0 as e};