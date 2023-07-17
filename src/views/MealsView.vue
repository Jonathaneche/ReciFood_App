<template>
  <NavBar />
  <MealsCategory/>
  <BarraBuscador />
  <MultipleMealCards />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import MealsCategory from '@/components/MealsCategory.vue'
import BarraBuscador from '@/components/BarraBuscador.vue'
import MultipleMealCards from '@/components/MultipleMealCards.vue';
import {onMounted} from 'vue'

onMounted(() => {
  window.scrollTo(0, 0);
});
</script>

<style lang="scss" scoped>

</style>