<template>
<!--  这里是大的一个框架，里面要放一个一个的商品-->
  <div class="goods">
    <!--    {{goods}}-->
    <!--    在这里把item的数据给goods-item,这样就可以把数据传给GoodsListItem.vue文件里了-->
    <goods-list-item v-for="item in goods" :goods-item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    name: "GoodsList",
    components: {
      GoodsListItem
    },
    props: {
      goods: {
        type: Array,
        // 这里的默认值给一个空的数组
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>