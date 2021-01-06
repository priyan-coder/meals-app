import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";

const MealItem = (props) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
          <View style={styles.mealRow}>
            <Text>{props.title} </Text>
          </View>
          <View style={styles.mealRow}></View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
  },
});

export default MealItem;
