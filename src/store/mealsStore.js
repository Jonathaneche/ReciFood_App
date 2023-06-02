import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

export const useMealsStore = defineStore("MealsStore", {
  state: () => ({
    meal: [],
    meals: [],
    loading: false,
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredient: [],
  }),
  actions: {
    getRandomMeal() {
      return axios
        .get(`${BASE_URL}random.php`)
        .then((response) => response.data.meals)
        .catch((error) => {
          console.error("Error retrieving random meals:", error);
          throw error;
        });
    },

    async getRandomMeals() {
      this.loading = true;
      for (let i = 0; i < 8; i++) {
        try {
          const response = await this.getRandomMeal();
          if (this.meals.length < 8) {
            this.meals.push(...response);
          }
        } catch (error) {
          console.error("Error retrieving random meals:", error);
        }
      }
      this.loading = false;
    },

    async getMealsByCategory(category) {
      try {
        const response = await axios.get(`${BASE_URL}filter.php?c=${category}`);
        this.meals = response.data.meals;
        return this.meals;
      } catch (error) {
        console.error("Error retrieving meals by category:", error);
        throw error;
      }
    },
  },
});
