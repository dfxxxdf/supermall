<template>
  <!--  ref如果是绑定在组件中的，那么通过this.$refs.refname获取到的是一个组件对象-->
  <!--  ref如果是绑定在普通的元素中，那么通过this.$refs.refname获取到的是一个元素对象-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    /**
     * 正常情况下我们可以在mounted()方法里写：probeType: 3的，但是因为只要写了这句代码，我们的Scroll.vue就会时实进行位置监听，这样是不科学的
     * 因为Scroll.vue本来就是封装为其它项目中也可以使用的，所以这里我们使用了Props：进行参数传入
     */
    props: {
      probeType: {
        type: Number,
         default: 0 //0代码不监听，3代表时实整个滚动页面监听
      }
    },
    data(){
      return{
        scroll: null,
        message: '哈哈哈'
      }
    },
    mounted(){
      // console.log(document.querySelector('.wrapper'));
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true, //如果没有这句代码，在Scroll.vue组件中被div包裹的点击事件就没能生效了。比如我们滚动到流行、新款、精选这里点击整个年就不能生效
         // probeType: 3
        probeType: this.probeType
      })
      // 监听滚动的位置
      this.scroll.on('scroll',(position)=>{
         // console.log(position); //打印位置信息
        this.$emit('scroll', position) //把监听到的位置信息传递出去
      })
    },
    methods: {
      scrollTo(x, y, time=300){
        this.scroll.scrollTo(x, y, time)
      }
    }
  }
</script>

<style scoped>

</style>
