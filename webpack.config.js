const path = require('path');
const glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// ワイルドカードでentry取得
var views_entries = {}
glob.sync("./src/js/views/**/*.js").map(function(file){
  views_entries[file] = file;
});
var common_entries = {}
glob.sync("./src/js/common/**/*.js").map(function(file){
  common_entries[file] = file;
});

//宣言
module.exports = [{
  //
  // views
  //
  entry: views_entries,
  output: {
    path: './public/js/views/',
    filename: '[name].js'
  }
},{
  //
  // common
  //
  entry: common_entries,
  output: {
    path: `./public/js/`,
    filename: '[name].js'
  }
}];
