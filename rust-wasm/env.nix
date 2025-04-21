# https://nixos.wiki/wiki/Rust
with import <nixpkgs> {};

let
  # overrides = (builtins.fromTOML (builtins.readFile ./lib/rust-toolchain.toml));
  libPath = with pkgs; lib.makeLibraryPath [
    # 
  ];

  rustVersion = "latest";
  
  rust_overlay = import (builtins.fetchTarball "https://github.com/oxalica/rust-overlay/archive/master.tar.gz");
  pkgs = import <nixpkgs> { overlays = [ rust_overlay ]; };
  rust = pkgs.rust-bin.stable.${rustVersion}.default.override {
    extensions = [
      "rust-src" # for rust-analyzer
      "rust-analyzer"
    ];
  };
in
stdenv.mkDerivation {
  name = "node";

  buildInputs = with pkgs; [
    clang
    llvmPackages.bintools
    #
    rust
    rustc
    cargo
    rustup # to run $rustup update stable
    #
    wasm-pack
    #
    nodejs
    yarn
  ];

  # RUSTC_VERSION = overrides.toolchain.channel;
  LIBCLANG_PATH = pkgs.lib.makeLibraryPath [ pkgs.llvmPackages_latest.libclang.lib ];
  shellHook = ''
    export PATH=$PATH:''${CARGO_HOME:-~/.cargo}/bin
    export PATH=$PATH:''${RUSTUP_HOME:-~/.rustup}/toolchains/$RUSTC_VERSION-x86_64-unknown-linux-gnu/bin/
    '';
  RUSTFLAGS = (builtins.map (a: ''-L ${a}/lib'') [
    # add libraries here (e.g. pkgs.libvmi)
  ]);
  LD_LIBRARY_PATH = libPath;
  BINDGEN_EXTRA_CLANG_ARGS =
  (builtins.map (a: ''-I"${a}/include"'') [
    pkgs.glibc.dev
  ])
  ++ [
    ''-I"${pkgs.llvmPackages_latest.libclang.lib}/lib/clang/${pkgs.llvmPackages_latest.libclang.version}/include"''
    ''-I"${pkgs.glib.dev}/include/glib-2.0"''
    ''-I${pkgs.glib.out}/lib/glib-2.0/include/''
  ];

  # https://discourse.nixos.org/t/help-understanding-error-compiling-rust-to-wasm-in-nixos/27619/4
  CARGO_TARGET_WASM32_UNKNOWN_UNKNOWN_LINKER = "lld";
}
