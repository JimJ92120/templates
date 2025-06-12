const path = require("path");
const fs = require("fs");
const dist = path.resolve(__dirname, "./dist");

const nodeModules = {};
fs.readdirSync("node_modules")
  .filter(function (x) {
    return [".bin"].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = "commonjs " + mod;
  });

module.exports = {
  name: "server",
  mode: "production",
  target: "node",
  externals: nodeModules,
  entry: {
    index: "./src/main.ts",
  },
  output: {
    path: dist,
    filename: "[name].js",
    assetModuleFilename: "assets/[name][ext]",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [/node_modules/],
      },
    ],
  },
  // resolve: {
  //   extensions: [".tsx", ".ts"],
  // },
  devServer: {
    open: false,
    port: 8081,
  },
  performance: {
    hints: false,
  },
};
