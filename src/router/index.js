import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from 'views/home'
// import Category from 'views/category'
// import Shopcart from 'views/shopcart'
// import Profile from 'views/Profile'


const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const Shopcart = () => import('views/shopcart/Shopcart.vue')
const Profile = () => import('views/profile/Profile.vue')


Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home',
    component:Home
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/shopcart',
    component:Shopcart
  },
  {
    path:'/profile',
    component:Profile
  }
  
]

const router = new VueRouter({
  routes
})

export default router
