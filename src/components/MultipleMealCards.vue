<template>
  <div class="row p-5 card-container bg-light" v-if="meals">
      <MealCard v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>



  <router-view />
</template>

<script setup>
import MealCard from '@/components/MealCard.vue'
import { useMealsStore } from '../store/mealsStore';
import { onMounted, watch, ref } from 'vue';

const mealsStore = useMealsStore();
const meals = ref([]);

meals.value = mealsStore.meals

onMounted(() => {
  mealsStore.getRandomMeals()
});


// Observa cambios en mealsStore.meals y actualiza meals
watch(() => mealsStore.meals, (newMeals) => {
  meals.value = newMeals;
});





// // Define el estado que deseas observar
// const count = store.count;

// // Usa watch para observar cambios en el estado


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
