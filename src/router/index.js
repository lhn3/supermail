import Vue from 'vue'
import Router from 'vue-router'

//懒加载
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')
const Shopcart = () => import('../views/shopcart/Shopcart')

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component:Home,
    },
    {
      path: '/category',
      name: 'category',
      component:Category,
    },
    {
      path: '/profile',
      name: 'profile',
      component:Profile,
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component:Shopcart,
    }
  ]
})
