const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [{ loader: "babel-loader" }, { loader: "ts-loader" }],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [new CleanWebpackPlugin()],
  output: {
    filename: "index.js",
    library: {
      name: "StorageDB",
      type: "umd",
      export: "default",
      umdNamedDefine: true,
    },
    path: path.resolve(__dirname, "lib"),
  },
};
