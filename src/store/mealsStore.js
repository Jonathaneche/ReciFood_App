import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

export const useStore = defineStore("store", {
  state: () => ({
    meal: [],
    meals: [],
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredient: [],
  }),
  actions: {
    getRandomMeals() {
      return axios
        .get(`${BASE_URL}random.php`)
        .then((response) => response.data.meals)
        .catch((error) => {
          console.error("Error retrieving random meals:", error);
          throw error;
        });
    },
    getMealsByCategory(category) {
      return axios
        .get(`${BASE_URL}filter.php?c=${category}`)
        .then((response) => response.data.meals)
        .catch((error) => {
          console.error("Error retrieving meals by category:", error);
          throw error;
        });
    },
  },
});
