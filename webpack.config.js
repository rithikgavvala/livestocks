//webpack.config.js
// var path = require('path');
// var webpack = require('webpack');
//
// module.exports = {
//     entry: [ './client/index.js','webpack-hot-middleware/client'],
//     output: {
//         path: path.join(__dirname, 'client'),
//         filename: 'bundle.js'
//     },
//     module: {
//         rules: [{
//             test: /.jsx?$/,
//             loader: 'babel-loader',
//             exclude: /node_modules/,
//             query: {
//                 presets: ['@babel/env', '@babel/react']
//             }
//         },
//             {
//                 test: /\.css$/,
//                 loader: "style-loader!css-loader"
//             }]
//     },
//     plugins: [
//         // OccurrenceOrderPlugin is needed for webpack 1.x only
//         new webpack.optimize.OccurrenceOrderPlugin(),
//         new webpack.HotModuleReplacementPlugin(),
//     ]
// }

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return {
        mode,
        entry: "./client/index.js",
        devServer: {
            hot: true,
            open: true
        },
        output: {
            publicPath: "/",
            path: path.resolve(__dirname, "client"),
            filename: "bundle.js"
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    include: /src/
                },
                {
                    test: /\.(js|jsx)$/,
                    use: 'react-hot-loader/webpack',
                    include: /node_modules/
                },
                {
                    test: /\.jpe?g|png$/,
                    exclude: /node_modules/,
                    loader: ["url-loader", "file-loader"]
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                test: /\.css$/,
                loader: "style-loader!css-loader"
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./client/index.html"
            }),
            new webpack.HotModuleReplacementPlugin()

        ]

    }
};
