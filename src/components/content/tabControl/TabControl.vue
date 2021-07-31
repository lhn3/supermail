<template>
    <div class="tab-control">
      <div v-for="(item,index) in title" class="tab-control-item" :key="index" :class="{activate:index===activate}" @click="show(index)">
        <span>{{ item }}</span>
      </div>
    </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      title:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        activate:0
      }
    },
    methods:{
      show(index){
        this.activate=index
        this.$emit('tabClick',index)
      }
    }
  }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    background-color: white;
  }
  .tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .activate{
    color: var(--color-tint);
  }
  .activate span{

    border-bottom: 3px var(--color-tint) solid;
  }
  .tab-control-item span{
    padding: 5px;
  }
</style>
