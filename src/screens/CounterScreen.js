import React, { useReducer, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  //state === { count: number}
  //action === { type: 'increment' || 'decrement'}

  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Text>Current Count: {state.count} </Text>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increment" })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrement" })}
      />
      <Text>Current Count: {counter}</Text>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default CounterScreen;
