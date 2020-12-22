/**
 * 这里我们创建的是脚手架3，那么在脚手架3里我们怎么配置路径别名呢？
 * 1、创建E:\phpstudy_pro\WWW\Vuejs\webpack\supermall\vue.config.js文件并写入代码
 * 2、在E:\phpstudy_pro\WWW\Vuejs\webpack\supermall\src\App.vue文件中使用别名的路径导入：@import "assets/css/base.css"
 */
/**
 * 我们所创建的E:\phpstudy_pro\WWW\Vuejs\webpack\supermall\src\assets\css\base.css文件要怎么引用（这个文件是看着老师代码写的CSS文件，我们也可以拷贝到其它项目中使用）
 * 1、在E:\phpstudy_pro\WWW\Vuejs\webpack\supermall\src\App.vue文件中导入base.css就引入成功了
 */
/**
 * 我们在使用脚手架2创建项目的时候在根目录中会生成.editorconfig文件，这个文件是对我们的代码做一些统一的风格，一般情况下一个项目里面最好有这样的一个文件，可以对我们整个
 * 组开发前端项目的风格做一些统一，不然多人开发的时候每个人的代码风格都不一样，那整个项目都是乱七八糟的，但是在创建的脚手架3中并没有这个文件，那我们要怎么处理这个问题呢
 * 比如如果我是某个项目的组长，一定要加上这个文件
 * 1、创建一个脚手架2文件，把脚手架2中根目录下的.editorconfig文件直接拷贝到脚手架3中使用。
 */
/**
 * 之前我们封装了手机底部导航的功能（tabbar.zip），封装的目的就是这个功能可以拿过来在很项目中方使用，那么我们怎么拿过来这里直接使用呢，我们必须要有这种封装抽取的思想
 * 1、把封装tabbar项目中的E:\phpstudy_pro\WWW\Vuejs\webpack\tabbar\src\components\tabbar文件夹复制到这个项目中的E:\phpstudy_pro\WWW\Vuejs\webpack\supermall\src\components\common文件夹中（这是很多项目都可以使用的公共文件）
 * 2、把封装tabbar项目中的E:\phpstudy_pro\WWW\Vuejs\webpack\tabbar\src\components\mainTabbar文件夹复制到这个项目中的E:\phpstudy_pro\WWW\Vuejs\webpack\supermall\src\components\content文件夹中（只有这个项目才可以使用这里的功能）
 * 3、在E:\phpstudy_pro\WWW\Vuejs\webpack\supermall\src\App.vue文件中导入MainTabBar，并写入Vue的占位符<router-view/>和<main-tab-bar/>
 * 4、这里我们还要使和到vue-router(路由)，所以这里我们要安装一下路由：npm install vue-router --save，然后在生成的E:\phpstudy_pro\WWW\Vuejs\webpack\supermall\src\router\index.js文件中写入代码
 * 5、在E:\phpstudy_pro\WWW\Vuejs\webpack\supermall\src\main.js进行router的导入和挂载
 */
/**
 * 更换浏览器标题上显示的图标的方法
 * 1、把D:\phpstudy_pro\WWW\Vuejs\webpack\supermall\public\favicon.ico图标换掉就可以了
 */
/**
 * 移动App每一页页头上的导航我们要怎么进行封装
 * 1、分析：类似于App每一页页头上的导航应该是很多项目都会用得到的，所以我们创建到D:\phpstudy_pro\WWW\Vuejs\webpack\supermall\src\components\common文件夹中，但是不同项目中的内容有所不同，所以这里我们要使用到插槽
 * 2、创建D:\phpstudy_pro\WWW\Vuejs\webpack\supermall\src\components\common\navbar\NavBar.vue文件并写入相关代码
 * 3、在首页D:\phpstudy_pro\WWW\Vuejs\webpack\supermall\src\views\home\home.vue中导入、注册NavBar并使用
 */
const name = '刀飞'
