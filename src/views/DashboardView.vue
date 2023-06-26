<template>
<NavBar/>
    <div>
        <main class="container">
            <h1>Aqui estaran las tarjetas con las comidas favoritas de los usuarios</h1>
        </main>

        <button @click.prevent="currentUser">Usuario</button>
        <p v-if="mensaje">{{ mensaje }}</p>
    </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue"
import { getAuth } from "firebase/auth";
import { ref } from 'vue'

const mensaje = ref("");

 function currentUser() {
    const usuario = getAuth().currentUser.uid;
    mensaje.value = usuario
}
</script>

<style lang="scss" scoped>

.container{
    width: 90vw;
    margin: 0 auto;
    margin-top: 2rem;
}

</style>