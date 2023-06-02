import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

export default {
  getRandomMeals() {
    return axios
      .get(`${BASE_URL}random.php`)
      .then((response) => response.data.meals)
      .catch((error) => {
        console.error("Error retrieving random meals:", error);
        throw error;
      });
  },
  getMealsByCategory() {
    return axios
      .get(`${BASE_URL}filter.php?c=${category}`)
      .then((response) => response.data.meals)
      .catch((error) => {
        console.error("Error retrieving meals by category:", error);
        throw error;
      });
  },

  // Otras funciones para obtener detalles de una comida, buscar por categoría, etc.
};
