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
    const workIndex = allWorks.findIndex((w) => w === work);
    const previous = allWorks[(workIndex as any) + 1] ?? null;
    const next = allWorks[(workIndex as any) - 1] ?? null;

    let nav = ``;
    if (previous)
      nav += `<a class="nav-left" href="/${previous}">⇠ ${previous}</a>`;
    if (next) nav += `<a class="nav-right" href="/${next}">${next} ⇢</a>`;

    const html = `${workTemplate}`
      .replace(/##name##/g, work)
      .replace(/##nav##/g, nav);

    mkdirSync(`html/${work}`, { recursive: true });
    await Bun.write(`html/${work}/index.html`, html);
    console.log(chalk.yellow(`  -> html/${work}/index.html...`));
  }

  const index = indexTemplate.replace(
    "<!--/INSERT/-->",
    allWorks
      .map((work) => `<li><a href="/${work}">./${work}</a></li>`)
      .join("\n      "),
  );
  await Bun.write("html/index.html", index);
  console.log(chalk.yellow(`  -> html/index.html...`));

  const readme = readmeTemplate.replace(
    "<!--/INSERT/-->",
    allWorks
      .reverse()
      .map((work) => `- [./${work}](https://3d.noe.sh/${work})`)
      .join("\n"),
  );
  await Bun.write("README.md", readme);
  console.log(chalk.yellow(`  -> README.md...`));
};
