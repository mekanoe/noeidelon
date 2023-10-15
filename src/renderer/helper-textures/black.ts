import { Texture } from "../texture";
import { WebGLApp } from "../webgl";
import black from "./black.png";

export const createBlackTexture = (app: WebGLApp) => new Texture(app, black);
