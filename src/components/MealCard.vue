<template>
  <div class=" pb-4 px-0 ">
    <div class="card">
      <div class="imagen-contenedor">
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="card-img-top" />
        <div class="text-end">
          <i class="fas fa-heart"></i>
        </div>
      </div>
      
      <div class="card-body">
        <h5 class="card-title">{{ meal.strMeal }}</h5>
        <p class="card-text">
          {{ meal.strInstructions }}
        </p>
        <div class="d-flex justify-content-around">
          <a :href="meal.strYoutube" ><i class="fa-brands fa-youtube youtube"></i></a>

          

            <button class="btn-detalles"><router-link :to="{ name: 'meal-details' }"
              @click="saveMealDetails(meal.idMeal)">Detalles</router-link>
            </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { useMealsStore } from '../store/mealsStore';
import { defineProps } from 'vue'

const mealsStore = useMealsStore();

function saveMealDetails(id) {
  try {
    mealsStore.saveMeal(id)
  } catch (error) {
    console.error('Error retrieving meals by category:', error);
  }
}

defineProps({
  meal: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>

.card-title{
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}


.card-text{
  font-size: .9rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.imagen-contenedor{
  position: relative;
}
.text-end {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 10px;
  color: white; /* Cambia el color del corazón según tus preferencias */
  font-size: 2rem; /* Ajusta el tamaño del corazón según tus preferencias */
}

.youtube{
    font-size: 2rem;
    color: rgba(255, 0, 0, 0.822);
}

.btn-detalles a{
  text-decoration: none;
  color: #4f4f4f;
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
 font-size: 0.9rem;
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

</style>