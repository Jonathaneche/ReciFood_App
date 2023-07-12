<template>
  <div class="bg-light">
    <div class="container pt-2">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="input-group">
            <input type="text" class="form-control me-2" placeholder="Buscar..." v-model="keyword"
              @keyup.enter="searchMeals" />
            <div class="input-group-append">
              <button class="btn btn-primary" type="button" @click="searchMeals"><i
                  class="fa-solid fa-magnifying-glass"></i></button>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="row p-5 card-container bg-light" v-if="meals && meals.length == []">
        <p>recetas desde el buscador</p>
        <MealCard v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
      </div> -->
      <div class="row p-5 card-container bg-light" v-if="showEmptyKeywordMessage">
        <p>Por favor, escribe algo para realizar la búsqueda.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useMealsStore } from '../store/mealsStore';

const mealsStore = useMealsStore();
const keyword = ref('');
const showEmptyKeywordMessage = ref(false);

const searchMeals = () => {
  if (!keyword.value.trim()) {
    // Si la variable keyword solo son espacio vacios, elimina los espacios y la variable queda vacia
    // Si la variable keyword está vacía, se muestra el mensaje de que se debe escribir algo
    showEmptyKeywordMessage.value = true;
    return;
  }
  showEmptyKeywordMessage.value = false;
  mealsStore.searchMeals(keyword.value);
};

// const meals =
//   mealsStore.mealsSearched;

// Observa cambios en mealsStore.meals y actualiza meals
watch(keyword, (newValue) => {
  if (newValue.match(/[a-zA-Z]/)) {
    searchMeals();
  }
});

</script>

<style lang="scss" scoped>

</style>