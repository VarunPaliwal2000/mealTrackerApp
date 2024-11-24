import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { IconButton } from "../components/IconButton";
import { MEALS } from "../data/dummyData";

export function MealDetails({ route, navigation }) {
  const mealId = route.params.mealId;

  const meals = MEALS.filter((meals) => meals.id === mealId)[0];

  function headerButtonPress() {
    console.log("Pressed !!");
  }

  useLayoutEffect(() => {
    const mealDetails = MEALS.filter((meals) => meals.id === mealId)[0];
    navigation.setOptions({
      title: mealDetails.title,
      headerStyle: {
        backgroundColor: mealDetails.color,
      },
      headerRight: () => {
        return (
          <IconButton
            iconName="star"
            color={"#ffd700"}
            onPress={headerButtonPress}
            size={24}
          />
        );
      },
    });
  }, [mealId, navigation]);
  return (
    <ScrollView>
      <View style={styles?.mainComp}>
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
        <Text style={styles?.title}>{"INGREDIENTS"}</Text>
        <View style={styles?.listViewContainer}>
          {meals?.ingredients.map((i) => {
            return <Text style={styles?.listView}>{i}</Text>;
          })}
        </View>
        <Text style={styles?.title}>{"STEPS"}</Text>
        <View>
          {meals?.steps.map((i) => {
            return <Text style={styles?.listView}>{i}</Text>;
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainComp: {
    flex: 1,
    alignItems: "center",
  },
  image: {
    width: "80%",
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
  listView: {
    fontSize: 16,
    backgroundColor: "#ffd700",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 8,
    color: "#fff",
  },
  listViewContainer: {
    marginTop: 10,
    width: "80%",
    marginBottom: 20,
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});