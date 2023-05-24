import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Importando Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"   //Para importar los estilos css
import "bootstrap/dist/js/bootstrap.js"         //Para importar los js

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faUserSecret)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')





