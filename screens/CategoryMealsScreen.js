import { Button, StyleSheet, Text, View } from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import React from "react";

// Display the different meals for the selected cuisine from the Cuisine aka Category Grid

// Alternative to navigate is push
// props.navigation.push( "MealDetail" );

// The Go back button can is useful to save a snapshot of the user's stuff on the new screen should they wish to go back to prev screen
// Instead of using a save button before pressing go back
// alternative to goback is pop()
// props.navigation.goBack();

// find takes a function and executes on every element in the array

const CategoryMealsScreen = (props) => {
  const catID = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catID);
  return (
    <View style={styles.screen}>
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

export default CategoryMealsScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});
