{
  description = "https://3d.noe.sh";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    toys = {
      url = "git+https://git.dolly.sh/doll/toys";
      inputs.nixpkgs.follows = "nixpkgs";
      inputs.flake-utils.follows = "flake-utils";
    };
  };

  nixConfig = {
    extra-substituters = [
      "https://nix-community.cachix.org"
      "https://subby.blood.pet"
    ];

    extra-trusted-public-keys = [
      "nix-community.cachix.org-1:mB9FSh9qf2dCimDSUo8Zy7bkq5CX+/rkCWyvRCYg3Fs="
      "subby.blood.pet:1xqRlAxaTPJi/URlleX0ggGECwKzJbX+EVu6xY54wrc="
    ];
  };

  outputs = {
    self,
    nixpkgs,
    flake-utils,
    ...
  } @ inputs:
    flake-utils.lib.eachDefaultSystem (
      system: let
        pkgs = import nixpkgs {
          inherit system;
          overlays = [
            inputs.toys.overlays.default
          ];
        };
      in rec {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodePackages.prettier
            nodejs
            bun
            alejandra
          ];
        };

        apps = {
          default = {
            type = "app";
            program = pkgs.lib.getExe (pkgs.writeShellApplication {
              name = "serve";
              text = "${pkgs.lib.getExe pkgs.python3} -m http.server -d ${packages.default}";
            });
          };

          generate = {
            type = "app";
            program = pkgs.lib.getExe (pkgs.writeShellApplication {
              name = "serve";
              text = "${pkgs.lib.getExe pkgs.bun} run .";
            });
          };

          deploy = pkgs.mkDeployStaticSiteApp {
            name = "3d.noe.sh";
            package = packages.default;
          };
        };

        packages = {
          default = pkgs.callPackage ./default.nix {};
        };
      }
    );
}
