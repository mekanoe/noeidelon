class j{p;el;frameTimes=[];maxFrameTimes=100;lastFrameTime=0;constructor(p,x="#telemetry"){this.app=p;if(this.el=document.querySelector(x),this.el&&location.search.includes("telemetry"))this.el.style.display="block",this.app.onAfterUpdate((s)=>this.onAfterUpdate(s)),this.app.onStart(()=>this.onStart())}insertTime(p){if(this.frameTimes.push(p),this.frameTimes.length>this.maxFrameTimes)this.frameTimes.shift()}onStart(){this.lastFrameTime=0,this.frameTimes=[]}onAfterUpdate(p){const x=p-this.lastFrameTime;this.insertTime(x);const s=this.frameTimes.reduce((d,h)=>d+h,0)/this.frameTimes.length,$=1000/s;this.el.innerHTML=`
      ${$.toFixed(1)} FPS (${s.toFixed(3)} ms)<br />
      bU: ${this.app.registry.onBeforeUpdate.length} | U: ${this.app.registry.onUpdate.length} | aU: ${this.app.registry.onAfterUpdate.length}
    `,this.lastFrameTime=p}}
export{j as a};
