import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

export const useMealsStore = defineStore("MealsStore", {
  state: () => ({
    meal: [],
    meals: [],
    loading: false,
  }),
  actions: {
    //Buscar una receta ateatoria
    getRandomMeal() {
      try {
        return axios
          .get(`${BASE_URL}random.php`)
          .then((response) => response.data.meals);
      } catch (error) {
        console.error("Error retrieving random meals:", error);
        throw error;
      }
    },
    // Almacena varias recetas aleatorias en meals utilizando la accion getRandomMeals, las recetas no se repiten
    async getRandomMeals() {
      this.loading = true;
      const uniqueMeals = new Set();
      while (uniqueMeals.size < 8) {
        try {
          const response = await this.getRandomMeal();
          response.forEach((meal) => uniqueMeals.add(meal));
        } catch (error) {
          console.error("Error retrieving random meals:", error);
        }
      }
      this.meals = Array.from(uniqueMeals).slice(0, 8);
      this.loading = false;
    },
    // Almacena varias recetas aleatorias en meals utilizando la accion getRandomMeals, las recetas quizas se puedan repiten
    /*async getRandomMeals() {
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
    },*/
    //Hacer una busqueda de recetas seleccionando la categoria, y almacenarlas el resultado en meals
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
    //Hacer una busqueda de recetas usando la barra de busqueda
    async searchMeals(keyword) {
      try {
        const response = await axios.get(`${BASE_URL}search.php?s=${keyword}`);
        this.meals = response.data.meals;
        return this.meals;
      } catch (error) {
        console.error("Error retrieving searched Meals:", error);
        throw error;
      }
    },
  },
});
