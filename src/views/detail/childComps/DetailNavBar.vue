<template>
  <div class="detail-navbar">
    <NavBar>
      <div slot="left" class="detail-back" @click="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class="detail-title">
        <div class="title-list" v-for="(item,index) in title" :key="index" :class="{active:current===index}"
             @click="detailClick(index)">
          {{ item }}
        </div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNaVBar",
  components:{
    NavBar,
  },
  data(){
    return{
      title:['商品','参数','评论','推荐'],
      //记录点击了标签上的哪个位置
      current:0
    }
  },
  methods:{
    //记录点击标签上的位置
    detailClick(index){
      this.current=index
    },
    //返回上一个路由
    back(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>

  .detail-title{
    /*使标签内的内容横向分布*/
    display: flex;
  }
  .title-list{
    /*横向分布后平均间距*/
    flex: 1;
  }
  .active{
    color: var(--color-tint);
  }
  .detail-back{
    margin-left: 15px;
    margin-top: 5px;
  }
</style>
