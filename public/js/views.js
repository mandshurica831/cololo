var IndexController = function(){
  console.log("%cIndexController - start",'color:orange;',this);

  //
  // 開始
  this.nekochan = function(){


    // 定数とか変数とか
    this.temmiesan = 'nyaaa';
    this.h1 = $('h1');

    console.log(this.h1);
    this.init();
  }

  //
  // 初期化
  this.init = function(){
    console.log('initだよ');
  }

};

var CreateCharacterController = function(){

  this.type_detail = $('[data-name=fight_type_detail_area]');
  this.type_detail.find('.default').show();
  this.type_detail.find('.f_type_atk').hide();
  this.type_detail.find('.f_type_def').hide();
  this.type_detail.find('.f_type_sup').hide();
  this.type_detail.find('.f_type_manual').hide();

  this.type_detail.parent().find('label')
  .mouseover(function(e){
    this.type_detail.children().stop().fadeOut(0);
    this.type_detail.find(`.${$(e.currentTarget).attr('for')}`).fadeIn(100);
  }.bind(this)).mouseout(function(){
    this.type_detail.children().stop().fadeOut(0);
    this.type_detail.find('.default').fadeIn(100);
  }.bind(this));


  $('[data-name=detail_settings_area]').hide();

  $('[data-name=open_detail_area_btn]').on('click',function(){
    $('[data-name=detail_settings_area]').toggle();
  }.bind(this));


};
inherits(CreateCharacterController,Base);//継承
p = CreateCharacterController.prototype;


var TutorialP01Controller = function(){

};
inherits(TutorialP01Controller,Base);//継承
p = TutorialP01Controller.prototype;
