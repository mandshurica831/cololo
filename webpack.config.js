module.exports = {
  entry: "./public/js/modules/test/main.js",  // メインとなるJavaScriptファイル（エントリーポイント）
  output: {  // ファイルの出力設定
    path: "./public/js/modules/test/",  //  出力ファイルのディレクトリ名
    filename: "bundle.js"  // 出力ファイル名
  }
};
