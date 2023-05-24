<template>
        <div class=" pb-4">
          <div class="card" >
            <img :src="meal.strMealThumb" :alt="meal.strMeal"  class="card-img-top"/>
            <div class="card-body">
              <h5 class="card-title">{{ meal.strMeal }}</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
                <div class="d-flex justify-content-around" >
                    <a :href="meal.strYoutube" class="btn btn-primary"> Youtube</a>
                    
                    <router-link :to="{ name: 'meal-details' }" class="btn btn-primary" :meal="meal">Detalles</router-link>
                </div>
            </div>
          </div>
        </div>

</template>

<script>
export default {
  props: {
    meal: {
      type: Object,
      required: true,
    },
  },
  // Resto de la configuración del componente
}
</script>

<style lang="scss" scoped>

</style>