import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import {Image} from "react-native"
import HomeScreen from "../screens/HomeScreen"
const Stack = createStackNavigator()
function HomeNavigator() {
return (
<Stack.Navigator>
<Stack.Screen
name="Home"
component={HomeScreen}
options = {{
headerStyle:
headerTitle: () => (
<Image
source={require("../../assets/getirlogo.png")}
style={{width:70, height:30}}
/>
}}
/>