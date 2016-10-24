module.exports = function(req,res,next){

  var orgUrl = req.originalUrl.split('/');
  if(orgUrl[0]=='') orgUrl.splice(0, 1);

  for(i in orgUrl){
    if(i == 0) continue;

    // アルファベットチェック
    if (orgUrl[i].charAt(0).match(/[^A-Za-z]+/)) throw new Error("viewsファイルの頭文字はアルファベットにしてね");

    // キャメル化
    orgUrl[i] = orgUrl[i].charAt(0).toUpperCase() + orgUrl[i].slice(1);
  }

  // res.localsに入れる
  res.locals.views_class = orgUrl.join('');

  console.log("viewsClass > ",orgUrl)

  next();
}
