<template>
  <div id="detail">
    <DetailNaVBar></DetailNaVBar>
    <DetailSwiper :topImage="topImage"></DetailSwiper>
  </div>
</template>

<script>
import {getDetail} from 'network/detail'
import DetailNaVBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
  export default {
    name: "Detail",
    components:{
      DetailNaVBar,
      DetailSwiper
    },
    data(){
      return{
        topImage:[]
      }
    },
    created() {
      //取到id值传入路由请求中
      getDetail(this.$route.params.id).then(res=>{
        //数据获取
        this.topImage=res.result.itemInfo.topImages
      })
    },
    methods:{

    }

  }
</script>

<style scoped>

</style>
