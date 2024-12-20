import { useContext } from "react";
import { useSelector } from "react-redux";
import { MealsList } from "../components/MealList/MealsList";
import { MEALS } from "../data/dummyData";
import { FavoritesContext } from "../store/context/favoritesContext";

function FavoritesScreen() {
  const { ids } = useContext(FavoritesContext);
  const favoritesMealIds = useSelector((state) => state.favoritesMeals.ids);

  const favoriteMeals = MEALS.filter((meals) =>
    favoritesMealIds.includes(meals.id)
  );
  return <MealsList displayedMeals={favoriteMeals} />;
}

export default FavoritesScreen;
