import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

// Cusines Grid
// CategoryMeals is the key from MealsNavigator.js , Navigator component
// Button onPress to guide the route for which react navigator has a back option available based on stack of pages management

// .replace is useful in the case of a login screen ==> user signed in and there's no need for a back button hereby
// props.navigation.replace("CategoryMeals");
// Even with a Go Back button it wont go back becuase theres nothing on the stack

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text> The CategoriesScreen !</Text>
      <Button
        title="Go To Meals"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
        }}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
});
