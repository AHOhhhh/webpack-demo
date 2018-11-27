const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ENTRY_PATH = path.resolve(__dirname, "src/index.js");
const DIST_PATH = path.resolve(__dirname, "dist");
module.exports = {
  mode: "development",
  entry: {
    polyfill: "babel-polyfill",
    main: ENTRY_PATH
  },
  output: {
    filename: "[name].[hash:8].js",
    path: DIST_PATH
  },
  resolve: {
    extensions: [".js"],
    modules: ["node_modules"]
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: [DIST_PATH],
    hot: true,
    inline: true,
    open: true,
    host: "localhost",
    port: "8000"
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: /node_modules/
    }]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new CleanWebpackPlugin(["dist"]),
    new webpack.HotModuleReplacementPlugin()
  ]

};
