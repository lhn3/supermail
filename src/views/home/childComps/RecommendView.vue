<template>
  <div class="recommend">
    <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="title">{{item.title}}</div>
      </a>
    </div>
  </div>

</template>

<script>
  export default {
    name: "RecommendView",
    props:{
      recommend:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    font-size: 12px;
    /*外边距：上，左右，下 */
    padding: 10px 0 15px;
    /*底部阴影*/
    border-bottom: #e7e7e7 8px solid;
  }
  .recommend-item{
    flex: 1;
    text-align: center;
  }
  .recommend-item img{
    margin-bottom: 10px;
    width: 75%;
  }
</style>
