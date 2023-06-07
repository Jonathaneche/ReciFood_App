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
          <a :href="meal.strYoutube" class="btn btn-primary"> Youtube</a>

          <router-link :to="{ name: 'meal-details' }" class="btn btn-primary"
            @click="saveMealDetails(meal.idMeal)">Detalles</router-link>
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

</style>