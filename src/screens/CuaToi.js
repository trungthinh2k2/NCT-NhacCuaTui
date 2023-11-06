import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CuaToi = () => {
  return (
    <View style={styles.container}>
      <Text>CuaToi</Text>
    </View>
  )
}

export default CuaToi

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
    }
})