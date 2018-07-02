var webpack = require("webpack");
var path = require("path");

module.exports = {
  context: __dirname + "/src",
  entry: "./js/index.js",
  mode: "none",
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "build")
  },
  output: {
    path: __dirname + "/src/",
    filename: "bundle.js"
  }
};
