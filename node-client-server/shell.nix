with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "node-client-server";

  buildInputs = [
    nodejs
  ];

  shellHook = ''
    export PATH="$PWD/node_modules/.bin/:$PATH"
  '';
}
