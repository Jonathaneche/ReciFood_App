import { defineStore } from "pinia";
import axios from "axios";
import { getAuth } from "firebase/auth";

const FAV_MEALS_KEY = "favMeals";
const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

export const useUsersStore = defineStore("UsersStore", {
  state: () => ({
    favMeals: [],
    favMealsDetalles: [],
  }),
  actions: {
    //Esta funcion obtine los ids de recetas agregadas a favoritos
    async getFavs() {
      try {
        const user_id = getAuth().currentUser.uid;
        const response = await axios.get(
          `http://127.0.0.1:5000/get_all_favs/${user_id}`
        );
        this.favMeals = response.data.data;
        console.log("1. Funcion getFavs ", this.favMeals);
        await this.getMealDetails(); // Llamar a getMealDetails después de actualizar favMeals
        return this.favMeals;
      } catch (error) {
        console.error(error);
      }
    },
    //Esta funcion agrega los id de las recetas localStorage
    saveFavMeals() {
      try {
        localStorage.setItem(FAV_MEALS_KEY, JSON.stringify(this.favMeals));
      } catch (error) {
        console.error("Error al guardar los datos en el LocalStorage:", error);
      }
    },
    //Esta funcion carga los ids almacenados en localStorage
    loadFavMeals() {
      const favMealsData = localStorage.getItem(FAV_MEALS_KEY);
      if (favMealsData) {
        this.favMeals = JSON.parse(favMealsData);
      }
    },
    async getMealDetails() {
      try {
        const mealDetails = [];

        if (Array.isArray(this.favMeals) && this.favMeals.length > 0) {
          for (const meal of this.favMeals) {
            const mealId = meal.idMeal;
            const response = await axios.get(
              `${BASE_URL}lookup.php?i=${mealId}`
            );
            const mealDetail = response.data.meals[0];
            mealDetails.push(mealDetail);
          }
        }

        this.favMealsDetalles = mealDetails;
        console.log("Funcion getMealDetails Meal Details", mealDetails);
        return this.favMealsDetalles;
      } catch (error) {
        console.error("Error retrieving meal details:", error);
        throw error;
      }
    },
  },
});