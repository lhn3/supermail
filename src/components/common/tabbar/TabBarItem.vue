  <template>
    <div class="tab-bar-item" @click="show">
      <div v-if="!isActive">
        <slot name="img"></slot>
      </div>
      <div v-else>
        <slot name="img-active"></slot>
      </div>
      <div :style="activeColor">
        <slot name="text"></slot>
      </div>
    </div>

  </template>

  <script>
      export default {
        name: "TabBarItem",
        props:{
          path:String,
          actColor:{
            type:String,
            default:'#ff5777'
          }
        },
        data(){
          return {
            // isActive:false,
          }
        },
        methods:{
          show(){
            return this.$router.push(this.path)
          }
        },
        computed:{
          //动态决定当前路由是否在传来的路由中
          isActive(){
            return this.$route.path.indexOf(this.path) !==-1
          },
          //动态绑定style，判断是否活跃传递不同color
          activeColor(){
            return this.isActive?{color:this.actColor}:{}
          }
        }
      }
  </script>

<style scoped>
  /*横向间距，文本居中，高度*/
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    /*取消图片下方空间*/
    vertical-align: middle;
    margin-top: 3px;
  }

</style>
