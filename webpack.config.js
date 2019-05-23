const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = (env, args) => ({
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry: ['@babel/polyfill', './src/index.jsx'],
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: 'head',
            template: path.join(__dirname, 'src/index.html'),
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'async',
        }),
        new webpack.DefinePlugin({
            ENV_MODE: JSON.stringify(args.mode),
            BASE_HOST: args.mode === 'development' ? '' : process.env.npm_package_homepage,
        }),
        new CleanWebpackPlugin(['dist']),
        new CopyPlugin(['./public']),
    ],
    devtool: args.mode === 'development' ? 'inline-source-map' : 'none',
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(jpe?g|ico|png|gif|svg)$/i,
                loader: 'file-loader?name=img/[name].[ext]',
            },
            {
                test: /\.(otf|ttf)$/i,
                loader: 'file-loader?name=fonts/[name].[ext]',
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
        watchContentBase: true,
        hot: true,
        stats: 'errors-only',
    },
    output: {
        publicPath: args.mode === 'development' ? '/' : process.env.npm_package_homepage,
    },
});
