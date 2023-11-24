import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HeaderDanhChoBan = ({navigation}) => {
  return (
    <View style={styles.header}>
        <Text style={{color:"#ffffff", fontSize: 16, fontWeight: 700, paddingLeft: 16,}}>Dành cho bạn</Text>
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate('Search')}>
                <Image style={styles.icon_search} source={require('../src/img/danhchoban/icon_search.png')} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default HeaderDanhChoBan

const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: '#40495A',
        alignItems: 'center',
    },
    icon_search: {
        width: 42,
        height: 42,
        resizeMode: 'contain',
    },
})