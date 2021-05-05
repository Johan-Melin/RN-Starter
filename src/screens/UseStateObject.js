import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 16;

const SquareScreen = props => {
  const [color, setColor] = useState({ red: 0, green: 0, blue: 0 });
  return (
    <View>
      <ColorCounter
        onIncrease={() =>
          setColor({ ...color, red: color.red + COLOR_INCREMENT })
        }
        onDecrease={() =>
          setColor({ ...color, red: color.red - COLOR_INCREMENT })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          setColor({ ...color, green: color.green + COLOR_INCREMENT })
        }
        onDecrease={() =>
          setColor({ ...color, green: color.green - COLOR_INCREMENT })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          setColor({ ...color, blue: color.blue + COLOR_INCREMENT })
        }
        onDecrease={() =>
          setColor({ ...color, blue: color.blue - COLOR_INCREMENT })
        }
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${color.red},${color.green},${color.blue})`
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SquareScreen;
