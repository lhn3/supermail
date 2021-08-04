<template>
  <div id="cart">
    <NavBar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
    <Scroll class="content" ref="scroll" :probeNum="3">
      <CartList></CartList>
    </Scroll>
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";
  import { mapGetters } from 'vuex'
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar";
  export default {
    name: "Shopcart",
    components:{
      NavBar,
      Scroll,
      CartList,
      CartBottomBar
    },
    data(){
      return{
        num:0
      }
    },
    computed:{
      //getters中定义的函数方法
      ...mapGetters(['cartLength'])
    }
  }
</script>

<style scoped>
   #cart{
    overflow: hidden;
    bottom: 0;
  }
  .cart-nav{
    background-color: var(--color-tint);
    color: white;
    font-size: 1.2em;
  }
  .content{
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 89px;
    left: 0;
    right: 0;
  }
</style>
