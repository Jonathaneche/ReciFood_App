import { defineStore } from "pinia";
import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

export const useMealsStore = defineStore("MealsStore", {
  state: () => ({
    meal: [],
    mealId: "",
    meals: [],
    loading: false,
  }),
  actions: {
    //Guarda el id de la comida seleccionada
    async saveMeal(id) {
      this.mealId = id;
      console.log("ID******", this.mealId);
    },

    //www.themealdb.com/api/json/v1/1/lookup.php?i=52772
    //Busca la receta usando el id, y se tienea acceso a los detalles de la receta

    async getMealDetails() {
      try {
        const response = await axios.get(
          `${BASE_URL}lookup.php?i=${this.mealId}`
        );
        this.meal = response.data.meals;
        console.log("Meal Information******", this.meal);
        return this.meal;
      } catch (error) {
        console.error("Error retrieving meal details:", error);
        throw error;
      }
    },

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
      if (this.meals.length == 0) {
        while (uniqueMeals.size < 8) {
          try {
            const response = await this.getRandomMeal();
            response.forEach((meal) => uniqueMeals.add(meal));
          } catch (error) {
            console.error("Error retrieving random meals:", error);
          }
        }
        this.meals = Array.from(uniqueMeals).slice(0, 8);
      }
      this.loading = false;
    },

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
        console.log(
          "***Desde la funcion searchMeals en MealsStore***",
          this.meals
        );
        return this.meals;
      } catch (error) {
        console.error("Error retrieving searched Meals:", error);
        throw error;
      }
    },
  },
});
