const pathModules = './public/js/modules';
module.exports = {
  // メインとなるJavaScriptファイル
  entry: `${pathModules}/test/index.js`,
  // ファイルの出力設定
  output: {
    path: `${pathModules}/test/`,
    filename: 'app.js'
  }
};
