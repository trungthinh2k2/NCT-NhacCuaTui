// import * as React from 'react';
// import { Text, View, Image, StyleSheet} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import Login from './src/screens/Login';
// import DanhChoBan from './src/screens/DanhChoBan';
// import KhamPha from './src/screens/KhamPha';
// import CuaToi from './src/screens/CuaToi';
// import Search from './src/screens/Search';

// const Tab = createMaterialBottomTabNavigator();


// export default function App() {
//   return (
    
    
//     <NavigationContainer>
      
//       <Tab.Navigator>
//         <Tab.Screen name="DanhChoBan" component={DanhChoBan} 
//         options={{
//           tabBarLabel: 'Dành cho bạn',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="chart-bar" color={color} size={26} />
//           ),                                                    
//         }}
//         />
        
//         <Tab.Screen name="KhamPha" component={KhamPha}
//         options={{
//           tabBarLabel: 'Khám phá',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="music-circle" color={color} size={26} />
//           ),                                                    
//         }}
//         />

//         <Tab.Screen name="Search" component={Search} options={{tabBarVisible: false,}}/>

//         <Tab.Screen name="Login" component={Login} 
//           options={{
//           tabBarLabel: 'Live',
//           tabBarIcon: ({ focused }) => (
//             <Image style={styles.icon_live} source={require('./src/img/live-streaming.png')} />
//           ),                                                    
//         }}
//         />
//         <Tab.Screen name="CuaToi" component={CuaToi} 
//         options={{
//           tabBarLabel: 'Của Tui',
//           tabBarIcon: ({ color }) => (
//             <MaterialCommunityIcons name="account" color={color} size={26} />
//           ),                                                    
//         }}
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
// const styles = StyleSheet.create({
//   icon_live: {
//     width: 50,
//     height: 30,
//     resizeMode: 'contain',
//   }
// })


import * as React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/screens/Login';
import DanhChoBan from './src/screens/DanhChoBan';
import KhamPha from './src/screens/KhamPha';
import CuaToi from './src/screens/CuaToi';
import Search from './src/screens/Search';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MyTab" component={MyTab} options={{ headerShown: false }} />
        <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
      </Stack.Navigator>

    </NavigationContainer>
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


        <Tab.Screen name="Login" component={Login} 
          options={{
          tabBarLabel: 'Live',
          tabBarIcon: ({ focused }) => (
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
    )
  }
}


const styles = StyleSheet.create({
  icon_live: {
    width: 50,
    height: 30,
    resizeMode: 'contain',
  }
})

