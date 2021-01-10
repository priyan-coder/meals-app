import { Button, StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderComponent";
import { MEALS } from "../data/dummy-data";
import React from "react";

const MealDetailScreen = (props) => {
  const mealId = props.navigation.getParam("mealId");

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam("mealId");
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => {
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourite"
          iconName="ios-star"
          onPress={() => {
            console.log("Mark as Fav");
          }}
        />
      </HeaderButtons>;
    },
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;

// Each Meal's details ==> recipe
// HeaderLeft is the back button usually
// the title of the item is used as a key for that item
// you can have multiple items within the header buttons component ==> make sure the title name is different
// Deprecation in 'navigationOptions':
// - 'headerRight: <SomeElement />' will be removed in a future version. Use 'headerRight: () => <SomeElement />' instead
// made the change
