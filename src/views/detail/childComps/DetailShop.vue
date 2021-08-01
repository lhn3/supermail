<template>
  <div v-if="Object.keys(shop).length !==0" class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-middle">
<!--      左边-->
      <div class="shop-left">
        <div class="shop-sell">
          <div class="shop-sell-num">{{shop.sell | selles}}万</div>
          <div class="shop-sell-text">总销量</div>
        </div>
        <div class="shop-goods">
          <div class="shop-goods-num">{{shop.goods}}</div>
          <div class="shop-goods-text">全部宝贝</div>
        </div>
      </div>

<!--      右边-->
      <div class="shop-right">
        <table cellpadding="0" cellspacing="8">
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{item.name}}</td>
            <td class="better" :class="{isbetter:item.isBetter}">{{item.score}}</td>
            <td class="better" :class="{isbetter:item.isBetter}">{{item.isBetter | abs}}</td>
          </tr>
        </table>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props:{
    shop:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return{
      // isbetter:false
    }
  },
  filters:{
    selles(num){
       return (num/10000).toFixed(1);
    },
    //评价过滤器
    abs(res){
      return res?'高':'低'
    }
  }
}
</script>

<style scoped>
.shop-top{
  display: flex;
  /*border-top: #e7e7e7 solid 5px;*/
  padding: 25px 8px;
}
.shop-top img{
  margin-left: 10px;
  width: 50px;
  height: 50px;
  border-radius: 90%;
  border: solid #bbbbbb 0.5px;
}
.shop-top span{
  color: #555555;
  font-size: 20px;
  margin: 15px 15px;
}
.shop-middle{
  display: flex;
  align-items: center;
}
.shop-left{
  display: flex;
  justify-content: space-between;
  text-align: center;
  flex: 1;
  padding-left: 60px;
  padding-right: 30px;
  color: #222222;
  border-right: solid 1px #bbbbbb;
}
.shop-sell-num, .shop-goods-num{
  font-size: 25px;
}

.shop-right{
  color: #222222;
  font-size: 13px;
  padding-left: 30px;
  padding-right: 10px;
}

.better{
  color: green;
}
.isbetter{
  color: red;
}
</style>
