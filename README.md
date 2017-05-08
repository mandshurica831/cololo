# cololo

express-generator使用。

#起動のまえに
Package.jsonに更新あったらまず「$ npm install」してね。

##サーバーの起動と終了
アプリのディレクトリ(Package.jsonのある階層)まで移動して、
「$ npm start」で起動。Ctrl+Cで終了。
起動しっぱなしになっちゃったときは「$ npm stop」で止められる。

##cssとJSのコンパイル
「$ npm run watch」で監視出来るようにしてるよ。
publicの中身が実際に出来上がったやつなので、srcの中身をいじってね。

##Procfile
heroku用

##追加したディレクトリ
###db
dbのバックアップ
###lib
ここにつくったモジュール入れる
###src
ソースはここ
