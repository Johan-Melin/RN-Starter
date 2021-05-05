import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import NavHelper from "../components/NavHelper";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Components!"
      />
      <NavHelper dest="List" />
      <NavHelper dest="Image" />
      <NavHelper dest="Counter" />
      <NavHelper dest="Color" />
      <NavHelper dest="Square" />
      <NavHelper dest="Text" />
      <NavHelper dest="Box" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
