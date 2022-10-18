import { createRouter, createWebHashHistory } from "vue-router"
import HomePage  from '@/views/HomePage'
import SolutionsPage from '@/views/SolutionsPage'
import TeamPage  from '@/views/TeamPage'
import PricesPage from '@/views/PricesPage'
import AchievementsPage from '@/views/AchievementsPage'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
        name: "HomePage",
        path: '/',
        component: HomePage 
    },
    { 
        path: '/team',
        component: TeamPage 
    },
    {
      path: '/prices',
      component: PricesPage 
    },
  ]  
})
 
export default router;
