import Vue from 'vue'
import VueRouter from 'vue-router'
import AllDrinks from "../components/rootComponents/AllDrinks"
import DetailDrink from "../components/rootComponents/DetailDrink"

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: AllDrinks
  },
  {
    path: '/dv:drink',
    component: DetailDrink,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
