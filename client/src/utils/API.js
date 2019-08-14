import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getDrinks: function(query) {
    return axios.get("/api/drinks", { params: { q: query } });
  },

  handleDrinkClick: function(query) {
    return axios.get("/api/drinks/:id", { params: { q: query } });
  },

  saveDrink: function(drinkData) {
    return axios.post("/api/drinks", drinkData);
  },
  getSavedDrinks: function(drinkData) {
    return axios.get("/api/saved", drinkData);
  }
};
