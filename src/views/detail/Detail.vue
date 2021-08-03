<template>
  <div id="detail">
    <DetailNaVBar class="detail-nav" @titleClick="titleClick" ref="title"></DetailNaVBar>
    <Scroll class="content" ref="scroll" :probeNum="3" @xy="xy">
      <DetailSwiper :topImage="topImage"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShop :shop="shop"></DetailShop>
      <DetailGoodsInfo :detailImages="detailImages" @imageLoad="imageLoad"></DetailGoodsInfo>
      <DetailParamInfo :paramInfo="paramInfo" ref="paramInfo"></DetailParamInfo>
      <DetailComment :commentInfo="commentInfo" ref="comment"></DetailComment>
      <GoodsList :goods="recommend" ref="goodsInfo"></GoodsList>
    </Scroll>
    <BackTop @click.native="back_top" v-show="isShow"></BackTop>
    <DetailBottomBar></DetailBottomBar>
  </div>
</template>

<script>
import {getDetail,Goods,Shop,GoodsParam,detailRecommend} from 'network/detail'
import DetailNaVBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShop from "./childComps/DetailShop";
import Scroll from "components/common/scroll/Scroll";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailComment from "./childComps/DetailComment";
import GoodsList from "components/content/goods/GoodsList";
import {resMixin} from "../../common/mixin";
import BackTop from "components/content/backTop/BackTop";
import DetailBottomBar from "./childComps/DetailBottomBar";

export default {
    name: "Detail",
    components:{
      DetailNaVBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShop,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailComment,
      GoodsList,
      BackTop,
      DetailBottomBar,
    },
  //导入混入函数
  mixins:[resMixin],
    data(){
      return{
        topImage:[],
        //如要传入对象，默认也要为对象，否则报错
        goods:{},
        //商家信息
        shop:{},
        //商品图片信息
        detailImages:{},
        //商品参数信息
        paramInfo:{},
        //评论信息
        commentInfo:[],
        //推荐商品
        recommend:[],
        //回到顶部按钮默认不显示
        isShow:false,
        offsettop:0,
        //设置默认选择的标题
        titleIndex:0,
        //每个组件要跳转的坐标Y值
        topy:[],
        ind:''
      }
    },

  created() {
      //取到id值传入路由请求中
      getDetail(this.$route.params.id).then(res=>{
        const data=res.result
        // console.log(res.result);
        //轮播图数据获取
        this.topImage=data.itemInfo.topImages
        // 商品详情数据获取
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //商家信息
        this.shop=new Shop(data.shopInfo)
        //商品图片信息
        this.detailImages=data.detailInfo
        //商品参数信息
        this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
        //评论信息
        if(data.rate.cRate){
          this.commentInfo=data.rate.list
        }
      });
        //推荐商品
       detailRecommend().then(res => {
          this.recommend=res.data.list
        });

    },
  updated() {
     //各标签顶部位置获取
    if (this.$refs.paramInfo && this.$refs.comment && this.$refs.goodsInfo){
      this.$refs.scroll.refreshes()
      this.topy=[]
      this.topy.push(0)
      this.topy.push(this.$refs.paramInfo.$el.offsetTop)
      this.topy.push(this.$refs.comment.$el.offsetTop)
      this.topy.push(this.$refs.goodsInfo.$el.offsetTop)
      this.topy.push(Number.MAX_VALUE)
    }
  },
  methods:{
      //等图片全部加载完成后从新刷新可滚动高度
    imageLoad(){
      // this.$refs.scroll.refreshes()
    },

    //标题联动
    titleClick(index){
      //点击滑动到具体位置!
      this.$refs.scroll.scrollto(0,-this.topy[index],500);
    },

      //回到顶部按钮
    back_top(){
      //拿到取了scroll名字的组件scrollTo对象,(x,y,毫秒)
      this.$refs.scroll.scrollto(0,0,500)
    },
    xy(position){
      let y=-position.y
      //回到顶部按钮的显示与隐藏
      this.isShow = y > 1500;

      //标签联动滑动到对应位置标签变色
      //   if(y >= 0 && y < this.topy[1]){              //方法一
      //     this.$refs.title.current=0
      //   }
      //   if(y >= this.topy[1] && y < this.topy[2]){
      //     this.$refs.title.current=1
      //   }
      //   if(y >= this.topy[2] && y < this.topy[3]){
      //     this.$refs.title.current=2
      //   }
      //   if(y >= this.topy[3] && y < this.topy[4]){
      //     this.$refs.title.current=3
      //   }
      for (let i = 0 ;i<this.topy.length-1; i++){      //方法二
        if(this.ind !== i &&(y>=this.topy[i] && y<this.topy[i+1]) ){
          this.ind=i
          this.$refs.title.current=this.ind
        }
      }
    },
  },
}
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 9;
    background-color: white;
    height: 100vh;
  }
  .detail-nav{
    /*脱离标准流*/
    position: relative;
    z-index: 9;
    background-color: white;
  }

  .content{
    height: calc(100% - 44px - 58px);
  }
</style>
