<template>
    <div>
        <pre>Tienes {{ favsDetalles.length }} comidas favoritas agregadas!</pre>
        <pre>{{ favsDetalles }}</pre>
        

        <button @click.prevent="currentUser">Usuario</button>
        <p v-if="mensaje">{{ mensaje }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useUsersStore } from "@/store/usersStore";
import { getAuth } from "firebase/auth";

const usersStore = useUsersStore();
const favs = ref([]);



onMounted(async () => {
    usersStore.loadFavMeals(); // Cargar los datos de favoritos desde el LocalStorage
    favs.value = usersStore.favMeals;
    usersStore.getFavs();
    usersStore.getUserName();
    
});

const favsDetalles = ref([]);

watch(() => usersStore.favMealsDetalles, (newFavMealsDetalles) => {
    favsDetalles.value = newFavMealsDetalles;
});



watch(() => usersStore.favMeals, (newFavMeals) => {
    favs.value = newFavMeals;
    
});










const mensaje = ref("");

function currentUser() {
    const usuario = getAuth().currentUser.uid;
    mensaje.value = usuario;
}
</script>

<style lang="scss" scoped>

</style>