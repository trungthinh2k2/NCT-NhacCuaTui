import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login';
import DanhChoBan from './src/screens/DanhChoBan';
import KhamPha from './src/screens/KhamPha';
import CuaToi from './src/screens/CuaToi';
import Search from './src/screens/Search';
import Install from './src/screens/Install';
import Login1 from './src/screens/Login1';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export const MyContext = React.createContext();
function MyContextProvider({ children }) {
  const [user, setUser] = React.useState({});
  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  )
}

export default function App() {
  return (
    <MyContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="MyTab" component={MyTab} options={{ headerShown: false }} />
          <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
          <Stack.Screen name="Install" component={Install} options={{ headerShown: false }} />
          <Stack.Screen name="Login1" component={Login1} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </MyContextProvider>
  );
  function MyTab() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="DanhChoBan" component={DanhChoBan}
          options={{
            tabBarLabel: 'Dành cho bạn',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="chart-bar" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="KhamPha" component={KhamPha}
          options={{
            tabBarLabel: 'Khám phá',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="music-circle" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen name="CuaToi" component={CuaToi}
          options={{
            tabBarLabel: 'Của Tui',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    )
  }
}
