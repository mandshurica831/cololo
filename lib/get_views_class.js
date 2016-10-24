module.exports = function(req,res,next){

  var orgUrl = req.originalUrl.split('/');
  console.log(orgUrl)
  if(orgUrl[0]=='') orgUrl.splice(0, 1);

  if(orgUrl[0] == '') orgUrl[0] = 'index';

  var flg = true;
  for(i in orgUrl){
    if(i == 0) continue;
    if (orgUrl[i].charAt(0).match(/[^A-Za-z]+/)){
      // アルファベット以外で始まるものはNUMに
      orgUrl[i] = '_NUM_';
      flg = false;
    }else{
      // 前が空白のものはスルー
      if(flg == false){
        flg = true;
        continue;
      }
      // キャメル化
      orgUrl[i] = orgUrl[i].charAt(0).toUpperCase() + orgUrl[i].slice(1);
    }
  }

  // res.localsに入れる
  res.locals.views_class = orgUrl.join('');

  console.log("viewsClass > ",orgUrl)

  next();
}
