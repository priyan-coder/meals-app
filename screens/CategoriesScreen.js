import {
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import Colors from "../constants/Colors";
import React from "react";

// Cusines Grid
// CategoryMeals is the key from MealsNavigator.js , Navigator component
// Button onPress to guide the route for which react navigator has a back option available based on stack of pages management

// .replace is useful in the case of a login screen ==> user signed in and there's no need for a back button hereby
// props.navigation.replace("CategoryMeals");
// Even with a Go Back button it wont go back becuase theres nothing on the stack

// Display categories with a FlatList
// IMPORTANT params ==> data , renderItem
// style each item / category with a gridItem style

// Categories Screen is a component. But at the same time it is a function which takes props as a parameter. Thus it is efectively a JS object
// To the JS object we can add properties using the dot notation

// Platform API to check if Android or IOS

// import { FlatList } from "react-native-web";
// import { TouchableOpacity } from "react-native-gesture-handler";
// The above two import statements were the cause of the error ==> Invariant Violation: View config getter callback for component `div` must be a function (received `undefined`). Make sure to start component names with a capital letter.

const CategoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
        }}
      >
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories",
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
};

const styles = StyleSheet.create({
  screen: { flex: 1, justifyContent: "center", alignItems: "center" },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});

export default CategoriesScreen;
