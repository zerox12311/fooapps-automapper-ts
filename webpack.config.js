var config = {
    entry: './src/index.ts',
    output: {
        filename: './dist/bundle.js'
    },
    resolve: {
        root: ['./node_modules/automapper-ts/dist'],
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    devtool: 'source-map'
};

module.exports = config;
