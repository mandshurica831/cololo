const path = require('path');
const glob = require('glob');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// ワイルドカードでentry取得
var views_entries = {}
glob.sync("./src/js/views/**/*.js").map(function(file){
  var name = file.replace('./src/js/views/','').split('/');
  for(var i in name){
    name[i] = name[i].charAt(0).toUpperCase() + name[i].slice(1).replace('.js','');
  }
  var name = name.join('') + 'Controller.js';
  views_entries[name] = file;
});
var common_entries = {}
glob.sync("./src/js/common/**/*.js").map(function(file){
  //var name = file.replace('./src/js/common/','');
  var name = file.split('/')[file.split('/').length-1];
  common_entries[name] = file;
});

//宣言
module.exports = [{
  // views
  entry: views_entries,
  output: {
    path: path.resolve('./public/js/views/'),
    filename: '[name]'
  }
},{
  // common
  entry: common_entries,
  output: {
    path: path.resolve(`./public/js/common/`),
    filename: '[name]'
  }
}];
