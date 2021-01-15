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
  .goods {
   /* 将对象作为弹性伸缩盒显示，也就是说所有的商品都会显示到一行上，所以我们需要做以下几个步骤*/
   /*1、在GoodsListItem.vue里设置.goods-item的宽度为48%*/
   /*2、在这个文件中设置flex-wrap: wrap;*/
    display: flex;
    flex-wrap: wrap; /*设置包裹以后会根据.goods里的每个商品进行计算根据商品的宽度进行展示*/
    justify-content:space-around; /*.goods里面的内容中间缝隙对齐*/
    padding:10px 5px 0 5px;
  }
</style>