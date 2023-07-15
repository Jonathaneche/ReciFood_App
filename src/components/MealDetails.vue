<template>

    <div class="meal_details_container mb-5" v-if= "mealDetails && mealDetails.length > 0">
        <div  v-for="meal in mealDetails" :key="meal.idMeal">
            <h1 class="meal_details_title p-3 mt-4">{{ meal.strMeal }}</h1>
            <div class="meal_details_card">
                <div class="card_details_imagen_info">
                    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="meal_details_image mb-3 ">
                
                    <div class="meal_details_group_info">
                        <div class="grupo">
                            <strong >Category:</strong> <span>{{ meal.strCategory }}</span>
                        </div>
                        <div class="grupo">
                            <strong >Area:</strong> <span>{{ meal.strArea }}</span>
                        </div>
                        <div class="grupo youtube">
                            <span >Ver en:</span><a :href="meal.strYoutube" target="_blank">  <i class="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
                <div class="meal_details_ingredientes_measures">
                    <div class="meal_details_ingredients">
                        <h2 class="meal_details_ingredients_title">Ingredients</h2>
                        <ul>
                        <template v-for="(el, ind) of new Array(21)" :key="ind">
                            <li v-if="meal[`strIngredient${ind + 1}`]">
                                {{ ind + 1 }}. {{ meal[`strIngredient${ind + 1}`] }}
                            </li>
                        </template>
                    </ul>
                    </div>
                    <div class="meal_details_measures">
                        <h2 class="meal_details_measures_title">Measures</h2>
                        <ul>
                            <template v-for="(el, ind) of new Array(21)" :key="ind">
                                <li v-if="meal[`strMeasure${ind + 1}`] && meal[`strMeasure${ind + 1}`].trim() !== ''">
                                    {{ ind + 1 }}. {{ meal[`strMeasure${ind + 1}`] }}
                                </li>
                            </template>
                        </ul>
                    </div>
            </div>
            </div>

            <div class="meal_details_instruccions py-3">
                <h3 >Instructions:</h3>
                <p>{{ meal.strInstructions }}</p>
            </div>
        </div>    
    </div>


</template>

<script setup>
import { useMealsStore } from '../store/mealsStore';
import {  ref, watch, onMounted } from 'vue'

const mealsStore = useMealsStore();
const mealDetails = ref([]);

mealDetails.value = mealsStore.meal

onMounted(() => {
    mealsStore.getMealDetails()
});

// Observa cambios en mealsStore.meal y actualiza mealDetails.value
watch(() => mealsStore.meal, (newMeal) => {
    mealDetails.value = newMeal;
});

</script>

<style lang="scss" scoped>

.meal_details_container{
    width: 70vw;
    margin: 0 auto;
}
.meal_details_title{
    text-align: center;
}

.meal_details_card{
    display: grid;
    grid-template-columns: 2fr 2fr;
    gap: 1rem;
}

.meal_details_image{
    width: 100%;
    border-radius: 40px 10px;
}

.meal_details_group_info{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}

.meal_details_ingredientes_measures{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.meal_details_ingredientes_measures li{
    list-style: none;
}

.meal_details_ingredients{
    display: flex;
    flex-direction: column;
}
.meal_details_measures{
    display: flex;
    flex-direction: column;
}

.meal_details_instruccions {
    grid-column-start: 1;
    grid-column-end: 4;
}

.youtube{
    display: flex;
    align-items: center;
    gap: .5rem;
}
.youtube i{
    font-size: 2rem;
    color: rgba(255, 0, 0, 0.822);
}

.youtube span{
    font-weight: 500;
}


/* Estilos para dispositivos tablets */

@media (max-width: 768px) {
    .meal_details_group_info .grupo{
        display: flex;
        flex-direction: column;
    }
}


/* Estilos para dispositivos móviles */
@media (max-width: 580px) {
    .meal_details_card{
        grid-template-columns: 1fr;
    }

    .meal_details_ingredientes_measures{
        gap: 1.5rem;
    }


}
</style>