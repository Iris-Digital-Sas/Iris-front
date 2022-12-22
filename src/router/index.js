import { createRouter, createWebHistory } from "vue-router"
import HomePage  from '@/views/HomePage'
import SolutionsPage from '@/views/SolutionsPage'
import TeamPage  from '@/views/TeamPage'
import PricesPage from '@/views/PricesPage'
import ContactPage  from '@/views/ContactPage'

const router = createRouter({
  scrollBehavior() {
     return { top: 0 }
  },
  history: createWebHistory(),
  routes: [
    {
      name: "HomePage",
      path: '/',
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
      component: PricesPage,
      children: [{
          path:'/prices/:id',
          component: PricesPage,
        }
      ] 
    },
    {
      path: '/contact',
      component: ContactPage 
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
    }
  ]  
})
 
export default router;
