import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text style={styles.text}>{color}</Text>
      <Button title="+" onPress={onIncrease} />
      <Button title="-" onPress={onDecrease} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ColorCounter;
