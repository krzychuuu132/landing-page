const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    mode: "production",
    entry: "./js/script.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    target: "web",
    module: {
        rules: [{
                test: /\.scss|sass$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.svg$/,
                type: "asset/inline",
                resourceQuery: /inline/,
            },
            {
                test: /\.jpg|png|svg$/,
                use: "file-loader"
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }],
                exclude: path.resolve(__dirname, './index.html')
            },
        ],
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
            patterns: [
                { from: "./images", to: "img" }
            ],
        }),
    ],
};