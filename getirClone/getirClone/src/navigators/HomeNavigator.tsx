import React from 'react'
import {createStackNavigator} from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen"
import { Image, Text } from 'react-native'
import CategoryFilterScreen from "../../src/screens/CategoryFilterScreen"
const Stack = createStackNavigator()
function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        headerStyle:{backgroundColor:"#5C3EBC",height:95},
        headerTitle: () => (
          <Image source={require("../../assets/getirlogo.png")}
          style={{
            width:70,
            height:30,
            marginLeft:140,
            marginTop:-30
          }}
          />
        )
      }}
      />
      <Stack.Screen
      name="CategoryDetails"
      component={CategoryFilterScreen}
      options={{
        headerBackTitleVisible:false,
        headerTintColor:"white",
        headerStyle:{backgroundColor:"#5C3EBC",height:125},
        headerTitle: () => (
          <Text style={{
            fontWeight:"bold",
            fontSize:15,
            color:"white",
            justifyContent:"center",
            alignItems:"center",
            marginLeft:100
          }}>Ürünler</Text>
        )
      }}
      />
    </Stack.Navigator>
  )
}

export default HomeNavigator