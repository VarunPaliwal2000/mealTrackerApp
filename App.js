import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { CategoriesScreen } from "./screens/CategoriesScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { MealDetails } from "./screens/MealDetails";
import { MealsOverviewScreen } from "./screens/MealsOverviewScreen";
import FavoritesContextProvider from "./store/context/favoritesContext";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function drawerContainer() {
  return (
    <MyDrawer.Screen
      name="Categories"
      component={CategoriesScreen}
      options={{
        headerShown: false,
      }}
    />
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#351401" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          // drawerIcon: ({ color, size }) => (
          //   <Ionicons name="list" color={color} size={size} />
          // ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={
          {
            // drawerIcon: ({ color, size }) => (
            //   <Ionicons name="star" color={color} size={size} />
            // ),
          }
        }
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Categories"
              component={DrawerNavigator}
              options={{
                headerShown: false,
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
        {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
}
