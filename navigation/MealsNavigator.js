// setup for navigation between the screens
// Pages and screens are managed on a stacks of pages ==> Data structure used = stack
// visible screen is the top of the stack and when back button is clicked, the top is popped off
// yarn add react-navigation-stack
// effectively we are using a component to help with the navigation, transition between screens
// AppContainer to wrap the stack of MealsNavigator with the meta data that react needs

// Any of the screens under the navigator component from react-navigator gets a special prop

// Instead of specifiying the navigationOptions at each screen after declaring its component
// Adding it under MealsNavigator is better

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import Colors from "../constants/Colors";
import MealDetailScreen from "../screens/MealDetailScreen";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const MealsNavigator = createStackNavigator({
  Categories: {
    screen: CategoriesScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  },
  CategoryMeals: {
    screen: CategoryMealsScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "white" : Colors.primaryColor,
    },
  },
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);
