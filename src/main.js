import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import { useMealsStore } from "../src/store/mealsStore";

//Importando Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"; //Para importar los estilos css
import "bootstrap/dist/js/bootstrap.js"; //Para importar los js

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const pinia = createPinia();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK3Hn0ixGoorKi0hZv_93UNc3MEdSftYw",
  authDomain: "recifood-19188.firebaseapp.com",
  projectId: "recifood-19188",
  storageBucket: "recifood-19188.appspot.com",
  messagingSenderId: "37161104911",
  appId: "1:37161104911:web:4ebeaafee8eff6e9da957a",
};
initializeApp(firebaseConfig);

createApp(App)
  .use(pinia)
  .provide("$store", useMealsStore())
  .use(router)
  .mount("#app");
