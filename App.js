import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ISS_LocationScreen from './screens/ISS_locationScreen';
import MeteorTrackerScreen from './screens/MeteorTrackerScreen';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {
  render(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
        <Stack.Screen name="ISS_Location" component={ISS_LocationScreen}></Stack.Screen>
        <Stack.Screen name="MeteorTracker" component={MeteorTrackerScreen}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
