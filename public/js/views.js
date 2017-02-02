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

  this.fight_type_detail_area = $('[data-name=fight_type_detail_area]');
  $('#f_type_atk');
  $('#f_type_def');
  $('#f_type_sup');
  $('#f_type_manual');
  this.fight_type_detail_area.find('.default').show();
  this.fight_type_detail_area.find('.fighter').hide();
  this.fight_type_detail_area.find('.defender').hide();
  this.fight_type_detail_area.find('.supporter').hide();
  this.fight_type_detail_area.find('.manual').hide();

  $('[data-name=detail_settings_area]').hide();

  $('[data-name=open_detail_area_btn]').on('click',function(){
    $('[data-name=detail_settings_area]').toggle();
  }.bind(this));


};
inherits(CreateCharacterController,Base);//継承
p = CreateCharacterController.prototype;
