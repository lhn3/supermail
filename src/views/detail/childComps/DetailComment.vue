<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">加载更多<i class="arrow-right"></i></div>
    </div>
    <div v-for="(item,index) in commentInfo" :key="index">
      <div class="info-user">
        <img :src="item.user.avatar" alt="">
        <span>{{item.user.uname}}</span>
      </div>
      <div class="info-detail">
        <p>{{item.content}}</p>
        <div class="info-other">
          <span class="data">{{item.created | showDate}}</span>
          <span>{{item.style}}</span>
        </div>
        <div class="info-imgs" v-if="item.images">
          <img src="" :alt="i" v-for="(i,j) in item.images" :key="j">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils'
  export default {
    name: "DetailComment",
    props:{
      commentInfo:{
        type:Array,
        default(){
          return []
        }
      }
    },
    filters:{
      showDate(value){
        let date = new Date(value*1000)
        // let Y = date.getFullYear() + '-';
        // let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        // let D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
        // let h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
        // let m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
        // let s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
        // return Y+M+D+h+m+s;

        return formatDate(date,'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
</script>

<style scoped>
  .comment-info{
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-header{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .header-title{
    float: left;
    font-size: 15px;
  }
  .header-more{
    float: right;
    font-size: 15px;
  }
  .info-user{
    padding: 10px 0 5px;
  }
  .info-user img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .info-user span{
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
  }
  .info-detail{
    padding: 0 5px 15px;
  }
  .info-detail p{
    font-size: 14px;
    color: #777;
    line-height: 1.5;
  }
  .info-detail .info-other{
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
  .info-other .data{
    margin-right: 8px;
  }
  .info-imgs img{
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>
