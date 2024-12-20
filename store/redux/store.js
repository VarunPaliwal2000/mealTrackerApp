import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./reduxFavorites";

export const store = configureStore({
  reducer: {
    favoritesMeals: favoritesReducer,
  },
});
