<template>
  <div class="row p-5 card-container bg-light">
    <MealCard />
    <MealCard />
    <MealCard />
    <MealCard />
    <MealCard />
    <MealCard />
    <MealCard />
    <MealCard />
  </div>

  <router-view />
</template>

<script setup>
import MealCard from '@/components/MealCard.vue'

</script>


<style lang="scss" scoped>
.card-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}




/* Estilos para dispositivos tablets */
@media (max-width: 768px) {
  .card-container {
    grid-template-columns: repeat(3, 1fr);
    gap: .5rem;
  }
}


/* Estilos para dispositivos móviles */
@media (max-width: 480px) {
  .card-container {
    grid-template-columns: repeat(1, 1fr);
  }
}


</style>
