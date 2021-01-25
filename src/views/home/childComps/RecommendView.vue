<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    //这里要展示数据，但是数据在Home页，所以这里我们要使用props来获取首页（Home）得到的数据
    props:{
      recommends: {
      //这里的banners是服务器的数据
        banners: {
          type: Array,
          default(){
            return []
          }
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex; /*这里是使用水平布局的意思*/
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 15px 0 30px 0;
    border-bottom: 8px solid #eee; /*底部的粗线条*/
  }
  .recommend-item{
    flex: 1; /*4张图片均等份的意思*/
  }
  .recommend-item img{
    /*设置图片的大小*/
    width: 80px;
    height: 80px;
    margin-bottom: 5px;
  }
</style>
