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
      // 是否监听滚动到什么位置
      probeType: {
        type: Number,
         default: 0 //0代码不监听，3代表时实整个滚动页面监听
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
      // 是否监听下拉加载更多
      // pullUpLoad:{
      //   type: Boolean,
      //   default: false
      // }
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
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })
      // 监听滚动的位置
      this.scroll.on('scroll',(position)=>{
         // console.log(position); //打印位置信息
        this.$emit('scroll', position) //把监听到的位置信息传递出去
      })
      /**
       * 通过这句代码的打印可以看到决定滚动高度的属性
       * scrollerHeight
       */

      //时实监听下拉事件滚动到哪个位置
       if(this.probeType === 2 ||this.probeType === 3){
         this.scroll.on('scroll',(position)=>{
           this.$emit('scroll', position) //把滚动到哪个位置的监听信息发送粗去
         })
       }
      /**
       * 重点理解：这里为什么要使用这句代码进行分析
       * 1、因为我们使用了第三方滚动组件better-scroll，它会自动计算所要滚动的高度，那么问题来了：在这个项目中我们所滚动的页面里包含了图片加载，图片加载是异步操作
       * 也就是说当better-scroll计算出滚动高度的时候可能图片还没有加载出来，那么计算出来的高度是错误的。所以这里我们就要使用这句代码刷新一下界面。这样每次下拉加载
       * 数据的时候就通过刷新刷出数据了。
       */
      //监听scroll滚动到底部的代码
      if(this.pullUpLoad){
        this.scroll.on('pullingUp', ()=>{
          // console.log('监听到滚动到底部');
          this.$emit('pullingUp')//把这里监听到的事件发送出去
        })
      }
    },
    methods: {
      scrollTo(x, y, time=300){
        this.scroll.scrollTo(x, y, time)
      },
      finishPullUp(){
        // this.scrolll.finishPullUp()
        this.scroll && this.scroll.finishPullUp()
      },
      refresh(){
        //如果this.scroll有值在进行刷新
        // this.scroll.refresh()
        /**
         * 我们发现一个问题：在home.vue的mounted()打印this.$refs.scroll.refresh()的时候会报错。原因是在Scroll.vue组件中的methods:方法中的refresh()方法在GoodsListItem里刷出图片太快
         * 而Scroll还没有挂载进来，所以在Scroll.vue的methods:方法里的refresh()方法里我们用代码：this.scroll && this.scroll.refresh()
         */
        // console.log('看加载图片刷新了多少次');
        this.scroll && this.scroll.refresh()
      },
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp()
      }
    }
  }
</script>

<style scoped>

</style>
