import { WebGPUApp } from "./webgpu";

export abstract class Behavior {
  constructor(public app: WebGPUApp) {
    this.onBeforeUpdate && app.onBeforeUpdate(this.onBeforeUpdate.bind(this));
    this.onUpdate && app.onUpdate(this.onUpdate.bind(this));
    this.onAfterUpdate && app.onAfterUpdate(this.onAfterUpdate.bind(this));
    this.onStart && app.onStart(this.onStart.bind(this));
  }

  onStart(time: number) {}
  onBeforeUpdate(time: number) {}
  onUpdate(time: number) {}
  onAfterUpdate(time: number) {}
}
