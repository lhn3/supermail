<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommend="recommend"></RecommendView>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView

    },
    //data储存请求来的数据
    data(){
      return{
        //轮播图数据
        banners:[],
        //圆圈内数据
        recommend:[],

      }
    },
    //组件窗前就发送网络请求
    created() {
      //请求多个数据
      getHomeMultidata().then(res=>{
        this.banners=res.data.banner.list;
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
