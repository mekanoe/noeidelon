{
  buildNpmPackage,
  nix-gitignore,
  bun,
  ...
}: 
buildNpmPackage (_final: {
  pname = "3d";
  version = "0.0.0";
  
  src = nix-gitignore.gitignoreSource [] ./.;

  npmDepsHash = "sha256-uswbwvckici7eCXnWDJhL0U/NjBaXU3nMYJ40q2tDmA=";

  nativeBuildInputs = [ bun ];

  postInstall = ''
    cp -rT html/ $out
    rm -rf $out/lib
  '';
})