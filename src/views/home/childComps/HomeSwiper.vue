<template>
    <div>
      <Swiper>
        <SwiperItem v-for="(item,index) in banners" :key="index">
          <a :href="item.link">
            <img :src="item.image" alt="">
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
    components:{
      Swiper,
      SwiperItem
    },
  }
</script>

<style scoped>

</style>
