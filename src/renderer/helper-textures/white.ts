import { Texture } from "../texture";
import { WebGLApp } from "../webgl";
import white from "./white.png";

export const createWhiteTexture = (app: WebGLApp) => new Texture(app, white);
