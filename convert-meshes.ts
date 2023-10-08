import chalk from "chalk";
import { globSync } from "glob";

export const convertMeshes = async () => {
  const meshes = globSync("src/meshes/*.ply");

  for (const file of meshes) {
    const ply = await Bun.file(file).text();

    const [header, body] = ply.split("end_header");
    const colorSize = header.includes("red") ? 4 : 0;

    const values: number[] = [];

    for (const line of body.split("\n")) {
      // line looks like
      //  x y z r g b a u v
      // We need to convert it to
      // x y z 1 r g b a u v

      const [x, y, z, r, g, b, a, u, v] = line.split(" ");

      if (!g) {
        continue;
      }

      values.push(
        parseFloat(x),
        parseFloat(y),
        parseFloat(z),
        1,
        parseFloat(r),
        parseFloat(g)
      );

      if (colorSize > 0) {
        values.push(parseFloat(b), parseFloat(a), parseFloat(u), parseFloat(v));
      }
    }

    const outFile = file.replace(".ply", ".ts");
    const outString = `
import { Mesh } from "../renderer/mesh";

// prettier-ignore
const mesh = new Float32Array(${JSON.stringify(values, null, 2)});

export default new Mesh({ 
  mesh, 
  positionSize: 4 * 4, 
  colorSize: ${colorSize} * 4, 
  uvSize: 2 * 4,
});
`;

    await Bun.write(outFile, outString);
    console.log(chalk.yellow(`  -> ${file}...`));
  }
};
