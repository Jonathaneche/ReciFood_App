<template>
<div class="fondo">
    <NavBar />
    <CarruselGallery />
    <h2 >Recetas </h2>
    <MultipleMealCards/>
    <div class="d-flex justify-content-center pb-5">
      <router-link :to="{ name: 'meals' }" class="btn btn-success px-5">Ver mas recetas</router-link>
    </div>
</div>
 
  
</template>

<script setup>
import NavBar from '../components/NavBar.vue';
import CarruselGallery from '../components/CarruselGallery.vue';
import MultipleMealCards from '../components/MultipleMealCards.vue';
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style lang="scss" scoped>

h2 {
    width: 90vw;
    margin: 0 auto;
    margin-top: 2rem;
    text-align: center;
  }

   .fondo{
    background-color: rgb(248,249,250);
  }
</style>