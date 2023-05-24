<template>
   <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/img/vegetales.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/chocolate-veggie-cake.jpg" class="d-block w-100 " alt="...">
        </div>
        <div class="carousel-item">
          <img src="../assets/img/pizza.jpg" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
            <img src="../assets/img/mousse_arandanos.jpg" class="d-block w-100" alt="...">
          </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.carousel-item img{
    height: 85vh;
    object-fit: cover;
}

/* Estilos para dispositivos móviles */
@media (max-width: 920px) {
  .carousel-item img{
    height: 65vh;
    object-fit: cover;
  }
}
</style>