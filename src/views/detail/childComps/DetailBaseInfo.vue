<template>
  <div>
  <!--  判断响应中是否有内容-->
    <div v-if="Object.keys(goods).length !== 0" class="base-info">
      <div class="title-info">{{goods.title}}</div>
      <div class="price">
        <span class="newPrice">{{goods.newPrice}}</span>
        <span class="oldPrice">{{goods.oldPrice}}</span>
        <span class="discount" v-show="goods.discount">{{goods.discount}}</span>
      </div>
      <div class="info-other">
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.columns[2]}}</span>
      </div>
      <div class="service">
        <span v-for="(item,index) in goods.services" v-show="index" :key="index" >
          <img :src="item.icon" alt="">
          <span>{{item.name}}</span>
        </span>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props:{
    goods:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
  }
}
</script>

<style scoped>
.base-info{
  margin-top: 15px;
  padding: 0 15px;
  color:#999;
  border-bottom: 5px solid #f2f5f8;
}
.title-info{
  color: #222;
  font-size: 18px;
}
.price{
  margin-top: 10px;
}
.newPrice{
  font-size: 24px;
  color: var(--color-tint);
}
.oldPrice{
  font-size: 15px;
  margin-left: 5px;
  /*删除线*/
  text-decoration: line-through;
}
.discount{
  color: white;
  font-size: 15px;
  padding: 2px 5px;
  background-color: var(--color-tint);
  /*圆角*/
  border-radius: 8px;
  margin-left: 5px;
  position: relative;
  top: -10px;
}
.info-other{
  margin-top: 10px;
  line-height: 30px;
  display: flex;
  font-size: 14px;
  border-bottom: 1px solid rgba(100,100,100,0.5);
  /*两边居中*/
  justify-content: space-between;

}
.service{
  display: flex;
  line-height: 60px;
  justify-content: space-between;
}
.service img{
  height: 15px;
  width: 15px;
  position: relative;
  top: 2px;
}
.service span{
  color: #333;
  font-size: 14px;
}

</style>
