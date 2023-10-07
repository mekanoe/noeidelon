class h{n;el;frameTimes=[];maxFrameTimes=100;lastFrameTime=0;constructor(n,u="#telemetry"){this.app=n;if(this.el=document.querySelector(u),this.el&&location.search.includes("telemetry"))this.el.style.display="block",this.app.onAfterUpdate(()=>this.onAfterUpdate())}insertTime(n){if(this.frameTimes.push(n),this.frameTimes.length>this.maxFrameTimes)this.frameTimes.shift()}onAfterUpdate(){const n=this.app.now()-this.lastFrameTime;this.insertTime(n);const u=this.frameTimes.reduce((w,d)=>w+d,0)/this.frameTimes.length,p=1000/u;this.el.innerHTML=`
      ${p.toFixed(1)} FPS (${u.toFixed(3)} ms)<br />
      bU: ${this.app.registry.onBeforeUpdate.length} | U: ${this.app.registry.onUpdate.length} | aU: ${this.app.registry.onAfterUpdate.length}
    `,this.lastFrameTime=this.app.now()}}
export{h as a};
