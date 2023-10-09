import glsl from "esbuild-plugin-glsl";

export default glsl({
  minify: process.env.MINIFY === "false" ? false : true,
});
