<template>
  <div id="detail">
    <DetailNaVBar></DetailNaVBar>
    <DetailSwiper :topImage="topImage"></DetailSwiper>
    <DetailBaseInfo :goods="goods"></DetailBaseInfo>
    <DetailShop :shop="shop"></DetailShop>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import {getDetail,Goods,Shop} from 'network/detail'
import DetailNaVBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShop from "./childComps/DetailShop";
  export default {
    name: "Detail",
    components:{
      DetailNaVBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShop
    },
    data(){
      return{
        topImage:[],
        //如要传入对象，默认也要为对象，否则报错
        goods:{},
        //商家信息
        shop:{}
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
        console.log(data.shopInfo)
        this.shop=new Shop(data.shopInfo)
      })
    },
    methods:{

    }

  }
</script>

<style scoped>

</style>
