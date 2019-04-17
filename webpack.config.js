const webpack = require('webpack');

module.exports = {
    entry: {
        jquery: 'jquery',
        appMain: './src/index.js'
    //   './src/index.js',
    //   './src/index.css'
    },
    output: {
      path: __dirname,
      publicPath: '/',
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "script-loader"
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        }
      ]
    },
    plugins: [
        new webpack.ProvidePlugin({
         $: "jquery",
         jQuery: "jquery"
        })
    ]
  };