const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    'app': './src/js/index.js',
    'styles-lib': './src/js/styles-libs.js',
    'styles-custom': './src/js/styles-custom.js'
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          use: ["css-loader", "postcss-loader"],
          fallback: "style-loader"
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
}