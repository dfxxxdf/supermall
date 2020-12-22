<template>
  <div class="tab-bar-item" @click="itemClick">
    <!--假如isActive为true,显示图标item-icon-->
    <!--重点：这里使用<div>包裹是因为<slot>插曹是用来替换的，所以如果我们在<slot>标签里写代码:class="{active: isActive}"就会被替换掉不生效，所以这里这我们就要-->
    <!--使用<div>标签来包裹写代码:class="{active: isActive}"就不会被替换了-->
    <!--这里使用了3个插槽,所插入的内容为App.vue里面<tab-bar-item>里面的内容-->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <!--否则显示图标item-icon-action-->
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
  export default {
    name: "TabBarItem.vue",
    props: {
      //这里路径不能写死，让别人传进来，让你用我item的时候传过来现在所要跳转的路径是什么
      //那么就说明必须在App.vue里传过来所要跳转的路径是什么
      path: String,
      //这里路径不能写死，让别人传进来，让你用我item的时候传过来现在活跃路由的颜色是什么
      //那么就说明必须在App.vue里传过来活跃路由的颜色
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data(){
      return {
        // isActive: true//isActive默认为false
      }
    },
    computed: {
      isActive(){
        // 拿到活跃路由的路径并判断有没有我item中的path，!==-1就代表有当前活跃的路由有我item中的path
        // 那么isActive就为true（也就是当前的活跃的路由为true，其它路由都为false）
        // 在App.vue里传入代码activeColor="blue"选中的路由就会自动变颜色了
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle(){
        //如果this.isActive处于活跃(为true)，那么设置颜色为color: this.activeColor，否则为默认
        //本来这句代码是要放到div里的，但是因为代码太过于复杂，所以我们就写在计算属性里直接调用
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick(){
        console.log('查看监听是否成功~~！')//测试监听是否成功
        this.$router.replace(this.path)
      }
    }
  }
</script>
<style scoped>
  .tab-bar-item{
    flex: 1;/*控制平均分布*/
    text-align: center;/*居中*/
    height: 49px;/*49是验证过移动端开发最合理的高度*/
    font-size: 10px;
  }
  /*设置图片的大小*/
  .tab-bar-item img{
    width: 18px;
    height: 18px;
    margin-top: 6px;
    margin-bottom: 2px;/*图片下方留出2像素的距离*/
    vertical-align: middle;/*图片下面默认会有3个像素，使用此代码可以清除*/
  }
  /*.active{*/
  /*  color: blue;*/
  /*}*/
</style>
