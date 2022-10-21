import { createRouter, createWebHashHistory } from "vue-router"
import HomePage  from '@/views/HomePage'
import SolutionsPage from '@/views/SolutionsPage'
import TeamPage  from '@/views/TeamPage'
import AchievementsPage from '@/views/AchievementsPage'
import PricesPage from '@/views/PricesPage'
import ContactPage  from '@/views/ContactPage'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        name: "HomePage",
        path: '/',
        component: HomePage,
        children: [{
          path:'/:id',
          name:'HomePage',
          component: HomePage
        }
      ] 
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
      path: '/achievements',
      component: AchievementsPage 
    },
    { 
      path: '/prices',
      component: PricesPage 
    },
    {
      path: '/contact',
      component: ContactPage 
    },
  ]  
})
 
export default router;
