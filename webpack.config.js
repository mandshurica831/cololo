const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs');
const pathDevModules = './src/js/modules';
const pathPubModules = './public/js/modules/';

module.exports = [{
  //
  // common.js
  //
  entry: `./src/js/common/index.js`,
  output: {
    path: `./public/js/`,
    filename: 'common.js'
  }
},{
  //
  // views js
  //
  entry: {
    index: `./src/js/views/index.js`,
  },
  output: {
    path: `./public/js/views/`,
    filename: '[name].js'
  }
},{
  //
  // JSModule - test
  //
  entry: `${pathDevModules}/test/index.js`,
  output: {
    path: `${pathPubModules}`,
    filename: 'test.js'
  },
  modules: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
      }
    ]
  }
}];
