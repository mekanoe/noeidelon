// src/renderer/texture.ts
class Texture {
  app;
  url;
  config;
  texture = null;
  width = 0;
  height = 0;
  constructor(app, url, config = {}) {
    this.app = app;
    this.url = url;
    this.config = config;
  }
  setImage(data, width, height) {
    this.texture = data;
    this.width = width;
    this.height = height;
    return this;
  }
  async loadImage() {
    if (this.url === "manual") {
      if (this.texture === null) {
        throw new Error("manual specified, but texture was not ready...");
      }
      return;
    }
    if (this.texture !== null) {
      return;
    }
    this.app.telemetry?.addTextures(-1);
    this.app.loading("Fetching textures...");
    const image = new Image;
    return new Promise((resolve, reject) => {
      image.onload = async () => {
        this.texture = await createImageBitmap(image, {
          imageOrientation: "flipY"
        });
        this.width = this.texture.width;
        this.height = this.texture.height;
        this.app.telemetry?.addTextures(2);
        resolve(undefined);
      };
      image.onerror = (e) => {
        this.app.telemetry?.addTextures(1);
        reject(new Error(`texture load of ${this.url} failed: ${e.toString()}`));
      };
      image.src = this.url;
    });
  }
}

// src/common-shaders/basic-vertex-rounding.vert
var basic_vertex_rounding_default = `#version 300 es
uniform mat4 u_view;
uniform mat4 u_projection;
uniform mat4 u_object_to_world;
uniform mat4 u_object_to_world_inv;
uniform vec3 u_light_0;
// uniform vec4 u_light_0_color;
// uniform float u_time;
// uniform vec4 u_albedo;

in vec4 a_vertex;
in vec2 a_uv0;
in vec3 a_normal;
in vec4 a_vertex_color;

out vec2 uv0;
out vec3 normal;
out vec4 vertex_color;
out vec3 light_pos;

#define ROUNDING_FACTOR 230.0f

void main() {
  mat4 worldInv = inverse(u_view);
  mat4 MVW = u_projection * u_view * u_object_to_world;
  vec4 realPosition = MVW * a_vertex;
  realPosition.xyz = round(vec3(realPosition.xyz * ROUNDING_FACTOR)) / ROUNDING_FACTOR;
  gl_Position = realPosition;

  uv0 = a_uv0;
  normal = normalize(mat3(worldInv) * a_normal);
  vertex_color = a_vertex_color;
  light_pos = normalize(mat3(u_object_to_world_inv) * u_light_0);

}`;

export { Texture, basic_vertex_rounding_default };
