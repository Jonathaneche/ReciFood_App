<template>
<NavBar/>
    <div>
        <main class="container">


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
    margin-top: 2rem;
}

h1{
    text-align: center;
}

</style>