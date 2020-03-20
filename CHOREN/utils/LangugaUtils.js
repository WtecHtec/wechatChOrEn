var getLanguage = function (){
 
  let type = wx.getStorageSync('language') ||'chinese'

  console.log('getLanguga :', type)
  let data = require(`/${type}.js`)
   return data.data
}
var getCurrentType = function (){
  return wx.getStorageSync('language') || 'chinese'
}
module.exports = {
  getLanguage: getLanguage,
  getCurrentType: getCurrentType
}