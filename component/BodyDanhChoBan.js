import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const BodyDanhChoBan = ({ url}) => {
  return (
    <View style={styles.body}>
        {/* <Text>Body</Text> */}
        <TouchableOpacity>
            <Image style={styles.image} source={{uri: url}} />
        </TouchableOpacity>
    </View>
  )
}

export default BodyDanhChoBan

const styles = StyleSheet.create({
    body: {
        flex: 6,
    },
    image: {
        width: 400,
        height: 380,
        resizeMode: 'contain',
    }
})