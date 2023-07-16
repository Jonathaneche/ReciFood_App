<template>
    <div class="contenedor-galeria">
        <p>Tienes {{ favsMeals.length }} comidas favoritas agregadas!</p>
        <!-- <pre>{{ favsDetalles }}</pre> -->


        <div class="row p-5  bg-light wrapper" v-if= "favsMeals && favsMeals.length > 0">
          <FavMealCard v-for="favMeal in favsMeals" :key="favMeal.idMeal" :favMeal="favMeal" />
        </div>
        
        <hr>

        <button @click.prevent="currentUser">Usuario</button>
        <p v-if="mensaje">{{ mensaje }}</p>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useUsersStore } from "@/store/usersStore";
import { getAuth } from "firebase/auth";
import FavMealCard from './FavMealCard.vue';

const usersStore = useUsersStore();
const favs = ref([]);



onMounted(async () => {
    usersStore.loadFavMeals(); // Cargar los datos de favoritos desde el LocalStorage
    favs.value = usersStore.favMeals;
    usersStore.getFavs();
    usersStore.getUserName();
    
});

const favsMeals = ref([]);

watch(() => usersStore.favMealsDetalles, (newFavMealsDetalles) => {
  favsMeals.value = newFavMealsDetalles;
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



* {
  box-sizing: border-box;
}

p{
    text-align: center;
}

.contenedor-galeria{
  min-height: 100vh;
}

.wrapper {
  padding: 0 2rem;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

@media (max-width: 980px) {
  .wrapper {
    padding: 0 ;
    grid-template-columns: repeat(2, 1fr);
  }
  
}

@media (max-width: 480px) {
  .wrapper {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 0rem;
  }
}
</style>