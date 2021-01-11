<template>
  
</template>

<script>
  export default {
    name: "RecommendView",
    //这里要展示数据，但是数据在Home页，所以这里我们要使用props来获取首页（Home）得到的数据
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
</script>

<style scoped>

</style>