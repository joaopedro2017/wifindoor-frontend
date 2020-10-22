import React from 'react';
import Login from './src/screens/login'
import Detail from './src/detail'

import Screen1 from './src/screens/drawer/screen1'
import Screen2 from './src/screens/drawer/screen2'
import Screen3 from './src/screens/drawer/screen3'

import Tab1 from './src/screens/tabs/Tab1'
import Tab2 from './src/screens/tabs/Tab2'
import Tab3 from './src/screens/tabs/Tab3'

import {
  NavigationContainer,
    DarkTheme
} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useColorScheme, Appearance, AppearanceProvider } from 'react-native-appearance'

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

// const createTopTabs = (props) => {
//   return <MaterialTopTabs.Navigator>
//     <MaterialTopTabs.Screen name="Tab 1" component={Tab1} options={{ title: props.route.params.name }} />
//     <MaterialTopTabs.Screen name="Tab 2" component={Tab2} options={{ title: "World" }} />
//     <MaterialTopTabs.Screen name="Tab 3" component={Tab3} options={{ title: "Clima" }} />
//   </MaterialTopTabs.Navigator>
// }

const createBottomTabs = () => {
  return <MaterialBottomTabs.Navigator>
    <MaterialBottomTabs.Screen name="Home" component={Tab1} />
    <MaterialBottomTabs.Screen name="Profile" component={Tab2} />
    <MaterialBottomTabs.Screen name="Map" component={Tab3} />
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
    <Stack.Screen name="BottomTabs" children={createBottomTabs} />
    {/* <Stack.Screen name="Top Tabs" children={createTopTabs} /> */}
  </Stack.Navigator>

const App = () => {
  const colorScheme = useColorScheme();
  const MyTheme = {
    dark: true,
    colors: {
      primary: 'black',
      background: "#698FA1",
      card: 'black',
      text: 'white',
      border: 'green'
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