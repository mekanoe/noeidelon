import { vec4 } from "gl-matrix";

export const rgbToFloat = (
  r: number,
  g: number,
  b: number,
  a: number = 255
): vec4 => [r / 255, g / 255, b / 255, a / 255];
