module.exports = function(req,res,next){

  var orgUrl = req.originalUrl.split('/');
  if(orgUrl[0]=='') orgUrl.splice(0, 1);
  if(orgUrl[0] == '') orgUrl[0] = 'index';

  var viewsClass = JSON.parse(JSON.stringify(orgUrl));
  var pageJsName = JSON.parse(JSON.stringify(orgUrl));

  var flg = true;
  for(i in viewsClass){
    if(i == 0) continue;
    if (viewsClass[i].charAt(0).match(/[^A-Za-z]+/)){
      // アルファベット以外で始まるものはとりあえず "_NUM_" に
      viewsClass[i] = '_NUM_';
      flg = false;
    }else{
      // 前が空白のものはスルー
      if(flg == false){
        flg = true;
        continue;
      }
      // キャメル化
      viewsClass[i] = viewsClass[i].charAt(0).toUpperCase() + viewsClass[i].slice(1);
    }
  }

  flg = true;
  for(i in pageJsName){
    if (pageJsName[i].charAt(0).match(/[^A-Za-z]+/)){
      // アルファベット以外で始まるものはとりあえず "_NUM_" に
      pageJsName[i] = '_NUM_';
      flg = false;
    }else{
      // 前が空白のものはスルー
      if(flg == false){
        flg = true;
        continue;
      }
      // キャメル化
      pageJsName[i] = pageJsName[i].charAt(0).toUpperCase() + pageJsName[i].slice(1);
    }
  }

  // res.localsに入れる
  res.locals.viewsClass = viewsClass.join('_');
  res.locals.pageJsName = pageJsName.join('');

  console.log("viewsClass > ",viewsClass);
  console.log("pageJsName > ",pageJsName);

  next();
}
