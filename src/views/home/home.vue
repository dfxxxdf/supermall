<template>
  <div id="home">
<!--    这里因为我们要为插槽插入东西，所以这里使用双标签-->
<!--    在插槽里插入内容-->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  //这里导入E:\phpstudy_pro\WWW\Vuejs\webpack\supermall\src\network\home.js文件中的方法来对接数据
  import {getHomeMultidata} from 'network/home'
  import HomeSwiper from './childComps/HomeSwiper'
  export default {
    name: "home",
    components: {
      NavBar,
      HomeSwiper
    },
    data(){
      return {
        //给一个默认值为null
        // result: null
        //res的数据被保存到这里就不会被回收了
        banners: [],
        recommends: []
      }
    },
    //组件创建完成以后马上就要发生网络请求，所以这里要用到生命周期created()
    created() {
      //1、请求多个数据,getHomeMultidata()方法返回的是Promist
      //这其实就是传说中的异步操作
      getHomeMultidata().then((res)=>{
        //这里就拿到了轮播图片的数据了
        // console.log(res);
        /**
         * 1、在这里所得到的res指向了整个data对象
         * 2、写了以下两句代码后banners和recommends也指向了data对象
         * res调用完了就被回收，但是还有banners和recommends指向了data，所以data就不会被回收，所以res就被保存在data中了
         */
        // this.result = res //把拿到服务器的轮播数据赋值给result，这样result就保存了轮播图片的数据
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    }
  }
</script>
<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
