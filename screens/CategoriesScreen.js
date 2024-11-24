import { FlatList, StyleSheet, Text } from "react-native";
import { CategoryGrid } from "../components/CategoryGrid";
import { CATEGORIES } from "../data/dummyData";

export function CategoriesScreen({ navigation }) {
  function renderCategoryList(itemData) {
    function onPressHandler() {
      navigation.navigate("Meals", {
        categoryID: itemData.item.id,
        categoryName: itemData.item.title,
        categoryColor: itemData.item.color,
      });
    }
    return (
      <CategoryGrid
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={onPressHandler}
        tileheight={150}
      >
        <Text style={styles.title}>{itemData.item.title}</Text>
      </CategoryGrid>
    );
  }

  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={renderCategoryList}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
