var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: {
        "main": "./src/build/main.js",
    },
    output: {
        path: __dirname,
        filename: "/release/[name].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    },
    plugins: [
        new BrowserSyncPlugin({
            // browse to http://localhost:3000/ during development,
            // ./public directory is being served
            host: "localhost",
            port: 3000,
            server: {
                baseDir: "build/release",
                index: "index.html"
            }
        })
    ]
};

