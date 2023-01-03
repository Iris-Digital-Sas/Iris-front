import { createRouter, createWebHistory } from "vue-router"
import HomePage  from '@/views/HomePage'
import SolutionsPage from '@/views/SolutionsPage'
import TeamPage  from '@/views/TeamPage'
import PricesPage from '@/views/PricesPage'
import ContactPage  from '@/views/ContactPage'
import NotFoundPage  from '@/views/NotFoundPage'

const router = createRouter({
  scrollBehavior() {
     return { top: 0 }
  },
  history: createWebHistory(),
  routes: [
    {
      name: "HomePage",
      path: '/Iris-front/',
      component: HomePage
    },
    { 
      path: '/solutions',
      component: SolutionsPage 
    },
    { 
      path: '/team',
      component: TeamPage 
    },
    { 
      name:'PricesPage',
      path: '/prices',
      component: PricesPage
    },
    {
      name:'PricesPageSections',
      path: '/prices/:id',
      component: PricesPage,
      children: [{
        path:''
      }] 
    },
    {
      path: '/contact',
      component: ContactPage 
    },
    {
      name: 'NotFound',
      path: '/:pathMatch(.*)',     
      component: NotFoundPage
    }
  ]  
})
 
export default router;
