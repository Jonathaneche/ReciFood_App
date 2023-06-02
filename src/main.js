import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { useMealsStore } from "../src/store/mealsStore";

//Importando Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; //Para importar los estilos css
import "bootstrap/dist/js/bootstrap.js"; //Para importar los js

const pinia = createPinia();

createApp(App)
  .use(pinia)
  .provide("$store", useMealsStore())
  .use(router)
  .mount("#app");
