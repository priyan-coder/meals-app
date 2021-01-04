// setup for navigation between the screens
// Pages and screens are managed on a stacks of pages ==> Data structure used = stack
// visible screen is the top of the stack and when back button is clicked, the top is popped off
// yarn add react-navigation-stack
// effectively we are using a component to help with the navigation, transition between screens
// AppContainer to wrap the stack of MealsNavigator with the meta data that react needs
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: { screen: CategoryMealsScreen },
  MealDetail: MealDetailScreen,
});

export default createAppContainer(MealsNavigator);
