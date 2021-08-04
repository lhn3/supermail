<template>
    <div class="toast" v-show="isShow">
      <div>{{message}}</div>
    </div>
</template>

<script>
  export default {
    name: "Toast",
    // props:{
    //   message:{
    //     type:String,
    //     default(){
    //       return '无效操作X'
    //     }
    //   }
    // },
    data(){
      return{
        message:'',
        isShow:false
      }
    },
    methods:{
      show(message='默认文字',time=2000){
        this.message=message
        this.isShow=true
        setTimeout(()=>{
          this.isShow=false
          this.message=''
        },time)
      }
    }

  }
</script>

<style scoped>
  .toast{
    font-size: 1.1em;
    position: fixed;
    color: white;
    background-color: rgba(0,0,0,0.6);
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    padding: 10px 12px;
    border-radius: 5%;
    z-index: 999;
  }
</style>
