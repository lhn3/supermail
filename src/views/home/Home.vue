<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommend="recommend"></RecommendView>
    <FeatureView></FeatureView>
    <TabControl :title="title" class="tab-control"></TabControl>
    <GoodsList :goods="goods['pop'].list"></GoodsList>
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import {getHomeMultidata,getHomeGoods} from "network/home";
  import FeatureView from "./childComps/FeatureView";
  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList
    },
    //data储存请求来的数据
    data(){
      return{
        //轮播图数据
        banners:[],
        //圆圈内数据
        recommend:[],
        //小分类标题
        title:['流行','新款','精选'],
        //小分类数据
        goods:{
          'pop':{'page':0,list:[]},
          'new':{'page':0,list:[]},
          'sell':{'page':0,list:[]},
        }
      }
    },
    //组件窗前就发送网络请求
    created() {
      //请求多个数据
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods:{
      getHomeMultidata(){
        //请求多个数据
        getHomeMultidata().then(res=>{
          this.banners=res.data.banner.list;
          this.recommend=res.data.recommend.list;
        }).catch()
      },

      //传入类型分类
      getHomeGoods(type){
        //页码加一传入路由中
        let page=this.goods[type]['page']+=1
        getHomeGoods(type,page).then(res=>{
          this.goods[type].list.push(...res.data.list)
          //将页码改变成对应页数方便下次请求累计加一
          this.goods[type]['page']=page
        }).catch()
      }
    },
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: white;
    font-size: 1.2em;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
    /*悬停效果*/
  .tab-control{
    position: sticky;
    top: 44px;
    z-index: 9;
  }

</style>
