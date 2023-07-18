<template>
  <div class=" pb-4 px-0 ">
    <div class="card">
      <div class="imagen-contenedor">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="card-img-top" />
        <div class=" circle" ref="circleRef">
          <i class="fas fa-heart " @click.prevent="isUserLogged(meal.idMeal)"></i>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" 
          arial-label= "Me gusta" roll= "img"
          fill="white"  viewBox="0 0 24 24"
          ref="iconRef">
          <title>Me gusta</title>
        <path d="M12 21.35L3.54 12.88C2.35 11.69 1.7 10.2 1.7 8.59C1.7 5.92 3.92 3.7 6.59 3.7C8.2 3.7 9.69 4.35 10.88 5.54L12 6.76L13.12 5.54C14.31 4.35 15.8 3.7 17.41 3.7C20.08 3.7 22.3 5.92 22.3 8.59C22.3 10.2 21.65 11.69 20.46 12.88L12 21.35Z"/>
        </svg>
        
      </div>

      
      
      <div class="card-body">
        <h5 class="card-title">{{ meal.strMeal }}</h5>
        <!-- <p class="card-text">
          {{ meal.strInstructions }}
        </p> -->
        <div class="d-flex justify-content-around">

            <button class="btn-detalles"><router-link :to="{ name: 'meal-details' }"
              @click="saveMealDetails(meal.idMeal)">Ver receta</router-link>
            </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useMealsStore } from '../store/mealsStore';
import { useUsersStore } from "@/store/usersStore";
import { getAuth } from "firebase/auth" // Para ver el id del usuario registrado
import { defineProps } from 'vue'
import { ref } from 'vue';
import { onAuthStateChanged } from 'firebase/auth';
import axios from "axios";


const mealsStore = useMealsStore();
const usersStore = useUsersStore();

let auth;

function isUserLogged(meal_id) {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      usersStore.isLoggedIn = true; // Actualizar el estado isLoggedIn en el store
      toggleLike();
      AddToFavDB(meal_id);
      console.log("Puedes agregar recetas")
    } else {
      usersStore.isLoggedIn = false; // Actualizar el estado isLoggedIn en el store
    }
  });
}




function saveMealDetails(id) {
  try {
    mealsStore.saveMeal(id)
    console.log(id)
  } catch (error) {
    console.error('Error retrieving meals by category:', error);
  }
}



const circleRef = ref(null);
const iconRef = ref(null);

function toggleLike() {
  circleRef.value.classList.toggle('clicked');
  if (circleRef.value.classList.contains('clicked')) {
    iconRef.value.classList.add('like');
  }
  setTimeout(() => {
    iconRef.value.classList.remove('like');
  }, 1500);
}


function AddToFavDB(meal_id) {

  const user_id = getAuth().currentUser.uid;
  // Crear el objeto de datos a enviar al servidor

  console.log("Comida agregada", meal_id, user_id)

  //Descomentar para habilitar agregar a favoritos

  const favMealData = {
    user_id,
    meal_id   
    
  };
  console.log(favMealData)

  // Realiza una solicitud POST al backend Flask para agregar el favorito
  axios.post('http://127.0.0.1:5000/add_favorite',  favMealData )
    .then(response => {
      console.log(response.data); 
    })
    .catch(error => {
      console.error(error); 
    });
}


defineProps({
  meal: {
    type: Object,
    required: true,
  },
})


</script>

<style lang="scss" scoped>
.card-title {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-text {
  font-size: .9rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.imagen-contenedor {
  position: relative;
}

.imagen-contenedor svg {
  position: absolute;
  width: 150px;
  pointer-events: none;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.imagen-contenedor svg.like {
  animation: 2s like ease-in-out;
  opacity: 1; 
}

@keyframes like {
  0% {
    opacity: 0;
    scale: 0;
  }
  15% {
    opacity: 1;
    scale: 1.2;
  }
  30% {
    scale: .95;
  }
  45%, 80% {
    scale: 1;
  }
  100% {
    scale: 0;
    opacity: 1;
  }
}

.circle {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem;
  color: white; /* Cambia el color del corazón según tus preferencias */
  font-size: 1.5rem; /* Ajusta el tamaño del corazón según tus preferencias */
  background-color: rgb(201, 195, 195);
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: .6rem;
}

.circle:hover {
  color: red;
}

.circle.clicked {
  color: red;
}

.btn-detalles a{
  text-decoration: none;
  //color: #4f4f4f;
  color: orangered;
  border: 0px ;
}
.btn-detalles {
 display: inline-block;
 padding: 2px 24px;
 border: 0px solid #4f4f4f;
 border-radius: 4px;
 transition: all 0.2s ease-in;
 position: relative;
 overflow: hidden;
 font-size: 1.5rem;
 color: black;
 z-index: 1;
}

.btn-detalles:before {
 content: "";
 position: absolute;
 left: 50%;
 transform: translateX(-50%) scaleY(1) scaleX(1.25);
 top: 100%;
 width: 140%;
 height: 180%;
 background-color: rgba(0, 0, 0, 0.05);
 border-radius: 50%;
 display: block;
 transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
 z-index: -1;
}

.btn-detalles:after {
 content: "";
 position: absolute;
 left: 55%;
 transform: translateX(-50%) scaleY(1) scaleX(1.45);
 top: 180%;
 width: 160%;
 height: 190%;
 background-color: #39bda7;
 border-radius: 50%;
 display: block;
 transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
 z-index: -1;
}

.btn-detalles:hover a{
 color: #ffffff;
}

.btn-detalles:hover:before {
 top: -35%;
 background-color: #ffd035;
 transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.btn-detalles:hover:after {
 top: -45%;
 background-color: #ffd035;
 transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

/* Estilo para el icono de favoritos */



</style>