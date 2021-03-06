const webpack = require('webpack');
const minimize = process.argv.indexOf('--no-minimize') === -1 ? true : false;
const packPlugins = minimize
  ? [new webpack.optimize.UglifyJsPlugin({ minimize: true })]
  : [];

module.exports = {
  entry: './src/tt-stylesheet.js',
  output: {
    path: './dist',
    filename: minimize ? 'tt-stylesheet.min.js' : 'tt-stylesheet.js',
    libraryTarget: 'umd',
    library: 'TTStylesheet'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }]
  },
  plugins: packPlugins
};
