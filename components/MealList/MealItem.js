import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { CategoryGrid } from "../CategoryGrid";

export function MealItem({ meals, comp }) {
  console.log(meals.title, comp);
  const navigation = useNavigation();
  function onPressHandler() {
    navigation.navigate("MealDetails", { mealId: meals.id });
  }
  return (
    <CategoryGrid tileheight={400} onPress={onPressHandler}>
      <Image source={{ uri: meals.imageUrl }} style={styles?.image} />
      <Text style={styles?.title}>{meals.title}</Text>
      <View style={styles.textContainer}>
        <Text style={styles?.description}>
          {meals.affordability.toUpperCase()}
        </Text>
        <Text style={styles?.description}>
          {meals.complexity.toUpperCase()}
        </Text>
        <Text style={styles?.description}>{meals.duration}m</Text>
      </View>
    </CategoryGrid>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    margin: 10,
    borderRadius: 10,
    // resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  description: {
    fontSize: 16,
    color: "#888",
    marginVertical: 5,
    textAlign: "center",
    marginHorizontal: 8,
  },
});
