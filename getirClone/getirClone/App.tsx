import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RouterNavigator from './src/navigators/RouterNavigator';

import "react-native-gesture-handler"

export default function App() {
  return (
    <NavigationContainer>
      <RouterNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop:"15%",
    backgroundColor:"#fff"
    
  },
});
