{
  description = "JavaScript development environment for USWDS starter";

  # Flake inputs
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs"; # also valid: "nixpkgs"
  };

  # Flake outputs
  outputs = { self, nixpkgs }:
    let
      # Systems supported
      allSystems = [
        "x86_64-linux" # 64-bit Intel/AMD Linux
        "aarch64-linux" # 64-bit ARM Linux
        "x86_64-darwin" # 64-bit Intel macOS
        "aarch64-darwin" # 64-bit ARM macOS
      ];

      # Helper to provide system-specific attributes
      forAllSystems = f: nixpkgs.lib.genAttrs allSystems (system: f {
        pkgs = import nixpkgs { inherit system; };
      });
    in
    {
      # Development environment output
      devShells = forAllSystems ({ pkgs }: {
        default = pkgs.mkShell {
          # The Nix packages provided in the environment
          packages = with pkgs; [
            nodejs-18_x # Node.js 18, plus npm, npx, and corepack
          ];
        };
      });

      packages = forAllSystems ({ pkgs }: {
        default = pkgs.buildNpmPackage {
          name = "uswds-starter";

          buildInputs = with pkgs; [
            nodejs-18_x
          ];

          src = ./.;
          npmDepsHash = "sha256-3NPW6F1cOqM/KHYZL7bUJ2wBrnmQOQf0CgdXf7z2adI=";

          installPhase = ''
            mkdir $out
            npm run export
            cp -pR out/* $out/
          '';
        };
      });
    };
}
