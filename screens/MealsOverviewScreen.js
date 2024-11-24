import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { MealItem } from "../components/MealItem";
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

  function renderMeal(itemData) {
    return <MealItem meals={itemData.item} comp={"MOS"} />;
  }
  return (
    <View>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMeal}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
