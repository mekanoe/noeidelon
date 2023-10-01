import { unlinkSync } from "node:fs";
import { globSync } from "glob";
import indexTemplate from "./index.html.txt";
import workTemplate from "./work.html.txt";
import readmeTemplate from "./README.md.txt";

const allHtmls = globSync("html/*.html").filter(
  (file) => file !== "html/index.html"
);
for (const htmlFile of allHtmls) {
  unlinkSync(htmlFile);
}

const allWorks = globSync("html/*.js")
  .map((file) => file.replace("html/", "").replace(".js", ""))
  .sort()
  .reverse();

console.log({ allWorks });

for (const work of allWorks) {
  const html = `${workTemplate}`.replace(/##name##/g, work);

  await Bun.write(`html/${work}.html`, html);
}

const index = indexTemplate.replace(
  "<!--/INSERT/-->",
  allWorks
    .map((work) => `<li><a href="/${work}">./${work}</a></li>`)
    .join("\n      ")
);
await Bun.write("html/index.html", index);

const readme = readmeTemplate.replace(
  "<!--/INSERT/-->",
  allWorks
    .reverse()
    .map((work) => `- [./${work}](https://art.mekanoe.com/${work})`)
    .join("\n")
);
await Bun.write("README.md", readme);

console.log(
  `index.html & README.md generated. ${allWorks.length} works found.`
);
