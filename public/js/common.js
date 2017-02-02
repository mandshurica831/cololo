/*
 * 基底クラス
 * 汎用的に使用できる関数はここで定義する
 * 全てのクラスはこの基底クラスを継承
 *
 */

/* コンストラクタ
-------------------------------------------------- */
var Base = function(){
  this.observer_list=[];
  this.create_observer_list();
  this.set_observer_target();
  this.add_observer();

  this.service_list=[];
  this.create_service_list();
  this.add_service();
};
p = Base.prototype;

/* イベントターゲットの設定
-------------------------------------------------- */
p.set_observer_target = function(){
  COLOLO.observer.set_target(this);
};
/* イベントの追加
-------------------------------------------------- */
p.add_observer = function(){
  for(var index in this.observer_list){
    COLOLO.observer.add(this.observer_list[index]);
  }
};
/* イベントリストの作成
-------------------------------------------------- */
p.create_observer_list = function(){
}
/* イベントの削除
-------------------------------------------------- */
p.remove_observer = function(){
  for(var index in this.observer_list){
    COLOLO.observer.remove(this.observer_list[index].event_type, this.observer_list[index].callback, this);
  }
}

/* サービスの追加
-------------------------------------------------- */
p.add_service = function(){
  if(this.service_list.length<=0) return false;
  for(var index in this.service_list){
    COLOLO.service.add(this.service_list[index]);
  }
  var params={
    "event_type":SERVICE_ADD_END
  }
  COLOLO.observer.notify(params);
};
/* サービスリストの作成
-------------------------------------------------- */
p.create_service_list = function(){
}
/* 　サービスの削除
-------------------------------------------------- */
p.remove_service = function(){
  for(var index in this.service_list){
    COLOLO.service.remove(this.service_list[index]);
  }
}


/*
 * googleのinheritsのコード
 * クラス継承関数
 *
 */
var inherits = function(childCtor, parentCtor) {
  /** @constructor */
  function tempCtor() {};
  tempCtor.prototype = parentCtor.prototype;
  childCtor.superClass_ = parentCtor.prototype;
  childCtor.prototype = new tempCtor();
  /** @override */
  childCtor.prototype.constructor = childCtor;
};

/*
 * 定数設定
 *
 *
 */

/* グローバル
-------------------------------------------------- */
COLOLO = {};

/* クラス用
-------------------------------------------------- */
var p = {};//prototype 一時保存場所

/* クラス用
-------------------------------------------------- */
COLOLO.hide_loading = function(){
  console.log('hide_loading');
};
