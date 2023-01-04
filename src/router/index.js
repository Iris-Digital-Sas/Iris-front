import { createRouter, createWebHashHistory } from "vue-router"
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
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: { name: 'HomePage' }
    },
    {
      name: "HomePage",
      path: '/Iris-front/',
      component: HomePage
    },
    { 
      path: '/Iris-front/solutions',
      component: SolutionsPage 
    },
    { 
      path: '/Iris-front/team',
      component: TeamPage 
    },
    { 
      name:'PricesPage',
      path: '/Iris-front/prices',
      component: PricesPage
    },
    {
      path: '/Iris-front/contact',
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
