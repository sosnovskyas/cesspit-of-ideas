const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

//noinspection JSUnresolvedVariable
module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    // hot: true,
    // hotOnly: true,
    // host: "0.0.0.0",
    historyApiFallback: true
  }
};
