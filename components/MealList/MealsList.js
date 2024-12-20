import { FlatList, View } from "react-native";
import { MealItem } from "./MealItem";

export function MealsList({ displayedMeals }) {
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
