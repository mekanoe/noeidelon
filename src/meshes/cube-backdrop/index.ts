import { Transform, etoq, v3 } from "../../renderer/transform";
import cubeBackdrop from "./cube-backdrop";

export const defaultTransform = new Transform(v3(0), etoq([0, -45, 0]), v3(20));

export { cubeBackdrop };
