import { unlinkSync } from "fs";
import { globSync } from "glob";

const allHtmls = globSync("html/*.html").filter(
  (file) => file !== "html/index.html"
);
for (const htmlFile of allHtmls) {
  unlinkSync(htmlFile);
}

const indexTemplate = await Bun.file("generators/index.html.template").text();
const workTemplate = await Bun.file("generators/work.html.template").text();

const allWorks = globSync("html/*.js")
  .map((file) => file.replace("html/", "").replace(".js", ""))
  .filter((work) => work !== "platform");

console.log({ allWorks });

for (const work of allWorks) {
  const html = `${workTemplate}`.replace(/##name##/g, work);

  await Bun.write(`html/${work}.html`, html);
}

const index = indexTemplate.replace(
  "<!--/INSERT/-->",
  allWorks.map((work) => `<li><a href="/${work}">./${work}</a></li>`).join("\n")
);

await Bun.write("html/index.html", index);

console.log(`index.html generated. ${allWorks.length} works found.`);
