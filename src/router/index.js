import { createRouter, createWebHashHistory } from "vue-router"
import HomePage  from '@/views/HomePage'
import TeamPage  from '@/views/TeamPage'
 
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
 ] 
})
 
export default router;
