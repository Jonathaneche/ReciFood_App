<template>
        <div class=" pb-4">
          <div class="card" >
            <img :src="meal.strMealThumb" :alt="meal.strMeal"  class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title">{{ meal.strMeal }}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
                <div class="d-flex justify-content-around" >
                    <a :href="meal.strYoutube" class="btn btn-primary"> Youtube</a>
                    
                    <router-link :to="{ name: 'meal-details' }" class="btn btn-primary" @click="saveMealDetails(meal.idMeal)">Detalles</router-link>
                </div>
            </div>
          </div>
        </div>

</template>

<script setup>
import { useMealsStore } from '../store/mealsStore';

const mealsStore = useMealsStore();

function saveMealDetails(id) {
  try {
    mealsStore.saveMeal(id)
  } catch (error) {
    console.error('Error retrieving meals by category:', error);
  }
}


import {defineProps } from 'vue'

defineProps({
  meal: {
    type: Object,
    required: true,
  },
})
</script>

<style lang="scss" scoped>

</style>