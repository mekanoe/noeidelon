import indexTemplate from "./templates/index.html.txt";
import workTemplate from "./templates/work.html.txt";
import readmeTemplate from "./templates/README.md.txt";
import chalk from "chalk";
import { mkdirSync } from "node:fs";

export const generate = async (works: string[]) => {
  const allWorks = works
    .map((file) => file.replace("src/", "").replace("/main.ts", ""))
    .sort()
    .reverse();

  for (const work of allWorks) {
    const html = `${workTemplate}`.replace(/##name##/g, work);

    mkdirSync(`html/${work}`, { recursive: true });
    await Bun.write(`html/${work}/index.html`, html);
    console.log(chalk.yellow(`  -> html/${work}/index.html...`));
  }

  const index = indexTemplate.replace(
    "<!--/INSERT/-->",
    allWorks
      .map((work) => `<li><a href="/${work}">./${work}</a></li>`)
      .join("\n      ")
  );
  await Bun.write("html/index.html", index);
  console.log(chalk.yellow(`  -> html/index.html...`));

  const readme = readmeTemplate.replace(
    "<!--/INSERT/-->",
    allWorks
      .reverse()
      .map((work) => `- [./${work}](https://art.mekanoe.com/${work})`)
      .join("\n")
  );
  await Bun.write("README.md", readme);
  console.log(chalk.yellow(`  -> README.md...`));
};