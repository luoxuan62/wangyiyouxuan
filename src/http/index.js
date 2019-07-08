import HttpUtils from './http'
class Https {
 

  /*
   * 分类页初始化信息获取
   * */
  getCatalogInitData = parmas => HttpUtils.get('/sort/index', parmas)


}
export default new Https()
