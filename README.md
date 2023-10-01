# noeidelon

Foxes dream of electron beams.

**noe** + **eidelon** _(n. a thing, an image, a reflection)_

https://art.mekanoe.com

## Artworks

- [./001-platform-provenance](https://art.mekanoe.com/001-platform-provenance)

## Development

`nix` to install bun... or do it globally.

`bun run .` to generate HTMLs

`bun serve` to serve them locally

### Infrastructure

- The "generator" does

  - Generates a work list from .js files within `html`
  - Creates this README.md file
  - Creates the index.html file
  - Creates individual HTML files for each work

- The platform supplies
  - Shader types
  - Primitive objects
  - A canvas to draw on
  - WebGL hooks
  - Helpers, etc

## License

Code and images are licensed under the AGPLv3 license. See [LICENSE](./LICENSE) for more information.
