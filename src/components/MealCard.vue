<template>
        <div class=" pb-4">
          <div class="card" >
            <img src="../assets/img/beef-steack.jpg" class="card-img-top" alt="beef-steack" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
                <div class="d-flex justify-content-around" >
                    <a href="#" class="btn btn-primary">Youtube</a>
                    
                    <router-link :to="{ name: 'meal-details' }" class="btn btn-primary">Detalles</router-link>
                </div>
            </div>
          </div>
        </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>