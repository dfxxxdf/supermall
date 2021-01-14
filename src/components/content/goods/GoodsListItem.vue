<template>
  <div>
<!--  这里是一个一个小的商品的框架-->
<!--  这里的数据是从GoodsList.vue文件中传过来的-->
<!--  这里的信息可以去对照浏览器里的vue所拿到的数据看-->
    <img :src="goodsItem.show.img" alt=""><!--拿到商品所对应的图片-->
    <div>
      <p>{{goodsItem.title}}</p><!-- 拿到每个商品所对应的标题-->
      <span class="price">{{goodsItem.price}}</span> <!--拿到每个商品所对应的价格-->
      <span class="collect">{{goodsItem.cfav}}</span><!--拿到商品所对应的收藏-->
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>

</style>