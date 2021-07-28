<template>
  <div id="tab-bar">
  <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
    /*标签全部横向展示*/
  #tab-bar{
    display: flex;
    background: #F5F5F5;

    /*放到最下面*/
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    /*盒子阴影：颜色 x轴偏移 y轴偏移 上下偏移渐变*/
    /*rgba(红，黄，蓝，透明度)*/
    box-shadow: rgba(100,100,100,0.2) 0 -3px 1px  ;
  }

</style>
