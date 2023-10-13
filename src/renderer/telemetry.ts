import { Behavior } from "./behavior";
import { WebGLApp } from "./webgl";

export class Telemetry extends Behavior {
  public el: HTMLElement;
  public frameTimes: number[] = [];
  public maxFrameTimes: number = 100;
  public lastFrameTime: number = 0;
  public activeTriangles: number = 0;
  public activeVertexes: number = 0;
  public activeRenderers: number = 0;

  constructor(
    public app: WebGLApp,
    selector = "#telemetry"
  ) {
    super(app);
    this.el = document.querySelector(selector) as HTMLElement;
    if (this.el && location.search.includes("telemetry")) {
      this.el.style.display = "block";
    }
  }

  insertTime(time: number) {
    this.frameTimes.push(time);

    if (this.frameTimes.length > this.maxFrameTimes) {
      this.frameTimes.shift();
    }
  }

  async onStart() {
    this.lastFrameTime = 0;
    this.frameTimes = [];

    // Send this to the end of onStart execution
    setTimeout(() => this.setText(), 0);

    setInterval(() => {
      this.setText();
    }, 1001);
  }

  setText() {
    const averageFrameTime =
      this.frameTimes.reduce((a, b) => a + b, 0) / this.frameTimes.length;

    const framesPerSecond = 1000 / averageFrameTime;

    this.el.innerHTML = `${framesPerSecond.toFixed(
      1
    )} FPS (${averageFrameTime.toFixed(3)} ms)<br />update :: b: ${
      this.app.registry.onBeforeUpdate.length
    } | u: ${this.app.registry.onUpdate.length} | a: ${
      this.app.registry.onAfterUpdate.length
    } | d: ${this.app.registry.onDraw.length}<br />render :: mr: ${
      this.activeRenderers
    } | v: ${this.activeVertexes} | t: ${this.activeTriangles}`;
  }

  onAfterUpdate(time: number) {
    const frameTime = time - this.lastFrameTime;
    this.insertTime(frameTime);
    this.lastFrameTime = time;
  }

  addTriangles(n: number) {
    this.activeTriangles += n;
  }

  addVertexes(n: number) {
    this.activeVertexes += n;
  }

  addRenderers(n: number) {
    this.activeRenderers += n;
  }
}
