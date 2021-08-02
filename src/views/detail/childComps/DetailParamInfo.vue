<template>
    <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
      <table class="info-size" v-for="(items,indexs) in paramInfo.sizes" :key="indexs">
        <tr v-for="(item,index) in items" :key="index">
          <td v-for="(i,j) in item" :key="j">{{i}}</td>
        </tr>
      </table>
      <table class="info-param">
        <tr v-for="(set,ind) in paramInfo.info" :key="ind">
          <td class="param-key">{{set.key}}</td>
          <td class="param-value">{{set.value}}</td>
        </tr>
      </table>
      <div v-if="paramInfo.image" class="info-img">
        <img :src="paramInfo.image" alt="">
      </div>
    </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props:{
      paramInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .param-info {
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
    background-color: white;
  }

  .param-info table {
    width: 100%;
    border-collapse: collapse;
  }

  .param-info table tr {
    height: 42px;
  }

  .param-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
  }

  .param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }

  .info-param {
    border-top: 1px solid rgba(0,0,0,.1);
  }

  .param-value {
    color: #eb4868
  }

  .info-img img {
    width: 100%;
  }
</style>

