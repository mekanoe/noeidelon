import chalk from "chalk";
import { globSync } from "glob";

const w = 1;

type Vertex = {
  position: {
    x: number;
    y: number;
    z: number;
  };
  color?: {
    r: number;
    g: number;
    b: number;
    a: number;
  };
  uv?: {
    u: number;
    v: number;
  };
  normal?: {
    nx: number;
    ny: number;
    nz: number;
  };
};

type Face = {
  a: number;
  b: number;
  c: number;
};

type Triangle = {
  a: Vertex;
  b: Vertex;
  c: Vertex;
};

// const vertToArray = ({ x, y, z, w, r, g, b, a, u, v }: Vertex): number[] => {
//   if (!r) return [x, y, z, u, v];
//   else return [x, y, z, r, g as number, b as number, a as number, u, v];
// };

// const triangleToArray = (t: Triangle): number[] => [
//   ...vertToArray(t.a),
//   ...vertToArray(t.b),
//   ...vertToArray(t.c),
// ];

export const convertMeshes = async () => {
  const meshes = globSync("src/meshes/*.ply");

  for (const file of meshes) {
    const ply = await Bun.file(file).text();

    const [header, body] = ply.split("end_header");

    const propertyList: [string, "float" | "uchar"][] = [];
    const vertexConfig = {
      colors: false,
      uvs: false,
      normals: false,
    };
    const headerLines = header.split("\n");

    for (const property of headerLines.filter((header) =>
      header.startsWith("property")
    )) {
      const [, propType, name] = property.split(" ");

      if (propType === "list") {
        continue;
      }

      propertyList.push([name, propType as any]);

      switch (name) {
        case "red":
        case "green":
        case "blue":
        case "alpha":
          vertexConfig.colors = true;
          break;
        case "nx":
        case "ny":
        case "nz":
          vertexConfig.normals = true;
          break;
        case "s":
        case "t":
          vertexConfig.uvs = true;
          break;
      }
    }

    const vertexCount = Number(
      headerLines
        .find((header) => header.startsWith("element vertex"))
        ?.replace("element vertex ", "")
    );

    if (!vertexCount) {
      throw new Error("couldn't get vertex count...");
    }

    const vertexes: Vertex[] = [];
    const faces: Face[] = [];

    for (const line of body.split("\n")) {
      const components = line.split(" ");

      if (!components || !components[0]) {
        continue;
      }

      // do we only have 4 components?
      if (components[0] === "3" || components.length === 4) {
        const [, a, b, c] = components;

        // We do??!?! 🥺👉👈
        faces.push({ a: Number(a), b: Number(b), c: Number(c) });

        continue;
      }

      const vertex: Required<Vertex> = {
        position: {
          x: -1,
          y: -1,
          z: -1,
        },
        color: {
          r: 0,
          g: 0,
          b: 0,
          a: 255,
        },
        normal: {
          nx: -1,
          ny: -1,
          nz: -1,
        },
        uv: {
          u: -1,
          v: -1,
        },
      };

      for (const idx in components) {
        const component = components[idx];
        const [propName, propType] = propertyList[idx];

        const p = parser[propType] ?? parseFloat;

        switch (propName) {
          case "x":
            vertex.position.x = p(component);
            break;
          case "y":
            vertex.position.y = p(component);
            break;
          case "z":
            vertex.position.z = p(component);
          case "s":
            vertex.uv.u = p(component);
            break;
          case "t":
            vertex.uv.v = p(component);
            break;
          case "red":
            vertex.color.r = p(component);
            break;
          case "green":
            vertex.color.g = p(component);
            break;
          case "blue":
            vertex.color.b = p(component);
            break;
          case "nx":
            vertex.normal.nx = p(component);
            break;
          case "ny":
            vertex.normal.ny = p(component);
            break;
          case "nz":
            vertex.normal.nz = p(component);
            break;
        }
      }

      vertexes.push(vertex);
    }

    const positions: number[] = vertexes.flatMap((v) => [
      v.position.x,
      v.position.y,
      v.position.z,
    ]);
    const normals: number[] = vertexConfig.normals
      ? vertexes.flatMap((v: any) => [v.normal.nx, v.normal.ny, v.normal.nz])
      : [];
    const colors: number[] = vertexConfig.colors
      ? vertexes.flatMap((v: any) => [
          v.color.r,
          v.color.g,
          v.color.b,
          v.color.a,
        ])
      : [];
    const uvs: number[] = vertexConfig.uvs
      ? vertexes.flatMap((v: any) => [v.uv.u, v.uv.v])
      : [];

    const facesArray: number[] = faces.flatMap((f) => [f.a, f.b, f.c]);

    const outFile = file.replace(".ply", ".ts");
    const outString = `
import { Mesh } from "../renderer/mesh";

// prettier-ignore
const positions = new Float32Array(${JSON.stringify(positions)});

// prettier-ignore
const colors = ${
      vertexConfig.colors ? `new Uint8Array(${JSON.stringify(colors)})` : "null"
    };

// prettier-ignore
const uvs = ${
      vertexConfig.uvs ? `new Float32Array(${JSON.stringify(uvs)})` : "null"
    };

    
// prettier-ignore
const normals = ${
      vertexConfig.normals
        ? `new Float32Array(${JSON.stringify(normals)})`
        : "null"
    };
    
// prettier-ignore
const faces = new Uint32Array(${JSON.stringify(facesArray)});

export default new Mesh({
  colors,
  faces,
  name: ${JSON.stringify(file)},
  normals,
  positions,
  uvs,
  vertexCount: ${vertexCount}
});
`;

    await Bun.write(outFile, outString);
    console.log(chalk.yellow(`  -> ${file}...`));
  }
};

const parser = {
  float: (x: string) => parseFloat(x),
  uchar: (x: string) => Number(x),
};
