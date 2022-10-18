import { createRouter, createWebHashHistory } from "vue-router"
import HomePage  from '@/views/HomePage'
import SolutionsPage from '@/views/SolutionsPage'
import TeamPage  from '@/views/TeamPage'
import ContactPage  from '@/views/ContactPage'
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
      name: "ContactPage",
      path: '/contact',
      component: ContactPage 
  },
  ]  
})
 
export default router;
