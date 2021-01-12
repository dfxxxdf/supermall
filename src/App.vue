<template>
  <div id="app">
<!--    因为创建了E:\phpstudy_pro\WWW\Vuejs\webpack\supermall\src\router\index.js文件并配置了路由，所以这里要导用路由-->
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>
<style>
  @import "assets/css/base.css";
</style>
