<template>
  <div id="detail">
    <DetailNaVBar class="detail-nav"></DetailNaVBar>
    <Scroll class="content" >
      <DetailSwiper :topImage="topImage"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShop :shop="shop"></DetailShop>
      <DetailGoodsInfo :detailImages="detailImages"></DetailGoodsInfo>
      <DetailParamInfo :paramInfo="paramInfo"></DetailParamInfo>
      <DetailComment :commentInfo="commentInfo"></DetailComment>
    </Scroll>
  </div>
</template>

<script>
import {getDetail,Goods,Shop,GoodsParam} from 'network/detail'
import DetailNaVBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShop from "./childComps/DetailShop";
import Scroll from "components/common/scroll/Scroll";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailComment from "./childComps/DetailComment";
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
    },
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

      }
    },
    created() {
      //取到id值传入路由请求中
      getDetail(this.$route.params.id).then(res=>{
        const data=res.result
        //轮播图数据获取
        this.topImage=data.itemInfo.topImages
        // 商品详情数据获取
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //商家信息
        this.shop=new Shop(data.shopInfo)
        //商品图片信息
        console.log(data)
        this.detailImages=data.detailInfo
        //商品参数信息
        this.paramInfo=new GoodsParam(data.itemParams.info,data.itemParams.rule)
        //评论信息
        console.log(data.rate.list);
        if(data.rate.cRate){
          this.commentInfo=data.rate.list
        }

      })
    },
    methods:{

    }

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
    height: calc(100% - 44px);
  }
</style>
