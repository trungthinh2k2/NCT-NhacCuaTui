import * as React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from './src/screens/Login';
import DanhChoBan from './src/screens/DanhChoBan';
import KhamPha from './src/screens/KhamPha';
import CuaToi from './src/screens/CuaToi';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
        <Tab.Screen name="Login" component={Login} 
          options={{
          tabBarLabel: 'Live',
          tabBarIcon: ({ focused }) => (
            // <MaterialCommunityIcons name="live" color={color} size={26} />
            <Image style={styles.icon_live} source={require('./src/img/live-streaming.png')} />
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
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  icon_live: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
  }
})
