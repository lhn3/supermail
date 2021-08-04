<template>
    <div class="cart-list">
      <CartListItem v-for="(item,index) in cartlist" :key="index" :product="item"></CartListItem>
    </div>
</template>

<script>
  import CartListItem from "./CartListItem";
  import {mapGetters} from "vuex"
  export default {
    name: "CartList",
    components:{
      CartListItem,
    },
    data(){
        return{
        }
    },
    computed:{
      ...mapGetters(["cartlist"])
    },
    methods:{

    }

  }
</script>

<style scoped>

</style>
