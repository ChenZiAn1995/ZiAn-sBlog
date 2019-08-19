/**
 * api接口统一管理
 * import API from 'API'
 * Vue.prototype.$API = API
 * Vue.use(API)
 *
 * this.$API.Login()
 */
import { get, post } from './http'

export default {
  // 分页查询文章
  selectArticle(params) {
    return post(`http://localhost:3000/blog/selective`, params)
  },
  GET(link) {
    return get(link)
  }
}