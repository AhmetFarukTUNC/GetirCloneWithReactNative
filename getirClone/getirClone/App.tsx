import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import * as Linking from 'expo-linking';

//Navigators
import RootNavigator from "./src/navigators/RootNavigator";

//Redux
import { Provider } from "react-redux";
import store from "./src/redux/store";
import HomeScreen from "./src/screens/HomeScreen";


LogBox.ignoreAllLogs(true);

const prefix = Linking.createURL('/')
const universal = Linking.createURL('http://getir.example.com')

export default function App() {
  
  return (
    <View style={styles.container}>
      <HomeScreen/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'red',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop:38.8
  },
  });
