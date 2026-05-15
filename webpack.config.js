const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: './src/index.js',

    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    devServer: {
        static: './dist',
        open: true,
        port: 3000,
    },

    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader',
        },

        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html',
        }),
    ],
};