
//构建toast插件
import Toast from "./Toast";

const obj={}

obj.install = function (Vue) {

  //创建组件
  const toastContrustor=Vue.extend(Toast)

  //new的方式，根据组件构造器，可以创建出一个组件对象
  const toast =new toastContrustor()

  //将组建构造器手动挂载到某一个元素
  toast.$mount(document.createElement('div'))

  //toast.$el对应的就是div
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast=toast;
}

export default obj
