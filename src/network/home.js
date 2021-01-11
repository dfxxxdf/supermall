//导入我们封装的request
import {request} from "./request"
// 导出home页面所需要的数据
// 对home页面所有的请求我们都可以放到这里
export function getHomeMultidata(){
  //这里返回的是Promise
  return request({
    url: '/home/multidata' //拼接上request里面的config参数的地址
  })
}