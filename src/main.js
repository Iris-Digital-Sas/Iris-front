import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import VueCarousel from 'vue-carousel';

library.add(faArrowDown)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(VueCarousel)
.use(router)
.mount('#app')


