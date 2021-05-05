import React, { useState } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Button
        title="Random Color"
        onPress={() => setColors([...colors, randomRgb()])}
      />
      <FlatList
        keyExtractor={item => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={styles.wrapper}>
              <View
                style={{ height: 100, width: 100, backgroundColor: item }}
              />
              <Text>{item}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default ColorScreen;
