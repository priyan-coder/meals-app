import { CATEGORIES, MEALS } from "../data/dummy-data";

import MealList from "../components/MealList";
import React from "react";

const CategoryMealScreen = (props) => {
  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealScreen;

// Display the different meals for the selected cuisine from the Cuisine aka Category Grid
// https://koprowski.it/2020/vscode-extensions-for-react-native-javascript/

// Alternative to navigate is push
// props.navigation.push( "MealDetail" );

// The Go back button can is useful to save a snapshot of the user's stuff on the new screen should they wish to go back to prev screen
// Instead of using a save button before pressing go back
// alternative to goback is pop()
// props.navigation.goBack();

// find takes a function and executes on every element in the array

// The selected category based on two lines below is availble in the CategoryMealsScreen Component and not outside it
// const catID = props.navigation.getParam("categoryId");
// const selectedCategory = CATEGORIES.find((cat) => cat.id === catID);
// params passed down can be retrieved as props.navigation.getParam("paramName")

// We are actually interested to find the meals associated with the selected category
// every meal in the dummydata has an array of categories that it belongs to
// indexOf is more than or equal to zero if the catId is in the array of catIds of the meal object

// faced this error :
// TypeError: undefined is not an object (evaluating '_dummyData.default.find') ==> because of incorrect FlatList import
