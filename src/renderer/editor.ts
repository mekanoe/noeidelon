import { Behavior } from "./behavior";
import { Transform } from "./transform";

type PaneConfig = {
  name: string;
  type: "transform" | "float" | "vec3" | "color";
  onChange: Function;
};

export class Editor extends Behavior {
  private panes: PaneConfig[] = [];
  addTransform(name: string, onChange: (newTransform: Transform) => void) {
    this.panes.push({ name, type: "transform", onChange });
  }
}
