<template>
    <div class="item">
        <div class="polaroid">
            <router-link :to="{ name: 'meal-details' }" class="imagen-enlace"
                    @click="saveMealDetails(favMeal.idMeal)"><img :src="favMeal.strMealThumb"></router-link>
            <div class="caption">{{ favMeal.strMeal }}</div>
            <hr>
            <div class="icons mb-1">
                <button class="btn-detalles"><router-link :to="{ name: 'meal-details' }"
                  @click="saveMealDetails(favMeal.idMeal)">Ver receta</router-link>
                </button>
                <div class="circle" data-bs-toggle="modal" :data-bs-target="'#exampleModal' + favMeal.idMeal">
                    <i class="fa-solid fa-trash"></i>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal -->
    <div :id="'exampleModal' + favMeal.idMeal" class="modal fade exampleModal" tabindex="-1"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div>
                    <h5 class="titulo-modal" id="exampleModalLabel">{{ userName }}, do you want to delete this meal?</h5>
                </div>
                <div class="modal-body">
                    <img class="modal-imagen-meal" :src="favMeal.strMealThumb">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" @click.prevent="deleteFromFavs(favMeal.idMeal)"
                        data-bs-dismiss="modal"> Yes </button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"> No </button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { defineProps, ref } from 'vue' 
import { useUsersStore } from '../store/usersStore'
import { useMealsStore } from '../store/mealsStore'

const usersStore = useUsersStore();
const mealsStore = useMealsStore();

const userName = ref("")
userName.value = usersStore.userName;

function deleteFromFavs(idMeal) {
  console.log("Receta borrada", idMeal)
  usersStore.deleteFavMeal(idMeal);
  window.location.reload();
    }




const saveMealDetails= (id) => {
    try {
        mealsStore.saveMeal(id)
        console.log(id)
    } catch (error) {
        console.error('Error retrieving meals by category:', error);
    }
}

defineProps({
    favMeal: {
        type: Object,
        required: true,
    },
})
</script>

<style lang="scss" scoped>

@font-face {
  font-family: 'Poor Story';
  src:url('../assets/fonts/PoorStory-Regular.ttf') format('truetype')
}

body {
  font-family: 'Poor Story', cursive;
  background: #bdffbd;
}

.icons{
  display: flex;
  justify-content:space-between;
  padding: 0 2rem;
  font-size: 1.5rem;
}

.polaroid {
  background: #fff;
  padding: 1rem;
  border-radius: .5rem;
  border: 2px solid rgba(195, 195, 195, 0.588);
  box-shadow: 0 0.9rem 1.2rem rgba(0, 0, 0, 0.2);
  
}
.polaroid img{
  max-width: 100%;
  height: auto;
}
.caption {
  font-size: 1.5rem;
  text-align: center;
}

.item {
  display: inline-block;
  filter: grayscale(10%);
}
.item .polaroid:before {
  content: '';
  position: absolute;
  z-index: -1;
  transition: all 0.35s;
}
.item:nth-of-type(4n+1) {
  color: green;
  transform: scale(0.8, 0.8) rotate(2deg);
  transition: all 0.35s;
}
.item:nth-of-type(4n+1) .polaroid:before {
  transform: rotate(6deg);
  height: 20%;
  width: 47%;
  bottom: 30px;
  right: 12px;

}
.item:nth-of-type(4n+2) {
  transform: scale(0.8, 0.8) rotate(-5deg);
  transition: all 0.35s;
}
.item:nth-of-type(4n+2) .polaroid:before {
  transform: rotate(-6deg);
  height: 20%;
  width: 47%;
  bottom: 30px;
  left: 12px;

}
.item:nth-of-type(4n+4) {
  transform: scale(0.8, 0.8) rotate(3deg);
  transition: all 0.35s;
}
.item:nth-of-type(4n+4) .polaroid:before {
  transform: rotate(4deg);
  height: 20%;
  width: 47%;
  bottom: 30px;
  right: 12px;
  
}
.item:nth-of-type(4n+3) {
  transform: scale(0.8, 0.8) rotate(-3deg);
  transition: all 0.35s;
  color: orangered;
}
.item:nth-of-type(4n+3) .polaroid:before {
  transform: rotate(-4deg);
  height: 20%;
  width: 47%;
  bottom: 30px;
  left: 12px;
  
}
.item:hover {
  filter: none;
  transform: scale(1, 1) rotate(0deg) !important;
  transition: all 0.35s;
}
.item:hover .polaroid:before {
  content: '';
  position: absolute;
  z-index: -1;
  transform: rotate(0deg);
  height: 90%;
  width: 90%;
  bottom: 0%;
  right: 5%;
  
  transition: all 0.35s;
}

.circle {
  padding: 1rem;
  color: white;
  background-color: rgb(201, 195, 195);
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.circle:hover {
  color: rgb(84, 84, 84);
}

.titulo-modal{
    padding: 1.5rem .5rem ;
    text-align: center;
}

.modal-imagen-meal{
    width: 80%;
}


.btn-detalles a{
  text-decoration: none;
  color: #4f4f4f;
  border: 0px ;
}
.btn-detalles {
 display: inline-block;
 padding: 2px 24px;
 border: 0px solid #4f4f4f;
 border-radius: 4px;
 transition: all 0.2s ease-in;
 position: relative;
 overflow: hidden;
 font-size: 1.2rem;
 font-weight: 500;
 color: black;
 z-index: 1;
}

.btn-detalles:before {
 content: "";
 position: absolute;
 left: 50%;
 transform: translateX(-50%) scaleY(1) scaleX(1.25);
 top: 100%;
 width: 140%;
 height: 180%;
 background-color: rgba(0, 0, 0, 0.05);
 border-radius: 50%;
 display: block;
 transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
 z-index: -1;
}

.btn-detalles:after {
 content: "";
 position: absolute;
 left: 55%;
 transform: translateX(-50%) scaleY(1) scaleX(1.45);
 top: 180%;
 width: 160%;
 height: 190%;
 background-color: #39bda7;
 border-radius: 50%;
 display: block;
 transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
 z-index: -1;
}

.btn-detalles:hover a{
 color: #ffffff;
}

.btn-detalles:hover:before {
 top: -35%;
 background-color: #ffd035;
 transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.btn-detalles:hover:after {
 top: -45%;
 background-color: #ffd035;
 transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}





@media (max-width: 980px) {
  .wrapper {
    grid-template-columns: repeat(2, 1fr);
  }

  .icons{
  justify-content:space-between;
  padding: 0 1rem;
  font-size: 1.5rem;
}
  
   .caption {
  font-size: 1.2rem;
  line-height: 1.5em;
}
}

@media (max-width: 480px) {
  .wrapper {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 1rem;
  }

  .caption {
  font-size: 1.2rem;
  line-height: 1.5em;
}
}



</style>