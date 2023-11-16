import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Login from './Login'

function CuaToi (){
  return (
    <View style={styles.container}>
      <Login />
    </View>
  )
}

export default CuaToi

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: { 
      flex: 1,
      backgroundColor: 'red',
    },
    body: {
      flex: 6,
      backgroundColor: 'blue',
    },    

})