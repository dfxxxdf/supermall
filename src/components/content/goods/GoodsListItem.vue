<template>
  <div class="goods-item">
<!--  这里是一个一个小的商品的框架-->
<!--  这里的数据是从GoodsList.vue文件中传过来的-->
<!--  这里的信息可以去对照浏览器里的vue所拿到的数据看-->
    <img :src="goodsItem.show.img" alt="" @load="imageLoad"><!--拿到商品所对应的图片-->
    <div class="goods-info">
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
    },
    methods: {
      imageLoad(){
        // console.log('imageLoad');//每次图标加载出来这里都会被监听到
        //这里$bus属性是不存在的，可以用console.log(this.$bus);看出来，所以我们要到main.js里添加代$bus
        this.$bus.$emit('itemImageLoad') //发射总线(因为GoodsListItem.vue和home.vue离的太远，所以这里用这种方式发射总线，在home.vue组件中接收)
      }
    }
  }
</script>

<style scoped>
  /*单独每个商品的样式*/
  .goods-item {
    padding-bottom: 40px;
    position: relative; /*传说中的相对定位*/
    width: 48%;
  }
  /*单独每个商品里的图片*/
  .goods-item img {
    width: 100%;
    border-radius: 5px;/*设置圆角*/
    border:3px solid var(--color-tint);/*设置图片边框颜色*/
  }
  /*图片下方信息的样式*/
  .goods-info {
    font-size: 12px;
    position: absolute; /*这里使用的是绝对定位*/
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden; /*goods-info所在的这个div如果宽高大于包裹它的div，那么多出的部分就会被隐藏*/
    text-align: center;
  }

  .goods-info p {
    overflow: hidden; /*P元素这个div如果宽高大于包裹它的div，那么多出的部分就会被隐藏*/
   text-overflow: ellipsis;  /*文字溢出的部份有省略标记*/
    white-space: nowrap; /*规定文字不换行*/
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative; /*收藏使用的是相对定位*/
  }
  /*这里就是传说中的伪类，就是会在.collect前面加台词，这里其实加的就是一个图标*/
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px; /*所添加的收藏图标*/
  }
</style>
