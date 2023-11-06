
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const KhamPha = () => {
  return (
    <View style={styles.container}>
      <Text>KhamPha</Text>
    </View>
  )
}

export default KhamPha

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
    }
})