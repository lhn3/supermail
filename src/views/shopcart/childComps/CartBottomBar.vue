<template>
    <div class="bottom-bar">
      <div class="all-selector">
        <CheckButton @click.native="selectAll" :isSelect="isSelect"></CheckButton>
        <span class="text">全选</span>
      </div>
      <div class="total">合计：￥{{totalPrice}}</div>
      <div class="calculate" @click="calculate">去支付({{totalSelect}})</div>
    </div>
</template>

<script>
  import CheckButton from "components/content/checkButton/CheckButton";
  export default {
    name: "CartBottomBar",
    components:{
      CheckButton,
    },
    computed:{
      //计算选中商品的总价
      totalPrice(){
        return this.$store.getters.relCheck.reduce((preValue,cart)=>{
            return preValue+(cart.price)*(cart.num)
        },0).toFixed(2)       //保留两位小数
      },

      //所有选中的商品个数
      totalSelect(){
        return this.$store.getters.relCheck.length
      },

      //判断选中的商品列表中是否有的未被选中的商品
      isSelect(){
        //在有数据的情况下
        if(this.$store.getters.cartlist.length){
          //find方法找到一个符合的就返回其对象
          return !this.$store.getters.cartlist.find(i => !i.slt)
        }else {
          return false
        }
      }
    },
    methods:{
      //全选事件
      selectAll(){
        //判断全选按钮的状态
        if(this.isSelect){
          this.$store.commit('unselect_all')
        }else {
          this.$store.commit('select_all')
        }
      },
      //去支付
      calculate(){
        if(this.$store.getters.relCheck.length){
          this.$toast.show('支付成功！',2000)
        }else {
          this.$toast.show('请选择商品！',2000)
        }
      }

    }
  }
</script>

<style scoped>
  .bottom-bar{
    background-color: #EEEEEE;
    height: 50px;
    position: fixed;
    bottom: 49px;
    left: 0;
    right: 0;
    display: flex;
    text-align: center;
    z-index: 9;
    font-size: 14px;
  }
 .all-selector{
   width: 20%;
   display: flex;
   justify-content: center;
   align-items: center;
  }
  .text{
    margin-left: 5px;
  }
  .total{
    width: 60%;
    padding-right: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-tint);
    }
  .calculate{
    border-radius: 10%;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-tint);
    color: white;
  }

</style>
