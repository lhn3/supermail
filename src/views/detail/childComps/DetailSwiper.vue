<template>
    <Swiper class="swipers">
      <SwiperItem v-for="(item,index) in topImage" :key="index">
        <img :src="item" alt="">
      </SwiperItem>
    </Swiper>
</template>

<script>
import { Swiper, SwiperItem} from "components/common/swiper"
  export default {
    name: "DetailSwiper",
    props:{
      topImage:{
        type:Array,
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }

  }
</script>

<style scoped>
  .swipers{
    height: 300px;
    overflow: hidden;
  }
</style>
