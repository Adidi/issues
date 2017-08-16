const path = require('path'),
    webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        app: ['babel-polyfill', path.join(__dirname, 'src/js')]
    },
    output: {
        path: path.join(__dirname, 'public/dist'),
        filename: '[name].[chunkhash:10].js'
    },

    module: {
        rules: [{
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory:true
                },
                include: path.join(__dirname, 'src/js')
            },
            {
                test: /\.less/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: false
                            }
                        }, {
                            loader: 'less-loader'
                        }
                    ]
                }),
                include: path.join(__dirname, 'src/less')
            },
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    plugins: [

        new CleanWebpackPlugin('public/dist/*.*'),

        new ExtractTextPlugin({
            filename: '[name].[contenthash:10].css'
        }),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),

        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true
            },
            compress: {
                screw_ie8: true,
                warnings: false
            },
            sourceMap: true,
            comments: false
        }),

        new HtmlWebpackPlugin({
            filename: path.join(__dirname, 'public/index.html')
        })

    ]
};