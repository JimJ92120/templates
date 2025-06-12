const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

const dist = path.resolve(__dirname, "./dist");

module.exports = {
  name: "client",
  mode: "production",
  target: "web",
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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [/node_modules/],
      },
      {
        test: /\.(png)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: dist,
    open: false,
    port: 8080,
  },
  performance: {
    hints: false,
  },
  plugins: [new CopyPlugin([path.resolve(__dirname, "static")])],
};
