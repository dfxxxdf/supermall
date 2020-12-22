<template>
  <!--这里使用id选择器，这里使用类选择器-->
  <div id = "tab-bar">
  <!--这里使用了一个插槽,所插入的内容为App.vue里面<tab-bar>里面的内容-->
  <slot></slot>
  </div>
</template>
<script>
  export default {
    name: "TabBar"
  }
</script>
<style scoped>
  #tab-bar{
    display: flex;/*控制水平分布*/
    background-color: #f6f6f6;/*给整个bar一个背景颜色*/
    position: fixed;/*生成绝对定位的元素，相对于浏览器窗口进行定位，就算有滚动条上下滚动，整个控件仍然在窗口的底部*/
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -3px 3px rgba(100,100,100,0.2);/*x轴偏影、y轴偏影、投影模糊度、颜色透明度*/
  }
</style>
