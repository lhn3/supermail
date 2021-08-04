<template>
  <div id="cart">
    <NavBar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </NavBar>
    <Scroll class="content" ref="scroll" :probeNum="3">
    <ul>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
      <li>1111111111111</li>
    </ul>
    </Scroll>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll";
  import { mapGetters } from 'vuex'
  export default {
    name: "Shopcart",
    components:{
      NavBar,
      Scroll
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
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
