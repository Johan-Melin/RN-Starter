import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const BoxScreen = () => {
  const [val, setVal] = useState(1);

  const viewStyle = {
    borderWidth: val
  };

  return (
    <View style={styles.view}>
      {/*<Text style={styles.text}>Child #1</Text>
      <Text style={styles.text}>Child #2</Text>
  <Text style={styles.text}>Child #3</Text>*/}
      <View style={{ ...styles.box, ...styles.boxOne }} />
      <View style={{ ...styles.box, ...styles.boxTwo }} />
      <View style={{ ...styles.box, ...styles.boxThree }} />
      {/*<Button
        title="Random"
        onPress={() => setVal(Math.floor(Math.random() * 10))}
      />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 120
  },
  text: {
    borderWidth: 1,
    borderColor: "red"
  },
  box: {
    width: 120,
    height: 80
  },
  boxOne: {
    backgroundColor: "red"
  },
  boxTwo: {
    alignSelf: "flex-end",
    backgroundColor: "purple"
  },
  boxThree: {
    backgroundColor: "green"
  }
});

export default BoxScreen;
