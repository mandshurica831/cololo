//
// 開始
//
this.start = function(){
console.log("%cIndexController - start",'color:orange;',this);

  // 定数とか変数とか
  this.temmiesan = 'nyaaa';
  this.h1 = $('h1');

  console.log(this.h1);
  this.init();
}

//
// 初期化
//
this.init = function(){
  console.log('initだよ');
}

// start
this.start();


// windowで処理できるけどどうしたらええんや
(function(IndexController){

  this.mimimi = IndexController;

})(this);
