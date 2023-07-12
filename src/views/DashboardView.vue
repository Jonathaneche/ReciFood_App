<template>
<NavBar/>
    <div>
        <main class="container">
            <h1>Tus comidas favovitas estan aqui:</h1>

            <DashboardFavoritos/>


        </main>
    </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue"
import DashboardFavoritos from "@/components/DashboardFavoritos.vue";


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