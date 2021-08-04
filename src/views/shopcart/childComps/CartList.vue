<template>
    <div class="cart-list">
      <CartListItem></CartListItem>
    </div>
</template>

<script>
  import CartListItem from "./CartListItem";
    export default {
        name: "CartList",
      components:{
          CartListItem,
      },
      data(){
          return{
          }
      },

    }
</script>

<style scoped>

</style>
