//导入vue文件夹
import Vue from 'vue'
//导入vue-router
import VueRouter from 'vue-router'
//这里进行vue-router的懒加载
const Home = ()=>import('../views/home/home')
const Category = ()=>import('../views/category/category')
const Cart = ()=>import('../views/cart/cart')
const Profile = ()=>import('../views/profile/profile')
//安装插件
// Vue.user(VueRouter)
Vue.use(VueRouter)
//创建路由对象
const routes = [
  // 这里是一进入页面默认显示的主页
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
]
const router = new VueRouter({
  routes,
  mode: 'history',
})
//导出router
export default router
