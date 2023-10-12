import './assets/main.css'
import 'aos/dist/aos.css'
import "bootstrap/dist/css/bootstrap.css"
import Vue3VideoPlayer from '@cloudgeek/vue3-video-player'
import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css'
import { createApp } from 'vue'
import App from './App.vue'
import VueTheMask from 'vue-the-mask'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import "bootstrap/dist/js/bootstrap.js"
const app = createApp(App)
app.use(Vue3VideoPlayer, {
  lang: 'en'
})

app.use(VueSweetalert2);
app.use(VueTheMask)
app.mount('#app')
