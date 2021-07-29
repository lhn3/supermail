<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>

  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import {getHomeMultidata} from "network/home";
  import {Swiper,SwiperItem} from "components/common/swiper/index";

  export default {
    name: "Home",
    components:{
      NavBar,
      Swiper,
      SwiperItem
    },
    //data储存请求来的数据
    data(){
      return{
        //轮播图数据
        banner:[],
        //圆圈内数据
        recommend:[],

      }
    },
    //组件窗前就发送网络请求
    created() {
      //请求多个数据
      getHomeMultidata().then(res=>{
        this.banner=res.data.banner.list;
        this.recommend=res.data.recommend.list;
      }).catch()
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: white;
    font-size: 1.2em;
  }

</style>
