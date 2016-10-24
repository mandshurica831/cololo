const path = require('path');
const pathDevModules = './webpack';
const pathPubModules = './public/js/modules/';
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
  //
  // views js
  //
  entry: {
    IndexController: './src/js/views/IndexController.js',
  },
  output: {
    path: './public/js/views/',
    filename: '[name].js'
  }
},{
  //
  // common.js
  //
  entry: `./src/js/common/Base.js`,
  output: {
    path: `./public/js/`,
    filename: 'common.js'
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
