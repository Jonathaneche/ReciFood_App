<template>
  <p v-if="mealsStore.loading">Cargando...</p>
        <!-- Comentario:
      v-if= "meals && meals.length > 0" (verificamos que existe una variable meals y que su logitud sea mayor a 0, nos mostrara el resultado)
      v-else  (de lo contrario se mostrara el div con el mensaje "No se encontraron resultados")
      -->
  <div class="row p-5 card-container bg-light" v-if= "meals && meals.length > 0">
      <MealCard v-for="meal in getCurrentPageItems" :key="meal.idMeal" :meal="meal" />
  </div>
  <div v-else-if="!mealsStore.loading">
    <p>No se encontraron resultados. Realiza otra busqueda</p>
  </div>

    <div v-if="$route.name !== 'home'">
      <ul class="pagination" v-if="totalPages > 1">
        <li :class="{ 'disabled': currentPage === 1 }">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true" @click="previousPage">Anterior</a>
        </li>
        <li v-for="page in totalPages" :key="page" :class="{ 'active': page === currentPage }">
          <a class="page-link" href="#" @click="currentPage = page">{{ page }}</a>
        </li>
        <li :class="{ 'disabled': currentPage === totalPages }">
          <a class="page-link" href="#" @click="nextPage">Siguiente</a>
        </li>
      </ul>
    </div>

  <router-view />
</template>

<script setup>
import MealCard from '@/components/MealCard.vue'
import { useMealsStore } from '../store/mealsStore';
import { onMounted, watch, ref, computed } from 'vue';

//Variables utlizadas para mostrar meals
const mealsStore = useMealsStore();
const meals = ref([]);
meals.value = mealsStore.meals

const currentPage = ref(1);
const itemsPerPage = 12;
const totalPages = computed(() => Math.ceil(meals.value.length / itemsPerPage));

const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage);
const endIndex = computed(() => startIndex.value + itemsPerPage);
const getCurrentPageItems = computed(() => meals.value.slice(startIndex.value, endIndex.value));



onMounted(() => {
  mealsStore.getRandomMeals()
});

// Observa cambios en mealsStore.meals y actualiza meals
watch(() => mealsStore.meals, (newMeals) => {
  meals.value = newMeals;
});

watch(meals, () => {
  currentPage.value = 1;
});

// Cambiar a la página anterior
const previousPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

// Cambiar a la página siguiente
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

// Determinar si un número de página dado debe mostrarse en la paginación actual
// const isPageVisible = (page) => {
//   return Math.abs(page - currentPage.value) <= 2 || page === 1 || page === totalPages.value;
// };

</script>


<style lang="scss" scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.6rem;
}

.pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
}

.pagination li {
  margin: 0 5px;
}

.pagination li.disabled a {
  color: #888;
  cursor: not-allowed;
}

.pagination li.active a {
  color: #fff;
  background-color: $logo_color;
}

.pagination li a {
  display: block;
  padding: 6px 12px;
  color: $logo_color;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid $logo_color;
  border-radius: 4px;
}

.pagination li a:hover {
  background-color: $logo_color;
  color: #fff;
}



/* Estilos para dispositivos tablets */
@media (max-width: 850px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
    gap: .5rem;
  }
}

/* Estilos para dispositivos tablets pequeñas */
@media (max-width: 600px) {
  .card-container {
    grid-template-columns: repeat(2, 1fr);
  }
}


/* Estilos para dispositivos móviles */
@media (max-width: 480px) {
  .card-container {
    grid-template-columns: repeat(1, 1fr);
  }
}


</style>
