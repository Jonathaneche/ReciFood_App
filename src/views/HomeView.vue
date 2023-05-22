<template>
  <NavBar />
  <CarruselGallery />
  <MealsCategory/>
  <MultipleMealCards/>
  <div class="d-flex justify-content-center">
    <router-link :to="{ name: 'meals' }" class="btn btn-success px-5">Ver mas recetas</router-link>
  </div>
  <h1>Contenido adicional</h1>
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import CarruselGallery from '../components/CarruselGallery.vue';
import MealsCategory from '../components/MealsCategory.vue';
import MultipleMealCards from '../components/MultipleMealCards.vue';

</script>

<style lang="scss" scoped>

</style>