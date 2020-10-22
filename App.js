import React from 'react';
import Login from './src/screens/login'
import Detail from './src/detail'

import Screen1 from './src/screens/drawer/screen1'
import Screen2 from './src/screens/drawer/screen2'
import Screen3 from './src/screens/drawer/screen3'

import Tab1 from './src/screens/tabs/Tab1'
import Tab2 from './src/screens/tabs/Tab2'
import Tab3 from './src/screens/tabs/Tab3'

import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { useColorScheme, Appearance, AppearanceProvider } from 'react-native-appearance'
import Icon from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const sizeIcon = 22;

const createBottomTabs = () => {
  return <MaterialBottomTabs.Navigator initialRouteName="Home"
    activeColor="#FFF"
    inactiveColor="#000">
    <MaterialBottomTabs.Screen name="Home"
      component={Tab1}
      options={{
        title: 'Teste',
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={sizeIcon} />
        )
      }}
    />
    <MaterialBottomTabs.Screen name="Map"
      component={Tab3}
      options={{
        tabBarLabel: 'Map',
        tabBarIcon: ({ color }) => (
          <Icon name="map-o" color={color} size={sizeIcon} />
        )
      }}
    />
    <MaterialBottomTabs.Screen name="Net"
      component={Tab3}
      options={{
        tabBarLabel: 'Net',
        tabBarIcon: ({ color }) => (
          <Icon name="wifi" color={color} size={sizeIcon} />
        )
      }}
    />
    <MaterialBottomTabs.Screen name="Profile"
      component={Tab2}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <Icon name="user-circle" color={color} size={sizeIcon} />
        )
      }}
    />
  </MaterialBottomTabs.Navigator>
}

const createHomeStack = () =>
  <Stack.Navigator>
    <Stack.Screen name="Login"
      component={Login}
      options={{ title: "Wifindoor" }} />
    <Stack.Screen name="Detail"
      component={Detail}
      options={{ title: "Detail Screen" }} />
    <Stack.Screen name="BottomTabs" options={{ title: "Application" }} children={createBottomTabs} />
  </Stack.Navigator>

const App = () => {
  const colorScheme = useColorScheme();
  const MyTheme = {
    dark: true,
    colors: {
      primary: 'white',
      background: '#a3becb',
      card: '#355968',
      text: 'white',
      border: 'white'
    }
  }

  const linking = {
    prefixes: ['recipes://'],
    config: {
      screens: {
        Login: 'login/:title',
        Detail: 'detail/:food'
      }
    }
  }

  return (
    <AppearanceProvider>
      <NavigationContainer theme={colorScheme == 'dark' ? DarkTheme : MyTheme}
        linking={linking}
      >
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={createHomeStack} />
          <Drawer.Screen name="Contacts" component={Screen1} />
          <Drawer.Screen name="Favorites" component={Screen2} />
          <Drawer.Screen name="Settings" component={Screen3} />
        </Drawer.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  )
}

export default App;