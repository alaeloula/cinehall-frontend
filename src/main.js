import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Swal from 'sweetalert';



createApp(App).use(router).use(Swal).mount('#app')
