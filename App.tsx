import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import store from './store/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='home'
          screenOptions={{
            headerShown:false
          }}
        >
          <Stack.Screen name='home' component={HomeScreen}/>
          <Stack.Screen name='settings' component={SettingsScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

  