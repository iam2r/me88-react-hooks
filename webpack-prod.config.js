const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: "production",
    entry: {
        index: "./page/home/index.tsx",
        register: "./page/register/index.tsx",
        download: "./page/download/index.tsx",
        casino: "./page/casino/index.tsx",
        slots: "./page/slots/index.tsx",
        promos: "./page/promos/index.tsx",
        member: "./page/member/index.tsx",
        wap: "./page/wap/index.tsx"
    },
    output: {
        path: __dirname + "/dist",
        filename: "js/[name].[hash:8].js",
        
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    warnings: false,
                    output: {
                        beautify: false,
                        comments: false
                    },
                    compress: {
                        drop_console:  true,
                        drop_debugger: true
                    }
                }
            })
        ]
    },

    // devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            'root': path.resolve(__dirname, "./"),
            'assets': path.resolve(__dirname, "./assets")
        }
    },



    module: {
        rules: [
            { test: /\.tsx?$/, use:  [
                "babel-loader",
                {
                    loader: "ts-loader",
                    options: {
                        transpileOnly: true,
                        happyPackMode: true
                    }
                }
            ]},
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader',
            'postcss-loader','sass-loader'], },
            {
                test: /\.(jpg|png|jpeg|svg|woff)$/,
                type: "javascript/auto",
                use: {
                    loader: "file-loader",
                    options: {
                        emitFile: false,
                        name(p) {
                            p = p.replace(/\\/g, '/');
                            return "." + p.substr(p.indexOf("/assets"));
                        }
                    }
                }
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ['dist/*']
        }),
        new CopyWebpackPlugin([
            {
                from: path.join(__dirname, `/assets`),
                to: "./assets"
        }]),
        new HtmlWebpackPlugin({
            filename:"index.html",
            template: "./index.html",
            chunks:["index"]
        }),
        new HtmlWebpackPlugin({
            filename:"register.html",
            template: "./index.html",
            chunks:["register"]
        }),
        new HtmlWebpackPlugin({
            filename:"download.html",
            template: "./index.html",
            chunks:["download"]
        }),
        new HtmlWebpackPlugin({
            filename:"casino.html",
            template: "./index.html",
            chunks:["casino"]
        }),
        new HtmlWebpackPlugin({
            filename:"slots.html",
            template: "./index.html",
            chunks:["slots"]
        }),
        new HtmlWebpackPlugin({
            filename:"promos.html",
            template: "./index.html",
            chunks:["promos"]
        }),
        new HtmlWebpackPlugin({
            filename:"member.html",
            template: "./index.html",
            chunks:["member"]
        }),
        new HtmlWebpackPlugin({
            filename:"wap/index.html",
            template: "./index.html",
            chunks:["wap"]
        }),
    ]
};