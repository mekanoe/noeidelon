# noeidelon

Foxes dream of electron beams.

**noe** + **eidelon** _(n. a thing, an image, a reflection)_

https://3d.noe.sh

## Artworks

- [./001-platform-provenance](https://art.mekanoe.com/001-platform-provenance)
- [./002-webgl-engine](https://art.mekanoe.com/002-webgl-engine)
- [./003-scene](https://art.mekanoe.com/003-scene)
- [./004-a-new-leaf](https://art.mekanoe.com/004-a-new-leaf)
- [./005-thoughtform-hidenoe](https://art.mekanoe.com/005-thoughtform-hidenoe)
- [./006-the-edge](https://art.mekanoe.com/006-the-edge)
- [./006a-ssfx-experiment](https://art.mekanoe.com/006a-ssfx-experiment)
- [./007-divinity](https://art.mekanoe.com/007-divinity)

## Development

`nix` to install bun... or do it globally.

`bun run .` to generate HTMLs

`bun serve` to serve them locally

`bun dev` if you're developing the templates for auto-generation.

### Infrastructure

- **Output generation**

  - Bun renders TypeScript and GLSL to html/
  - src/public/ is copied to html/
    - This doubles as an "archival" system to preserve scuffedness
  - .ply files are converted to JS typed arrays and Mesh objects
  - .html files (and README.md) are generated from rendered TypeScript main.ts files.

- **Platform**

  - WebGLApp provides render loop, canvas, and other stuff
  - Behavior provides automatic registration of WebGLApp events (like Unity MonoBehaviors)
  - Shader provides GLSL shader tooling
  - Mesh is a DTO with vertex position, color, UVs, and faces
  - MeshRenderer sends WebGL instructions for rendering a Mesh object with a Shader object.
  - Renderable is a container of a Transform and Renderer (like a Unity GameObject)
  - Transform is a tuplet of a position vec3, rotation quat, and scale vec3; to be used anywhere needed.
  - Scene is a group of Renderables

## License

Code and images are licensed under the AGPLv3 license. See [LICENSE](./LICENSE) for more information.
