import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import toast from "components/common/toast"

import FastClick from 'fastclick'
import LazyLoad from "vue-lazyload"


//使用，解决移动端300毫秒延迟
FastClick.attach(document.body)

Vue.config.productionTip = false

//弹出提醒
Vue.use(toast)
//图片懒加载
Vue.use(LazyLoad,{
  loading:require('assets/img/common/placeholder.png'),    //图片未加载出来时的占位内容(图片地址)
  // error:'加载失败',                                         //图片加载失败后的内容(图片地址)
})

new Vue({
  render: h => h(App),
  router,
  store,
  toast,
}).$mount('#app')
