import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { CATEGORIES } from "./data/dummyData";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import { MealDetails } from "./screens/MealDetails";
import { MealsOverviewScreen } from "./screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              headerTitle: "Categories",
              headerStyle: {
                backgroundColor: "#f4511e",
              },
              headerTitleStyle: {
                color: "#0d1b2a",
              },
              headerBackTitle: "Back",
              headerBackTitleStyle: {
                color: "white",
              },
              contentStyle: {
                backgroundColor: "#d1d1d1",
                paddingTop: 20,
                paddingBottom: 20,
              },
            }}
          />
          <Stack.Screen
            name="Meals"
            component={MealsOverviewScreen}
            // options={({ route, navigator }) => {
            //   const categoryName = route.params.categoryName;
            //   const categoryColor = route.params.categoryColor;
            //   return {
            //     title: categoryName,
            //     headerStyle: {
            //       backgroundColor: categoryColor,
            //     },
            //   };
            // }}
          />
          <Stack.Screen name="MealDetails" component={MealDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // backgroundColor: "#fff",
  },
});
