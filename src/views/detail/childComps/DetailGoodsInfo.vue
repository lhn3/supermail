<template>
  <div v-if="Object.keys(detailImages).length !== 0" class="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">
        {{detailImages.desc}}
      </div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{detailImages.detailImage[0].key}}</div>
    <div class="info-list">
      <img v-for="(item,index) in detailImages.detailImage[0].list" :src="item" alt="" :key="index" @load="imgLoad">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailGoodsInfo",
    props:{
      detailImages:{
        tupe:Object,
        default(){
          return {}
        }
      }
    },
  methods:{
    //定义防抖函数
    debounce(func,time){
        let res=null
        return function(...args){
            //如果res不为null，则清除计时器
            if(res) clearTimeout(res)
            res=setTimeout(()=>{
                func.apply(this,args)
            },time)
        }
    },
    //监听图片有一张图就调用一次
    imgLoad(){
    //调用防抖函数传入要执行的内容和时间
    this.debounce(this.$emit('imageLoad'),500)
    }
    },
  }
</script>

<style scoped>
  .goods-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-desc {
    padding: 0 15px;
  }

  .info-desc .start, .info-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .info-desc .start {
    float: left;
  }

  .info-desc .end {
    float: right;
  }

  .info-desc .start::before, .info-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .info-desc .end::after {
    right: 0;
  }

  .info-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .info-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .info-list img {
    width: 100%;
  }
</style>
