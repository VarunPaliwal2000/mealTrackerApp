import { useLayoutEffect } from "react";
import { MealsList } from "../components/MealList/MealsList";
import { CATEGORIES, MEALS } from "../data/dummyData";

export function MealsOverviewScreen({ route, navigation }) {
  const categoryID = route.params.categoryID;

  const displayedMeals = MEALS.filter((meals) => {
    return meals.categoryIds.includes(categoryID);
  });

  useLayoutEffect(() => {
    const category = CATEGORIES.find((c) => c.id === categoryID);
    navigation.setOptions({
      title: category.title,
      headerStyle: {
        backgroundColor: category.color,
      },
    });
  }, [categoryID, navigation]);

  return <MealsList displayedMeals={displayedMeals} />;
}
