import { WebGLApp } from "./webgl";

export abstract class Behavior {
  onStart?(...args: any[]): void;
  onBeforeUpdate?(...args: any[]): void;
  onUpdate?(...args: any[]): void;
  onAfterUpdate?(...args: any[]): void;
  constructor(public app: WebGLApp) {
    this.onStart && app.onStart(this.onStart.bind(this));
    this.onUpdate && app.onUpdate(this.onUpdate.bind(this));
    this.onAfterUpdate && app.onAfterUpdate(this.onAfterUpdate.bind(this));
    this.onBeforeUpdate && app.onBeforeUpdate(this.onBeforeUpdate.bind(this));
  }
}
