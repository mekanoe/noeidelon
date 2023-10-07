export class Telemetry {
  public el: HTMLElement;
  public frameTimes: number[] = [];
  public maxFrameTimes: number = 100;
  public lastFrameTime: number = 0;
  constructor(
    public app: any,
    selector = "#telemetry"
  ) {
    this.el = document.querySelector(selector) as HTMLElement;
    if (this.el && location.search.includes("telemetry")) {
      this.el.style.display = "block";
      this.app.onAfterUpdate(() => this.onAfterUpdate());
    }
  }

  insertTime(time: number) {
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