<template>
    <div class="meal_details_container mb-5">
        <h1 class="meal_details_title p-3 mt-4">Detalles de la receta</h1>
        
        <div class="meal_details_card">
            <div class="card_details_imagen_info">
                <img src="../assets/img/chocolate-veggie-cake.jpg" alt="Veggie chocolate cake" class="meal_details_image mb-3 ">
                
                <div class="meal_details_group_info">
                    <div>
                        <strong >Category:</strong> Postre
                    </div>
                    <div>
                        <strong >Area:</strong> España
                    </div>
                    <div>
                        <strong >Tags:</strong> Chocolate
                    </div>
                </div>
            </div>

            <div class="meal_details_ingredientes_measures">
                <div class="meal_details_ingredients">
                    <h2 class="meal_details_ingredients_title">Ingredients</h2>
                    <ul>
                        <li>Ingrediente 1</li>
                        <li>Ingrediente 2</li>
                        <li>Ingrediente 3</li>
                        <li>Ingrediente 4</li>
                        <li>Ingrediente 5</li>
                    </ul>
                </div>
                <div class="meal_details_measures">
                    <h2 class="meal_details_measures_title">Measures</h2>
                    <ul>
                        <li>Measures 1</li>
                        <li>Measures 2</li>
                        <li>Measures 3</li>
                        <li>Measures 4</li>
                        <li>Measures 5</li>
                        
                    </ul>
                </div>
            </div>

            <div class="meal_details_instruccions">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa omnis eveniet voluptate nesciunt praesentium! Quis, qui architecto, animi laudantium tempora sunt est fuga adipisci perspiciatis beatae, autem facilis nihil voluptate.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa omnis eveniet voluptate nesciunt praesentium! Quis, qui architecto, animi laudantium tempora sunt est fuga adipisci perspiciatis beatae, autem facilis nihil voluptate.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa omnis eveniet voluptate nesciunt praesentium! Quis, qui architecto, animi laudantium tempora sunt est fuga adipisci perspiciatis beatae, autem facilis nihil voluptate.</p>
            </div>
        </div>

    </div>

</template>

<script setup>

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