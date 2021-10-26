const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "none",
  entry: "./src/index.ts",
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [{ loader: "ts-loader" }],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts"],
  },
  plugins: [new CleanWebpackPlugin()],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "lib"),
  },
};
