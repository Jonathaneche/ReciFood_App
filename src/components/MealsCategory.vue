<template>
    <div class="contenedor-centrar bg-light">
        <h3 class="meal_categories_title">Meal Categories</h3>
        <div class="category-container">
            <div class="category-button">
                <div class="circle">
                    <i class="fa fa-cutlery"></i>
                </div>
                <span class="category-name">Categoría</span>
            </div>
            <div class="category-button">
                <div class="circle">
                    <i class="fa fa-cutlery"></i>
                </div>
                <span class="category-name">Categoría</span>
            </div>
            <div class="category-button">
                <div class="circle">
                    <i class="fa fa-cutlery"></i>
                </div>
                <span class="category-name">Categoría</span>
            </div>
            <div class="category-button">
                <div class="circle">
                    <i class="fa fa-cutlery"></i>
                </div>
                <span class="category-name">Categoría</span>
            </div>
            <div class="category-button">
                <div class="circle">
                    <i class="fa fa-cutlery"></i>
                </div>
                <span class="category-name">Categoría</span>
            </div>
            <div class="category-button">
                <div class="circle">
                    <i class="fa fa-cutlery"></i>
                </div>
                <span class="category-name">Categoría</span>
            </div>
            <div class="category-button">
                <div class="circle">
                    <i class="fa fa-cutlery"></i>
                </div>
                <span class="category-name">Categoría</span>
            </div>
            <div class="category-button">
                <div class="circle">
                    <i class="fa fa-cutlery"></i>
                </div>
                <span class="category-name">Categoría</span>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

.meal_categories_title{
    text-align: center;
    padding: 1rem;
}

.category-container {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 1rem;
  padding: 1.5rem;
  width: 90vw;
  margin: 0 auto;
  
  
}

.category-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
}

.circle {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  transition: background-color 0.3s ease;
}


.category-name {
  font-size: 14px;
}

.category-button:hover .circle {
  background-color: #ccc;
}

/* Estilos para dispositivos móviles */
@media (max-width: 768px) {
  .category-container {
    grid-template-columns: repeat(4, 1fr);
        width: 80vw;
        margin: 0 auto;
        padding: 0;
  }
}

</style>