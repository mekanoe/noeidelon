import { NetworkObject } from "./network-object";

export class PlyObject extends NetworkObject {
  constructor(app) {
    super(app);
    this.register();
  }

  async handleModelData(response) {
    const raw = await response.text();

    const config = {
      vertex: {
        count: 0,
        properties: [],
      },
      face: {
        count: 0,
        properties: [],
      },
    };

    const data = {
      vertexes: [],
      faces: [],
    };

    let phase = "header"; // "vertex", "face", ...
    let currentField = null;

    const headerHandlers = {
      ply: () => {},
      format: (ascii, version) => {
        if (ascii !== "ascii") {
          throw new Error("Only ascii ply files are supported");
        }

        if (version !== "1.0") {
          throw new Error("Only version 1.0 ply files are supported");
        }
      },
      comment: () => {},
      element: (which, value) => {
        currentField = which;
        if (which === "vertex") {
          config.vertex.count = Number(value);
        } else if (which === "face") {
          config.face.count = Number(value);
        }
      },
      property: (what, ...data) => {
        if (what === "float") {
          config[currentField].properties.push({
            name: data[1],
            type: "float",
          });
        } else if (what === "list") {
          config[currentField].properties.push({
            name: data[2],
            type: "list",
            indexType: data[0],
            valueType: data[1],
          });
        }
      },
      end_header: () => {
        phase = "vertex";
      },
    };

    const lines = raw.split("\n");
    for (const line of lines) {
      const parts = line.split(" ");

      if (phase === "header") {
        const handler = headerHandlers[parts[0]];
        if (handler) {
          handler(...parts.slice(1));
        }

        continue;
      }

      if (phase === "vertex") {
        const vertex = {};
        for (let i = 0; i < config.vertex.properties.length; i++) {
          const property = config.vertex.properties[i];
          if (property.type === "float") {
            vertex[property.name] = Number(parts[i]);
          }
        }
        data.vertexes.push(vertex);

        if (data.vertexes.length === config.vertex.count) {
          phase = "face";
        }

        continue;
      }

      if (phase === "face") {
        const face = [];
        for (let i = 1; i < parts.length; i++) {
          face.push(Number(parts[i]));
        }
        data.faces.push(face);

        if (data.faces.length === config.face.count) {
          break;
        }

        continue;
      }
    }
  }
}
