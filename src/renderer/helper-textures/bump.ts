import { Texture } from "../texture";
import { WebGLApp } from "../webgl";
import bump from "./bump.png";

export const createBumpTexture = (app: WebGLApp) => new Texture(app, bump);
