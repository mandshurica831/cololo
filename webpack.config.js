const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fs = require('fs');
const pathDevModules = './src/js/modules';
const pathPubModules = './public/js/modules/';

module.exports = [{
  // メインとなるJavaScriptファイル
  entry: `${pathDevModules}/test/index.js`,
  // ファイルの出力設定
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
