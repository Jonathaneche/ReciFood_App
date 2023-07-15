import { defineStore } from "pinia";
import axios from "axios";
import { getAuth } from "firebase/auth";

const FAV_MEALS_KEY = "favMeals";
const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

export const useUsersStore = defineStore("UsersStore", {
  state: () => ({
    favMeals: [],
    favMealsDetalles: [],
    userName: "",
    userId: "",
  }),
  actions: {
    //Esta funcion obtine los ids de recetas agregadas a favoritos
    async getFavs() {
      try {
        const user_id = getAuth().currentUser.uid;
        this.userId = user_id;
        console.log("User logged", this.userId);
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
    //Obtiene los detalles de cada receta:
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
    async getUserName() {
      try {
        const user_id = getAuth().currentUser.uid;
        const response = await axios.get(
          `http://127.0.0.1:5000/get_user_name/${user_id}`
        );
        this.userName = response.data.nombre;
        console.log("3. Nombre ", this.userName);

        return this.userName;
      } catch (error) {
        console.error(error);
      }
    },
    //elimiminar una receta favorita:
    deleteFavMeal(idMeal) {
      const user_id = getAuth().currentUser.uid;
      //console.log("Meal deleted", user_id, idMeal)
      try {
        const response = axios.delete(
          `http://127.0.0.1:5000/delete_fav_meal/${user_id}/${idMeal}`
        );

        if (response.status === 200) {
          console.log("Meal deleted correctly");
          window.location.reload();
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    },
  },
});
