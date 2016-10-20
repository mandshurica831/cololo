/*
 * indexのクラス
 *
 *
 */
 var IndexController = function(){
  console.log('IndexController')

  this.init();

  Base.call(this);//親コンストラクタ
};
// inherits(IndexController,Base);//継承
p = IndexController.prototype;

p.init = function(){
  console.log('init')
}
