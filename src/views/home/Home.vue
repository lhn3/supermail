<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="center">购物街</div>
    </NavBar>
      <TabControl :title="title" @tabClick="tabClick" ref="tabControl1" class="top-control" v-show="top_control"></TabControl>
      <Scroll class="content" ref="scroll" :probeNum="3" @xy="xy" :pullUp="true" @pullUpLoad="pullUpLoad">
<!--      swiperload获取最后加载的轮播图尺寸-->
      <HomeSwiper :banners="banners" @swiperload="swiperload" ></HomeSwiper>
      <RecommendView :recommend="recommend"></RecommendView>
      <FeatureView></FeatureView>
      <TabControl :title="title" @tabClick="tabClick" ref="tabControl2"></TabControl>
      <GoodsList :goods="showGoods"></GoodsList>
    </Scroll>
<!--    监听原生组件，使组件可以使用原生事件(.native)-->
    <BackTop @click.native="back_top" v-show="isShow"></BackTop>
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
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "../../components/content/backTop/BackTop";

  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
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
        },
        //默认显示流行
        currentType:'pop',
        //回到顶部按钮默认不显示
        isShow:false,
        //设置多加的一个分类选项默认不显示
        top_control:false,
        //默认高度为零
        offsettop:0,

        //记录当前位置，回来保持当前位置
        savey:0
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
      },

      //点击切换不同分类
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType='pop';
            break
          case 1:
            this.currentType='new';
            break
          case 2:
            this.currentType='sell';
            break
        }
        //使两个标签同步显示
        this.$refs.tabControl1.activate=index
        this.$refs.tabControl2.activate=index

      },
      //回到顶部按钮
      back_top(){
        //拿到取了scroll名字的组件scrollTo对象,(x,y,毫秒)
        this.$refs.scroll.scrollto(0,0,500)
      },

      xy(position){
      //回到顶部按钮的显示与隐藏
        this.isShow = -position.y > 1500;
        this.top_control= -position.y>this.offsettop
      },

      //上拉加载更多
      pullUpLoad(){
        //调用页面加一的方法
        this.getHomeGoods(this.currentType);
        //刷新重新计算滑动高度防止回弹卡顿
        this.$refs.scroll.refreshes()
        //实现可多次加载更多
        this.$refs.scroll.finishpullup()
      },

      // 监听轮播图加载完成
      swiperload(){
        // 获取组件的offsetTop,组件的$el属性用于获取组件中的元素
        this.offsettop=this.$refs.tabControl2.$el.offsetTop;
      }

    },
    computed:{
      showGoods(){
        return this.goods[this.currentType].list
      }
    },

    //回来时定位到之前离开时的位置
    activated() {
      this.$refs.scroll.refreshes()
      this.$refs.scroll.scrollto(0,this.savey,0)
    },
    //离开时记录坐标用的y的位置
    deactivated() {
      this.savey=this.$refs.scroll.scroll.on('scroll',(position)=>{
            position
          }).y;
    }

  }
</script>

<style scoped>
  #home{
    overflow: hidden;
    bottom: 0;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: white;
    font-size: 1.2em;

  }

  .top-control{
    position: relative;
    z-index: 9;
  }

  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
