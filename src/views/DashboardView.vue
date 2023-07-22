<template>
<NavBar/>
    <div class="fondo">
        <main class="container pt-3">


            <FavsMealsGallery/>


        </main>
    </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue"
import FavsMealsGallery from "@/components/FavsMealsGallery.vue";

import { onMounted } from 'vue'

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>


<style lang="scss" scoped>

.container{
    width: 90vw;
    margin: 0 auto;
    
}

h1{
    text-align: center;
}

   .fondo{
    background-color: rgb(248,249,250);
  }
</style>