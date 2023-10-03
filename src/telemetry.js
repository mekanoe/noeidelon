export class Telemetry {
  constructor(app, selector = "#telemetry") {
    this.app = app;
    this.el = document.querySelector(selector);
    if (this.el && location.search.includes("telemetry")) {
      this.el.style.display = "block";
      this.app.onAfterUpdate(() => this.onAfterUpdate());
    }

    this.frameTimes = [];
    this.maxFrameTimes = 100;
    this.lastFrameTime = 0;
  }

  insertTime(time) {
    this.frameTimes.push(time);

    if (this.frameTimes.length > this.maxFrameTimes) {
      this.frameTimes.shift();
    }
  }

  onAfterUpdate() {
    const frameTime = this.app.now() - this.lastFrameTime;
    this.insertTime(frameTime);

    const averageFrameTime =
      this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;

    const framesPerSecond = 1000 / averageFrameTime;

    this.el.innerHTML = `
      ${framesPerSecond.toFixed(1)} FPS (${averageFrameTime.toFixed(
        3
      )} ms)<br />
      bU: ${this.app.registry.onBeforeUpdate.length} | U: ${
        this.app.registry.onUpdate.length
      } | aU: ${this.app.registry.onAfterUpdate.length}
    `;

    this.lastFrameTime = this.app.now();
  }
}
