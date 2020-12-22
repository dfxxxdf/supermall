<template>
  <!--因为创建的组件文件名叫TabBar.vue，所以这里使用的标签就为<tab-bar>-->
  <tab-bar>
    <!--因为创建的子组件文件名叫TabBarItem.vue，所以这里使用的标签就为<tab-bar-item>-->
    <!--这里所设置的path="/home"的路径就是D:\phpstudy_pro\WWW\Vuejs\webpack\tabbar\src\views\home文件夹的路径-->
    <!--这里所设置的activeColor="deepPink"就是处于活跃时把颜色传给TabBarItem.vue里面的activeColor，如果这里没有传，选中就为默认颜色-->
    <tab-bar-item path="/home" activeColor="deepPink">
<!--      因为在D:\phpstudy_pro\WWW\Vuejs\webpack\tabbar\build\webpack.base.conf.js文件中设置为路径别名，所以这里我们可以这样来配置路径，需要注意的是这里必须加~-->
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar//category.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar//category_active.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="deepPink">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>
<script>
  //这里使用@代表路径D:\phpstudy_pro\WWW\Vuejs\webpack\tabbar\src，是在文件D:\phpstudy_pro\WWW\Vuejs\webpack\tabbar\build\webpack.base.conf.js中设置的
  import TabBar from 'components/common/tabbar/TabBar'// 我主要是把TabBar.vue组件导进来
  import TabBarItem from 'components/common/tabbar/TabBarItem'// 我主要是把TabBarItem.vue组件导进来
  export default {
    name: "MainTabBar",
    components: {
      TabBar,//我们所创建的TabBar.vue组件添加到这里使用
      TabBarItem//我们所创建的TabBarItem.vue组件添加到这里使用
    }
  }
</script>
<style scoped>

</style>
