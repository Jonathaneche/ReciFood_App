<template>
  <div class="row p-5 card-container bg-light">

    <MealCard v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>

  <router-view />
</template>

<script setup>
import MealCard from '@/components/MealCard.vue'
import MealService from '@/services/MealService';
import {ref, onMounted} from 'vue';

const meals = ref([]);


onMounted(async () => {
  for (let i = 0; i < 8; i++) {
    try {
      const response = await MealService.getRandomMeals();
      meals.value.push(...response);
    } catch (error) {
      console.error('Error retrieving random meals:', error);
    }
  }
});
</script>


<style lang="scss" scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}




/* Estilos para dispositivos tablets */
@media (max-width: 768px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
    gap: .5rem;
  }
}


/* Estilos para dispositivos móviles */
@media (max-width: 480px) {
  .card-container {
    grid-template-columns: repeat(1, 1fr);
  }
}


</style>
