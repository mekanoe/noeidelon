import chalk from "chalk";
import { generate } from "./generate";
import { globSync } from "glob";
import { rmSync, mkdirSync, cpSync } from "node:fs";
import { convertMeshes } from "./convert-meshes";

console.log(chalk.green`>> Cleaing up ./html ...`);
rmSync("html", { recursive: true, force: true });
mkdirSync("html");

const works = globSync("src/*/main.ts");

console.log(chalk.green`>> Building ...`);
console.log(chalk.yellow(`   Found ${works.length} works.`));

await Bun.build({
  entrypoints: works,
  outdir: "html",
  splitting: true,
  loader: {
    ".glsl": "text",
    ".wgsl": "text",
  },
  minify: true,
});

console.log(chalk.green`>> Generating HTML and Markdown ...`);
await generate(works);

console.log(chalk.green`>> Copying public files ...`);
const publics = globSync("src/public/*");
for (const file of publics) {
  const dest = file.replace("src/public/", "html/");
  cpSync(file, dest);
  console.log(chalk.yellow(`  -> ${dest}...`));
}

console.log(chalk.green`>> Convert meshes ...`);
await convertMeshes();
