import { createStackNavigator } from '@react-navigation/stack';

import React from 'react'
import { View } from 'react-native';
import Home from '../Screen/Home';
import ReadNews from '../Screen/ReadNews';
const Stack = createStackNavigator();



function HomeNavigator() {
  return (
    <Stack.Navigator
     screenOptions={{headerShown:false}}>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='readnews' component={ReadNews}/>
         
    </Stack.Navigator>
  )
}

export default HomeNavigator