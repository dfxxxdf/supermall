<template>
  <div class="back-top" @click="backClick">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    methods: {
      backClick(){
        // console.log('回到顶部');
        this.$emit('backClick')
      }
    }
  }
</script>

<style scoped>
  .back-top {
    position: fixed;
    right: 15px;
    bottom: 45px;
  }
  .back-top img{
    width: 50px;
    height: 50px;
  }
</style>
