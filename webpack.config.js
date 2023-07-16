const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  devtool: "eval-source-map",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new ESLintWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Shape Tracker",
      template: "./src/index.html",
      inject: "body",
    }),
  ],
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
