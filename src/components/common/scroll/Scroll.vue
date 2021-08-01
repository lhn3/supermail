<template>
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
      components:{
      },
      props:{
        probeNum:{
          type:Number,
          default(){
            return 0
          }
        },
        pullUp:{
          type:Boolean,
          default() {
            return false;
          }
        }
      },
      data(){
          return{
            scroll:null,
          }
      },
      mounted() {
          //this.$refs.wrapper 取到这个组件
          this.scroll=new BScroll(this.$refs.wrapper,{

            //设置页面可动
            observeDOM:true,

            //加载图片预防滑动卡顿
            observeImage:true,

            //设置scroll中的元素可以点击
            click:true,

            //设置滑动是否监听，0,1为不监听，2为定点监听，3惯性监听
            probeType:this.probeNum,

            //是否上拉加载更多
            pullUpLoad:this.pullUp,
          });

          //监听滑动的(x,y)坐标
          this.scroll && this.scroll.on('scroll',(position)=>{
            // console.log(position)
            this.$emit('xy',position)
          });

          //上拉加载更多
        this.scroll && this.scroll.on('pullingUp',()=>{
          this.$emit('pullUpLoad')
        });
      },

      methods:{

          scrollto(x,y,time){
            //页面的坐标位置
            this.scroll && this.scroll.scrollTo(x,y,time)
          },
        //多次加载更多
          finishpullup(){
            this.scroll && this.scroll.finishPullUp()
          },
          //刷新重新加载滑动高度
          refreshes(){
            this.scroll && this.scroll.refresh()
          }

      }
    }
</script>

<style scoped>

</style>
