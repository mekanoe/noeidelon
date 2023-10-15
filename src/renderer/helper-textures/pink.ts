import { Texture } from "../texture";
import { WebGLApp } from "../webgl";
import pink from "./pink.png";

export const createPinkTexture = (app: WebGLApp) => new Texture(app, pink);
