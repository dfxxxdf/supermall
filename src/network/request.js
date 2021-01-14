/**
 * 在App.vue和HelloWorld.vue等这些组件中，如果我们要使用axios，就必须在每个组件都导入代码：import axios from 'axios'，那么
 * 如果我们有N多个组件都要用到axios，如果后期我们不使用axios框架，那么每一个组件都要重新异入代码，这是非常麻烦的，这里我们要
 * 学习怎么能axios进行封装
 * 1、创建D:\phpstudy_pro\WWW\Vuejs\webpack\learvueasyn\src\network\request.js文件并导入axios并写入代码
 * 2、在main.js文件中写request代码就可以了
 */
//导入axios
import axios from 'axios'
// export function request(config) {
//   return new Promise((resolve, reject)=>{
//     //1、创建axios实例（注意：不是创建全局的）
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//     //发送真正的网络请求
//     instance(config)
//       .then((res)=>{
//         // console.log(res);
//         resolve(res) //这里把参数传出去
//       })
//       .catch((err)=>{
//         // console.slog(err);
//         reject(err) //这里把参数传出去
//      })
//   })
// }

export function request(config) {
  //1、创建axios实例（注意：不是创建全局的）
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/m5',
    timeout: 5000
  })
  /**
   * axios的拦截器怎么使用，为什么要使用拦截器
   * 就是在发送网络请求之前，你可能想对某些请求进行拦截，比如给它拼接上一些东西啊，或者来判断你有没有携带一些东西啦，或者某
   * 些地方一但发生网络请求的话我在整个页面添加一些动画啦等...意思就是你想把把我们请求的过程拦戴下来，那我们就可以使用拦截器啦。
   * axios即提供了成功的拦截，也提供了失败的拦截；响应成功的时候是可以拦截的，响应失败的时候也是可以拦截的，所以说一共提供了4种拦截
   * 1、写以下两句代码对以上封装的instance进行拦截
   */
  //这里的config是随便的一个参数是从main.js文件里
  //如果是axios.interceptors拦截的就是全局，但是这里我们拦截的只是局部封装的instance，所以这里我们使用instance.interceptors
  //instance.interceptors.request; 拦截请求
  //instance.interceptors.response; 拦截响应

  //请求失败是第2个函数
  instance.interceptors.request.use((dao)=>{
    //请求成功进入这个函数
    // console.log(dao);
    //因为这里传入的参数instance被拦截了，所以这里我们要把instance原封不动的给别人返回回去
    return dao //也就是说拦截了是要还回去的
  },(fei)=>{
    //请求失败进入这个函数
    // console.log(fei);
  })

  //axios的拦截器
  //请求拦截的作用
  instance.interceptors.request.use((config)=>{
    return config
  },(err)=>{
    console.log(err);
  })

  //响应拦截
  instance.interceptors.response.use((res)=>{
    //响应成功进入这个函数
    // console.log(res);
    //因为这里传入的参数instance被拦截了，所以这里我们要把instance原封不动的给别人返回回去
    return res.data //也就是说拦截了是要还回去的
  },(err)=>{
    //响应失败进入这个函数
    console.log(err);
  })
  //发送真正的网络请求
  //这里返回的本身就是Promise，所以在main.js文件中可以直接使用.then
  return instance(config)
}

