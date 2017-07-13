const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const path = require("path")

module.exports = {
    entry: {
        app: path.join(__dirname, "src/index.js")
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    resolve: {
        modules: ["src", "node_modules"]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true,
        port: "3000",
        openPage: ""
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/views/index.html")
        }),
        new webpack.DefinePlugin({
            "process.env.BROWSER": JSON.stringify(true),
            "process.env.NODE_ENV": JSON.stringify("development")
        })
    ]
}
