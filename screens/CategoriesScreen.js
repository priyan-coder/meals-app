import { Button, StyleSheet, Text, View } from "react-native";

import React from "react";

// Cusines Grid
// CategoryMeals is the key from MealsNavigator.js , Navigator component

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
