class q{constructor(h,y="#telemetry"){if(this.app=h,this.el=document.querySelector(y),this.el&&location.search.includes("telemetry"))this.el.style.display="block",this.app.onAfterUpdate(()=>this.onAfterUpdate());this.frameTimes=[],this.maxFrameTimes=100,this.lastFrameTime=0}insertTime(h){if(this.frameTimes.push(h),this.frameTimes.length>this.maxFrameTimes)this.frameTimes.shift()}onAfterUpdate(){const h=this.app.now()-this.lastFrameTime;this.insertTime(h);const y=this.frameTimes.reduce((j,k)=>j+k,0)/this.frameTimes.length,f=1000/y;this.el.innerHTML=`
      ${f.toFixed(1)} FPS (${y.toFixed(3)} ms)<br />
      bU: ${this.app.registry.onBeforeUpdate.length} | U: ${this.app.registry.onUpdate.length} | aU: ${this.app.registry.onAfterUpdate.length}
    `,this.lastFrameTime=this.app.now()}}
export{q as a};
