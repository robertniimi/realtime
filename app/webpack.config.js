'use strict'

var webpack = require('webpack');

module.exports = {
  entry: {
    app: [__dirname + '/js/main'],
    vendor: [
      'draft-js',
      'react',
      'react-dom'
    ],
  },
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
  debug: true,
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      ReactDOM: 'react-dom'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),
  ],
  resolve: {
    modulesDirectories: [
      'node_modules',
    ],
    extensions: ['', '.js', '.jsx', '.json'],
  },
  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json-loader',
    }, {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
    }, {
      test: require.resolve('react'),
      loader: 'expose?React',
    }],
  },
};
