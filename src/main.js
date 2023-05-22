import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Importando Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"   //Para importar los estilos css
import "bootstrap/dist/js/bootstrap.js"         //Para importar los js

createApp(App).use(router).mount('#app')
