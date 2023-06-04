<template>
  <p v-if="mealsStore.loading">Cargando...</p>
        <!-- Comentario:
      v-if= "meals && meals.length > 0" (verificamos que existe una variable meals y que su logitud sea mayor a 0, nos mostrara el resultado)
      v-else  (de lo contrario se mostrara el div con el mensaje "No se encontraron resultados")
      -->
  <div class="row p-5 card-container bg-light" v-if= "meals && meals.length > 0">
      <MealCard v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-else-if="!mealsStore.loading">
    <p>No se encontraron resultados. Realiza otra busqueda</p>
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


</script>


<style lang="scss" scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.6rem;
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
