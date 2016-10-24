const path = require('path');
const pathDevModules = './modules';
const pathPubModules = './public/js/modules/';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        loader: ExtractTextPlugin.extract("style", "css")
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", "css!sass")
      }
    ]
  }
}];
