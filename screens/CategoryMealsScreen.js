import { Button, Platform, StyleSheet, Text, View } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import React from "react";

// Display the different meals for the selected cuisine from the Cuisine aka Category Grid

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

const CategoryMealsScreen = (props) => {
  const catID = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catID);
  return (
    <View style={styles.screen}>
      <Text>The CategoryMealsScreen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Meals"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />
      <Button
        title="Go Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

// JS object or Function since we have changing data for the selected category
CategoryMealsScreen.navigationOptions = (navigationData) => {
  catID = navigationData.navigation.getParam("categoryId");
  selectedCategory = CATEGORIES.find((cat) => cat.id === catID);
  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  };
};

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});
