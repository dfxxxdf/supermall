<template>
  <div id="home" class="wrapper">
<!--    这里因为我们要为插槽插入东西，所以这里使用双标签-->
<!--    在插槽里插入内容-->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
<!--    这里使用代码ref="scroll"就是为了拿到scroll组件就可以对BackTop.vue进行点击事件了-->
    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <!--    在这里使用HomeSwiper.vue,把得到服务器里的数据banners传进来-->
      <home-swiper :banners="banners"/>
      <!--    在这里使用RecommendView.vue,把得到服务器里的数据recommends传进来-->
      <recommend-view :recommends = "recommends"/>
      <feature-view/>
      <!--    这里的的@tabClick是从E:\phpstudy_pro\WWW\Vuejs\webpack\supermall\src\components\content\tabControl\TabControl.vue文件中的methods:里的this.$emit('tabClick', index)传过来的-->
      <tab-control class="tab-control" :titles="['流行', '新款', '精选']" @tabClick="tabClick"/>
      <!--    这里得到的数据是从E:\phpstudy_pro\WWW\Vuejs\webpack\supermall\src\components\content\goods\GoodsList.vue中的props:里获取的-->
      <good-list :goods="showGoods"/>
    </scroll>
<!--    这里对D:\phpstudy_pro\WWW\Vuejs\webpack\supermall\src\components\content\backTop\BackTop.vue组件的点击事件进行监听-->
<!--    对组件的点击事件进行监听，这还是第1次，因为是对组件的监听，所以要添加.native-->
    <back-top @click.native="backClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  //这里导入E:\phpstudy_pro\WWW\Vuejs\webpack\supermall\src\network\home.js文件中的方法来对接数据
  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodList from 'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backTop/BackTop.vue'

  import { getHomeMultidata, getHomeGoods } from 'network/home'
  export default {
    name: "home",
    components: {
      HomeSwiper,
      RecommendView,
      FeatureView,

      NavBar,
      TabControl,
      GoodList,
      Scroll,
      BackTop
    },
    data(){
      return {
        //给一个默认值为null
        // result: null
        // res的数据被保存到这里就不会被回收了
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []}, //流行款数据
          'new': {page: 0,list: []}, //新款数据
          'sell': {page: 0, list:[]} //精选款数据
        },
        currentType: 'pop',
        isShowBackTop: false //设置是否显示回到顶端的图标为不显示
      }
    },
    computed: {
      showGoods(){
        return this.goods[this.currentType].list
      }
    },
    //组件创建完
    // 成以后马上就要发生网络请求，所以这里要用到生命周期created()
    created() {
      //1、请求多个数据
      this.getHomeMultidata()
      //2、请求商品数据
      this.getHomeGoods('pop')
      this.getHomeGoods('new')
      this.getHomeGoods('sell')
    },
    methods: {
      /**
       * 事件监听的相关方法
       */
      tabClick(index){
        // console.log(index);
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },
      backClick(){
        // console.log('对组件直接进行监听');
        //  this.$refs.scroll.scroll.scrollTo(0, 0, 500)//点击BackTop组件让scroll回到顶部的代码
        // this.$refs.scroll.message;
        this.$refs.scroll.scrollTo(0, 0)
      },
      contentScroll(position){
        // console.log(position);
        this.isShowBackTop = (-position.y) > 1000
      },
      /**
       * 以下是网络请求的方法
       */
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
        /**
         * 请求商品数据
         * 比如我第一次请求新款数据的时候，页码肯定是1，但是如果我往下拖以后就不是第1页数据了，可能是其它页，所以如果我们要复用getHomeGoods()方法，页码永远是第1页是不合理的
         * 所以这里的页码我们只能动态获取，也就是在原来的页码上请求下一页的数据
         */
        const  page = this.goods[type].page + 1;
        getHomeGoods(type, page).then((res)=>{
          /**
           * 这里获取的是'流行'的前30条数据，也就是第1页
           * 但是这里我们拿到的res是个局部变量，用完是会被销毁的，那么我们怎么把res进行保存呢
           * 所以要把res.data.list数据拿出来塞到'pop': {page: 0, list: []}里面去
           */
          // console.log(res);
          this.goods[type].list.push(...res.data.list) //这句代码就是把res数据塞到'pop': {page: 0, list: []}里面去
          // 现在pop类型已经多了一组数据了，所以这里的页码要加个1
          this.goods[type].page += 1
        });
      }
    }
  }
</script>
<style scoped>
  #home{
    padding-top: 44px;
    /*但是当元素没有内容时候,height:100%，该元素不会被撑开，此时高度为0，但是设置height:100vh，该元素会被撑开屏幕高度一致*/
    height: 100vh;
    /*这里因为home的高度被撑开了，我们会发现有6000多的高，所以这里我们给home设置一个固定高度*/
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: fixed;
    left: 0; right: 0;
    top: 0;
    z-index: 9;/*如果没有这句代码，.home-nav(购物街的代码不会在最上层)*/
  }
  .tab-control{
    position: sticky;
    top:44px;
    z-index: 9;/*如果没有这句代码.tab-control不会在最上层。会被其它组件遮住到后面看不见。*/
  }
  .content{
    /*不同电脑或手机的高度是不一样的。所以这里不能写死*/
    /*height: 300px;*/
    overflow:hidden;/*溢出部份隐藏*/
    position: absolute;
    top: 44px;/*这里设置是的最上面标题的高度*/
    bottom: 49px;/*这里设置的是最小面导航的高度*/
    left: 0;
    right: 0;
  }
  /*.content {*/
  /*   height: calc(100% - 50px);*/
  /*   overflow: hidden;*/
  /*   margin-top: 0px;*/
  /* }*/
</style>
