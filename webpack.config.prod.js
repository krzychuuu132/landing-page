const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ImageminWebpWebpackPlugin = require("imagemin-webp-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./ts/script.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  target: "web",
  module: {
    rules: [
      {
        test: /\.scss|sass$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        type: "asset/inline",
        resourceQuery: /inline/,
      },
      {
        test: /\.jpg|png|svg$/,
        use: "file-loader",
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
        exclude: path.resolve(__dirname, "./index.html"),
      },
      {
        config: [
          {
            test: /\.(jpe?g|png)/,
            options: {
              quality: 75,
            },
          },
        ],
        overrideExtension: true,
        detailedLogs: false,
        silent: false,
        strict: true,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "landing-page",
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
    new CopyPlugin({
      patterns: [{ from: "./img", to: "img" }],
    }),
    new ImageminWebpWebpackPlugin(),
  ],
};
