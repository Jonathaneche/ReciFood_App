<template>
      <NavBar />
    <div class="container flex flex-col items-center mt-5">
        <h1 class="text-3xl mb-3">Sorry, this page does not extist!</h1>
        <RouterLink class="btn btn-light-green"
        :to="{name:'home'}"
        > Back to Home</RouterLink>
    </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'

</script>