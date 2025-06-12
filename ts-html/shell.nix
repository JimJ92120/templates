with import <nixpkgs> {};

stdenv.mkDerivation {
  name = "ts-html";

  buildInputs = [
    nodejs
  ];

  shellHook = ''
    export PATH="$PWD/node_modules/.bin/:$PATH"
  '';
}
