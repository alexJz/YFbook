var path = require('path');
var webpack = require('webpack');

var rootDir = path.resolve(__dirname, '../');

module.exports = {
  entry: {
    bundle: './src/main.jsx',
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'lodash',
      'reflux',
      'antd'
    ]
  },
  context: rootDir,
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.less$/,
      loader: "style!css!less"
    }, {
      test: /\.css$/,
      loader: "style!css"
    }, {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }, {
      test: /\.html$/,
      loader: 'text'
    }, {
      test: /\.woff(\?(v=)?[\w\.\-]+)?$/,
      loader: 'url?limit=10000&minetype=application/font-woff'
    }, {
      test: /\.woff2(\?(v=)?[\w\.\-]+)?$/,
      loader: 'url?limit=10000&minetype=application/font-woff'
    }, {
      test: /\.ttf(\?(v=)?[\w\.\-]+)?$/,
      loader: 'url?limit=10000&minetype=application/octet-stream'
    }, {
      test: /\.eot(\?(v=)?[\w\.\-]+)?$/,
      loader: 'file'
    }, {
      test: /\.svg(\?(v=)?[\w\.\-]+)?$/,
      loader: 'url?limit=10000&minetype=image/svg+xml'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(png|jpg|jpeg|gif)(\?(v=)?[\w\.\-]+)?$/i,
      loader: 'url?limit=10000'
    }, {
      test: require.resolve('lodash'),
      loader: 'expose?_'
    }]
  },
  resolve: {
    alias: {
      pages: path.resolve(rootDir, './src/pages'),
      common: path.resolve(rootDir, './src/common'),
      config: path.resolve(rootDir, './src/config'),
      styles: path.resolve(rootDir, './src/styles'),
      components: path.resolve(rootDir, './src/components'),
      public: path.resolve(rootDir, './public')
    }
  },
  //noParse: ["jquery"],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js", Infinity)
  ]
};
