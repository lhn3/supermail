<template>
    <div>
      <Swiper>
        <SwiperItem v-for="(item,index) in banners" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="" @load="swiperLoad">
          </a>
        </SwiperItem>
      </Swiper>
    </div>

</template>
  import {Swiper,SwiperItem} from "components/common/swiper";

<script>
  import {Swiper,SwiperItem} from "components/common/swiper";
  export default {
    name: "HomeSwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        img:true
      }
    },
    components:{
      Swiper,
      SwiperItem
    },
    methods:{
      swiperLoad(){
        //只执行一次
        if (this.img){
          this.$emit("swiperload")
          this.img=false
        }
      }
    }
  }
</script>

<style scoped>

</style>
