<template>
<!--  因为不同的页面会有N多个导航，所以这里不使用id选择器，而是使用class选择器会更好-->
<!--  这是整个页面顶上的导航-->
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "NvaBar"
  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    line-height: 44px; /*一般导航都是44或是64，可以直接撑起高度*/
  }
  .left, .right{
    width: 60px;
    background-color: blue;
  }
  .center{
    flex: 1; /*左边给了60、右边给了60，那么剩下的中间就会全部占用撑满*/
    background-color: red;
  }
</style>
