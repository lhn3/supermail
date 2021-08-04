<template>
    <div class="check" :class="{active:isSelect}">
      <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
  export default {
    name: "CheckButton",
    props:{
      isSelect: {
        type:Boolean,
        default(){
          return false
        }
      }
    },
    data(){
      return{
      }
    },
    methods:{}
  }
</script>

<style scoped>
  .check{
    border-radius: 50%;
    border: solid 2px #aaa;
  }
  .active{
    background-color: var(--color-tint);
    border: solid 2px var(--color-tint);

  }
</style>
