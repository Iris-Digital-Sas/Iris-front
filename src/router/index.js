import { createRouter, createWebHashHistory } from "vue-router"
import HomePage  from '@/views/HomePage'
import SolutionsPage from '@/views/SolutionsPage'
import TeamPage  from '@/views/TeamPage'
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
      path: '/achievements',
      component: AchievementsPage 
  },
  ]  
})
 
export default router;
