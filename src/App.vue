<template>
  <router-view/>
  <BotonSubir/>
  <FooterComp/>
</template>


<script setup>
import BotonSubir from "./components/BotonSubir"
import FooterComp from "./components/FooterComp.vue";
</script>





<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>