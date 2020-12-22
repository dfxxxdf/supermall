<template>
  <div id="home">
<!--    这里因为我们要为插槽插入东西，所以这里使用双标签-->
    <nav-bar></nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/nvabar/NavBar'
  export default {
    name: "home",
    NavBar
  }
</script>

<style scoped>

</style>
