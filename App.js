import React from 'react';
import Login from './src/screens/login'
import Home from './src/screens/tabs/Home'
import Map from './src/screens/tabs/Map'
import Network from './src/screens/tabs/Network'
import Profile from './src/screens/tabs/Profile'
import Icon from 'react-native-vector-icons/FontAwesome';

import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { useColorScheme, AppearanceProvider } from 'react-native-appearance'

const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const sizeIcon = 22;

const createBottomTabs = () => {
  return <MaterialBottomTabs.Navigator initialRouteName="Home"
    activeColor="#FFF"
    inactiveColor="#000">
    <MaterialBottomTabs.Screen name="Home"
      component={Home}
      options={{
        title: 'Teste',
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={sizeIcon} />
        )
      }}
    />
    <MaterialBottomTabs.Screen name="Map"
      component={Map}
      options={{
        tabBarLabel: 'Map',
        tabBarIcon: ({ color }) => (
          <Icon name="map-o" color={color} size={sizeIcon} />
        )
      }}
    />
    <MaterialBottomTabs.Screen name="Network"
      component={Network}
      options={{
        tabBarLabel: 'Network',
        tabBarIcon: ({ color }) => (
          <Icon name="wifi" color={color} size={sizeIcon} />
        )
      }}
    />
    <MaterialBottomTabs.Screen name="Profile"
      component={Profile}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <Icon name="user-circle" color={color} size={sizeIcon} />
        )
      }}
    />
  </MaterialBottomTabs.Navigator>
}

const App = () => {
  const colorScheme = useColorScheme();
  const MyTheme = {
    dark: true,
    colors: {
      primary: 'white',
      background: '#a3becb',
      card: '#172C35',
      text: 'white',
      border: 'white'
    }
  }

  return (
    <AppearanceProvider>
      <NavigationContainer theme={colorScheme == 'dark' ? DarkTheme : MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Login" options={{ title: "Wifindoor" }} component={Login} />
          <Stack.Screen name="BottomTabs" options={{ title: "Application" }} children={createBottomTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  )
}

export default App;