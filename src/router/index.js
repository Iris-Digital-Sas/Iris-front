import { createRouter, createWebHashHistory } from "vue-router"
import HomePage  from '@/views/HomePage'
import TeamPage  from '@/views/TeamPage'

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
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
  ]  
})

export default router;