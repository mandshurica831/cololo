/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const IndexController = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

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
	  GL.observer.set_target(this);
	};
	/* イベントの追加
	-------------------------------------------------- */
	p.add_observer = function(){
	  for(var index in this.observer_list){
	    GL.observer.add(this.observer_list[index]);
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
	    GL.observer.remove(this.observer_list[index].event_type, this.observer_list[index].callback, this);
	  }
	}

	/* サービスの追加
	-------------------------------------------------- */
	p.add_service = function(){
	  if(this.service_list.length<=0) return false;
	  for(var index in this.service_list){
	    GL.service.add(this.service_list[index]);
	  }
	  var params={
	    "event_type":SERVICE_ADD_END
	  }
	  GL.observer.notify(params);
	};
	/* サービスリストの作成
	-------------------------------------------------- */
	p.create_service_list = function(){
	}
	/* 　サービスの削除
	-------------------------------------------------- */
	p.remove_service = function(){
	  for(var index in this.service_list){
	    GL.service.remove(this.service_list[index]);
	  }
	}


/***/ }
/******/ ]);