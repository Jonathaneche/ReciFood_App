<template>
<NavBar/>
    <div>
        <main class="container">
            <h1>Aqui estaran las tarjetas con las comidas favoritas de los usuarios</h1>



      <pre>{{ favs }}</pre>


        </main>

        <button @click.prevent="currentUser">Usuario</button>
        <p v-if="mensaje">{{ mensaje }}</p>
    </div>
</template>

<script setup>
import NavBar from "../components/NavBar.vue"
import { getAuth } from "firebase/auth";
import { ref, onMounted } from 'vue';
import axios from 'axios';

onMounted(getFavs);

async function getFavs() {
    try {
        const user_id = getAuth().currentUser.uid;
        const response = await axios.get(`http://127.0.0.1:5000/get_all_favs/${user_id}`);
        const favsData = response.data.data;
        console.log(favsData); // Imprime los idMeal en la consola
        favs.value = favsData;
    } catch (error) {
        console.error(error);
    }
}


const favs = ref([]);
const mensaje = ref("");

function currentUser() {
    const usuario = getAuth().currentUser.uid;
    mensaje.value = usuario;
}

</script>


<style lang="scss" scoped>

.container{
    width: 90vw;
    margin: 0 auto;
    margin-top: 2rem;
}

</style>