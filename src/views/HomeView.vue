<template>
  <NavBar />
  <CarruselGallery />
  <h2>Recetas </h2>
  <MultipleMealCards/>
  <div class="d-flex justify-content-center mb-5">
    <router-link :to="{ name: 'meals' }" class="btn btn-success px-5">Ver mas recetas</router-link>
  </div>
 
  
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import CarruselGallery from '../components/CarruselGallery.vue';
import MultipleMealCards from '../components/MultipleMealCards.vue';

</script>

<style lang="scss" scoped>

h2 {
    width: 90vw;
    margin: 0 auto;
    margin-top: 2rem;
    text-align: center;
  }
</style>