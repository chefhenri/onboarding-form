const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const formData = require('./src/data/onboarding_form.json')

module.exports = (_env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        mode: "development",
        entry: "./src/index.js",
        devtool: "inline-source-map",
        devServer: {
            contentBase: "./dist",
            historyApiFallback: true,
            compress: true,
            overlay: true,
            open: true
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true,
                            cacheCompression: false,
                            envName: isProduction ? 'production' : 'development'
                        }
                    }
                },
                {
                    test: /\.html$/,
                    use: "html-loader"
                },
                {
                    test: /\.css$/,
                    use: [
                        isProduction ? MiniCssExtractPlugin.loader : "style-loader",
                        "css-loader"
                    ]
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: {
                        loader: "url-loader",
                        options: {
                            limit: 8192,
                            name: "static/media/[name].[hash:8].[ext]"
                        }
                    }
                },
                {
                    test: /\.json$/,
                    use: "json-loader"
                }
            ]
        },
        resolve: {
            extensions: [".js", ".jsx"]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebPackPlugin({
                template: "./public/index.html",
                filename: "index.html",
                favicon: "./public/favicon.ico.ico",
                inject: true
            }),
            isProduction &&
            new MiniCssExtractPlugin({
                filename: "assets/css/[name].[contenthash:8].css",
                chunkFilename: "assets/css/[name].[contenthash:8].chunk.css"
            }),
            new webpack.ProvidePlugin({
                sectionData: formData
            })
        ].filter(Boolean),
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: "assets/js/[name].bundle.js",
            publicPath: "/"
        },
        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserWebpackPlugin({
                    terserOptions: {
                        compress: {
                            comparisons: false
                        },
                        mangle: {
                            safari10: true
                        },
                        output: {
                            comments: false,
                            ascii_only: true
                        },
                        warnings: false
                    }
                }),
                new OptimizeCssAssetsPlugin()
            ],
            splitChunks: {
                chunks: 'all',
                minSize: 0,
                maxInitialRequests: 20,
                maxAsyncRequests: 20,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        name(module, cache, cacheGroupKey) {
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                            return `${cacheGroupKey}.${packageName.replace('@', '')}`
                        }
                    },
                    common: {
                        minChunks: 2,
                        priority: -10
                    }
                }
            },
            runtimeChunk: 'single'
        }
    }
}
