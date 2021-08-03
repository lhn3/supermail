import Vue from 'vue'
import Vuex from 'vuex'

//安装
Vue.use(Vuex)

import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import modules from "./modules";

//创建对象
const store=new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations,
  actions,
  getters,
  modules
})

export default store
