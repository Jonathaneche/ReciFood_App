<template>
  <div class="bg-light">
    <div class="container pt-2">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="input-group">
            <input type="text" class="form-control me-2" placeholder="Buscar..." v-model="keyword" @keyup.enter="searchMeals"/>
            <div class="input-group-append">
              <button class="btn btn-primary" type="button" @click="searchMeals"><i
                  class="fa-solid fa-magnifying-glass"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import { ref } from 'vue';
import { useMealsStore } from '../store/mealsStore';

const mealsStore = useMealsStore();
const keyword = ref('');

const searchMeals = () => {
  mealsStore.searchMeals(keyword.value);
  keyword.value = ''
};

// watch(keyword, () => {
//   // Aquí puedes agregar alguna lógica adicional si es necesario antes de llamar a searchMeals()
//   searchMeals();
// });
</script>

<style lang="scss" scoped>

</style>