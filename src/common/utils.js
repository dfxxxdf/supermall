// 项目中公用的工具抽取到这里

/**
 * 滚动条加载图片间隔多少时间后无图片加载再进行刷新
 * func为传入的函数，delay为传入的时间
 */
export function debounce(func, delay){
  let timer =  null
  //这里返回一个新的函数，这里3点的意思是可以传入好多个参数
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this, args)
    },delay)
  }
}
