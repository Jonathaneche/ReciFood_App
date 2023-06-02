<template>
    <div class="contenedor-centrar bg-light">
        <h3 class="meal_categories_title">Meal Categories</h3>
        <div class="category-container">
            <div class="category-button" @click="searchMealsByCategory('Beef')">
                <div class="circle">
                    <img src="../assets/img/iconos/beef.png" alt="Beef food icon" class="category_icono"/>
                </div>
                <span class="category-name">Beef</span>
            </div>
            <div class="category-button" @click="searchMealsByCategory('Chicken')">
                <div class="circle">
                    <img src="../assets/img/iconos/chicken.png" alt="Chicken food icon" class="category_icono"/>
                </div>
                <span class="category-name">Chicken</span>               
            </div>
            <div class="category-button" @click="searchMealsByCategory('Pork')">
                <div class="circle">
                    <img src="../assets/img/iconos/pork.png" alt="Pork food icon" class="category_icono"/>
                </div>
                <span class="category-name">Pork</span>
            </div>
            <div class="category-button" @click="searchMealsByCategory('Seafood')">
                <div class="circle">
                    <img src="../assets/img/iconos/seafood.png" alt="Seafood icon" class="category_icono"/>
                </div>
                <span class="category-name" >Seafood</span>
            </div>
            <div class="category-button" @click="searchMealsByCategory('Breakfast')">
                <div class="circle">
                    <img src="../assets/img/iconos/breakfast.png" alt="Breakfast icon" class="category_icono"/>
                </div>
                <span class="category-name" >Breakfast</span>
            </div>
            <div class="category-button" @click="searchMealsByCategory('Pasta')">
                <div class="circle">
                    <img src="../assets/img/iconos/pasta.png" alt="Pasta icon" class="category_icono"/>
                </div>
                <span class="category-name" >Pasta</span>
            </div>
            <div class="category-button" @click="searchMealsByCategory('Vegetarian')">
                <div class="circle">
                    <img src="../assets/img/iconos/vegetarian.png" alt="Vegetarian icon" class="category_icono"/>
                </div>
                <span class="category-name" >Vegetarian</span>
            </div>
            <div class="category-button " @click="searchMealsByCategory('Dessert')">
                <div class="circle">
                    <img src="../assets/img/iconos/dessert.png" alt="Dessert icon" class="category_icono"/>
                </div>
                <span class="category-name" >Dessert</span>
            </div>
        </div>
    </div>

    <!-- <div v-if="mealsByCategory">
        <hr>
            <ul>
                <li v-for="meal in mealsByCategory" :key="meal.idMeal">{{ meal.strMeal }}</li>
            </ul>
        <hr>
    </div> -->


</template>

<script setup>
import { useMealsStore } from '../store/mealsStore';
import { ref } from 'vue';

const store = useMealsStore();
const mealsByCategory = ref([])




async function searchMealsByCategory(category){ 
     try {
        const meals = await store.getMealsByCategory(category);
         mealsByCategory.value = meals;
        console.log("******* Aqui: ", meals)
    } catch (error) {
        console.error('Error retrieving meals by category:', error);
    }
}


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
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 50%;
  background-color: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  transition: background-color 0.3s ease;
}

.category_icono{
    width: 2rem;
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