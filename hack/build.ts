import chalk from "chalk";
import { generate } from "./generate";
import { globSync } from "glob";
import { rmSync, mkdirSync, cpSync } from "node:fs";
import { convertMeshes } from "./convert-meshes";
import glslPlugin from "./glsl-plugin";

console.log(chalk.green`>> Cleaing up ./html ...`);
rmSync("html", { recursive: true, force: true });
mkdirSync("html");

const works = globSync("src/*/main.ts");

console.log(chalk.green`>> Convert meshes ...`);
await convertMeshes();

console.log(chalk.green`>> Building ...`);
console.log(chalk.yellow(`   Found ${works.length} works.`));
console.log(chalk.yellow(`   Running Bun.build()`));

const results = await Bun.build({
  entrypoints: works,
  outdir: "html",
  splitting: true,
  loader: {
    ".glsl": "text",
    ".wgsl": "text",
    ".vert": "text",
    ".frag": "text",
  },
  minify: process.env.MINIFY === "false" ? false : true,
  plugins: [glslPlugin],
});

if (!results.success) {
  console.error(chalk.red("XX Bun.build() Failed."));
  console.error(chalk.red(JSON.stringify(results.logs, null, 2)));
  process.exit(1);
}

console.log(chalk.green`>> Generating HTML and Markdown ...`);
await generate(works);

console.log(chalk.green`>> Copying public files ...`);
const { stdout, stderr, exitCode } = Bun.spawnSync([
  "sh",
  "-c",
  "cp -r src/public/* html/",
]);
