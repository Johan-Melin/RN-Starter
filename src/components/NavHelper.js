import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation';

const NavHelper = ({ navigation, dest }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(`${dest}`)}>
      <Text>Go to {dest} Demo</Text>
    </TouchableOpacity>
  );
};

export default withNavigation(NavHelper);
