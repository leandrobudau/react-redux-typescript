const path = require('path');
let fs = require('fs');

let nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function (mod) {
        return ['.bin'].indexOf(mod) === -1;
    }).forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    mode: 'development',
    devtool: "inline-source-map",
    entry: path.resolve(__dirname, 'index.ts'),
    output: {
        path: path.resolve('../../dist/server'),
        filename: '[name].js'
    },
    externals: nodeModules,
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: "ts-loader"
            },
        ]
    }
}