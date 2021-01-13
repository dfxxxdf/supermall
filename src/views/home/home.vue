<template>
  <div id="home">
<!--    这里因为我们要为插槽插入东西，所以这里使用双标签-->
<!--    在插槽里插入内容-->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
<!--    在这里使用HomeSwiper.vue,把得到服务器里的数据banners传进来-->
    <home-swiper :banners="banners"/>
<!--    在这里使用RecommendView.vue,把得到服务器里的数据recommends传进来-->
    <recommend-view :recommends = "recommends"/>
    <feature-view/>
    <tab-control class="tab-control" :titles="['流行', '新款', '精选']"/>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
  //这里导入E:\phpstudy_pro\WWW\Vuejs\webpack\supermall\src\network\home.js文件中的方法来对接数据
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'

  import { getHomeMultidata, getHomeGoods } from 'network/home'
  export default {
    name: "home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,

      NavBar,
      TabControl
    },
    data(){
      return {
        //给一个默认值为null
        // result: null
        // res的数据被保存到这里就不会被回收了
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []}, //流行
          'news': {page: 0,list: []}, //新款
          'sell': {page: 0, list:[]} //精选
        }
      }
    },
    //组件创建完成以后马上就要发生网络请求，所以这里要用到生命周期created()
    created() {
      //1、请求多个数据
      this.getHomeMultidata()
      //2、请求商品数据
      this.getHomeGoods('pop')
      // this.getHomeGoods('new')
      // this.getHomeGoods('sell')

    },
    methods: {
      getHomeMultidata(){
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
      },
      getHomeGoods(type){
        //请求商品数据
        getHomeGoods(type, 1).then((res)=>{
          console.log(res);
        });
      }
    }
  }
</script>
<style scoped>
  #home{
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0; right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control{
    position: sticky;
    top:44px;
  }
</style>
