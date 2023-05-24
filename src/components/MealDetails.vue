<template>
    <div class="meal_details_container mb-5">
        <h1 class="meal_details_title p-3 mt-4">{{ props.meal.strMeal }}</h1>
        
        <div class="meal_details_card">
            <div class="card_details_imagen_info">
                <img s:src="meal.strMealThumb" :alt="meal.strMeal" class="meal_details_image mb-3 ">
                
                <div class="meal_details_group_info">
                    <div>
                        <strong >Category:</strong> {{ props.meal.strCategory }}
                    </div>
                    <div>
                        <strong >Area:</strong> {{ props.meal.strArea }}
                    </div>
                </div>
            </div>

            <div class="meal_details_ingredientes_measures">
                <div class="meal_details_ingredients">
                    <h2 class="meal_details_ingredients_title">Ingredients</h2>
                    <ul>
                        <template v-for="(el, ind) of new Array(21)" :key="ind">
                            <li v-if="props.meal[`strIngredient${ind + 1}`]">
                                {{ ind + 1 }}. {{ props.meal[`strIngredient${ind + 1}`] }}
                            </li>
                        </template>
                    </ul>
                </div>
                <div class="meal_details_measures">
                    <h2 class="meal_details_measures_title">Measures</h2>
                    <ul>
                        <template v-for="(el, ind) of new Array(21)" :key="ind">
                            <li v-if="props.meal[`strMeasure${ind + 1}`]">
                                {{ ind + 1 }}. {{ props.meal[`strMeasure${ind + 1}`] }}
                            </li>
                        </template>
                    </ul>
                </div>
            </div>

            <div class="meal_details_instruccions">
                <p>{{ props.meal.strInstructions }}</p>
            </div>
        </div>

    </div>

</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    meal: {
        type: Object,
        required: true,
    }
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

/* Estilos para dispositivos tablets */

@media (max-width: 768px) {

}


/* Estilos para dispositivos móviles */
@media (max-width: 480px) {
    .meal_details_card{
        grid-template-columns: 1fr;
    }

    .meal_details_ingredientes_measures{
        gap: 1.5rem;
    }


}
</style>