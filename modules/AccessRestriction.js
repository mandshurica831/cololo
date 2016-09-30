var express = require('express');
var app = express();


/*
 * use関数でミドルウェアを登録する.
 *
 * リクエストの処理に先立ちここで登録した関数が
 * 実行されるのでリクエストをフックするような感じで使用出来る.
 *
 * リクエストの処理というのは下にあるapp.get()やここでは使用してないが、
 * app.post()などのことである.
 *
 */
app.use(function(req, res, next){
  /* リクエストに含まれるHostヘッダーを取得. */
  var hostname = req.headers.host;

  if( hostname == null || hostname == undefined ){
    /*
     * HostヘッダーはHTTP1.1では必須なので
     * ない場合は400にする.
     */
    res.send(400);
    return;
  }

  /*
   * Hostがlocalhostへのアクセスだったらリクエストを処理する.
   * next()を呼ぶことで、下のapp.get()の部分が処理される.
   *
   * Hostがlocalhostへのアクセスで無い場合.
   * 例えば127.0.0.1などIPアドレス直打ちの場合は400を返して終了する.
   * 下のapp.get()は処理されない
   */
  if(hostname.match(/^localhost/) != null){
    next();
  }else{
    res.send(400);
  }
});


app.get('/',  function(req,  res){
  res.send("Hello");
});

app.get('/hello', function(req, res){
  res.send("world");
});


app.listen(8080);

// 参照
// http://mironal-memo.blogspot.jp/2012/12/nodeexpresshost.html
