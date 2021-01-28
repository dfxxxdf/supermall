<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <!--        这里插槽插入的内容进行轮播-->
      <!--        这里都是绑定，所以都要加：-->
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>
<script>
  //如果没有E:\phpstudy_pro\WWW\Vuejs\webpack\supermall\src\components\common\swiper\index.js文件导入方式如下
  //import Swiper from 'components/common/swiper/Swiper'
  //import SwiperItem from 'components/common/swiper/SwiperItem'
  //如果有E:\phpstudy_pro\WWW\Vuejs\webpack\supermall\src\components\common\swiper\index.js文件导入方式如下
  import {Swiper, SwiperItem} from 'components/common/swiper'
  export default {
    name: "HomeSwiper",
    //这里要展示数据，但是数据在Home页，所以这里我们要使用props来获取首页（Home）得到的数据
    props: {
      //这里的banners是服务器的数据
      banners: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        isLoad: false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods: {
      imageLoad(){
        //有4张轮播图，所以打印了4次
        // console.log('图片加载完成');
        if(!this.isLoad){
          this.$emit('swiperImageLoad')
          this.isLoad = true
        }
      }
    }
  }
</script>

<style scoped>

</style>
