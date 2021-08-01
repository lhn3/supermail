<template>
  <div id="detail">
    <DetailNaVBar></DetailNaVBar>
    <DetailSwiper :topImage="topImage"></DetailSwiper>
    <DetailBaseInfo :goods="goods"></DetailBaseInfo>
  </div>
</template>

<script>
import {getDetail,Goods} from 'network/detail'
import DetailNaVBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
  export default {
    name: "Detail",
    components:{
      DetailNaVBar,
      DetailSwiper,
      DetailBaseInfo
    },
    data(){
      return{
        topImage:[],
        //如要传入对象，默认也要为对象，否则报错
        goods:{},
      }
    },
    created() {
      //取到id值传入路由请求中
      getDetail(this.$route.params.id).then(res=>{
        //轮播图数据获取
        this.topImage=res.result.itemInfo.topImages
        // 商品详情数据获取
        this.goods=new Goods(res.result.itemInfo,res.result.columns,res.result.shopInfo.services)
      })
    },
    methods:{

    }

  }
</script>

<style scoped>

</style>
