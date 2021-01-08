import { CATEGORIES, MEALS } from "../data/dummy-data";
import { FlatList, StyleSheet, View } from "react-native";

import MealItem from "../components/MealItem";
import React from "react";

const CategoryMealsScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {
              mealId: itemData.item.id,
            },
          });
        }}
      />
    );
  };
  const catID = props.navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catID) >= 0
  );
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});

// JS object or Function since we have changing data for the selected category
CategoryMealsScreen.navigationOptions = (navigationData) => {
  catID = navigationData.navigation.getParam("categoryId");
  selectedCategory = CATEGORIES.find((cat) => cat.id === catID);
  return {
    headerTitle: selectedCategory.title,
  };
};

export default CategoryMealsScreen;

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
