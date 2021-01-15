<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" class="tab-control-item" :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props: {
      titles: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index;
        // 子组件发生了点击，要把事件传到外面去
        this.$emit('tabClick', index) //index是告诉我点击的是哪个选项卡
      }
    }
  }
</script>
<style scoped>
  .tab-control{
    display: flex; /*收缩到一排上*/
    text-align: center;/*文字居中*/
    font-size: 24px; /*文字的大小*/
    height: 40px; /*有文字撑起的高度*/
    line-height: 40px; /*没有文字也可以撑起的高度*/
    background-color: #fff;
  }
  .tab-control-item{
    flex: 1; /*1比1的比例平均分配*/
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active {
    color: var(--color-high-text); /*高亮时候的文字颜色*/
  }
  .active span{
    border-bottom:3px solid var(--color-tint);
  }
</style>