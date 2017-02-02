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

  console.log($('#fight_type_detail_area').find('.default'))
  $('#f_type_atk');
  $('#f_type_def');
  $('#f_type_sup');
  $('#f_type_manual');
  $('#fight_type_detail_area').find('.default').show();
  $('#fight_type_detail_area').find('.fighter').hide();
  $('#fight_type_detail_area').find('.defender').hide();
  $('#fight_type_detail_area').find('.supporter').hide();
  $('#fight_type_detail_area').find('.manual').hide();

};
inherits(CreateCharacterController,Base);//継承
p = CreateCharacterController.prototype;
