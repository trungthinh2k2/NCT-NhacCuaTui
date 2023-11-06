import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useEffect, useState}  from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';

function DanhChoBan({navigation}){
    
  return (
    <View style={styles.contain}>
        <View style={styles.header}>
            <Text style={{color:"#ffffff", fontSize: 16, fontWeight: 700, paddingLeft: 16,}}>Dành cho bạn</Text>
            <TouchableOpacity >
                <Image style={styles.icon_search} source={require('../img/danhchoban/icon_search.png')} />
            </TouchableOpacity>
           
        </View>
        <View style={styles.body}>
            <Text>DanhChoBan</Text>
        </View>
        <View style={styles.footer}>
            <View style={styles.infor_song}>

                
            </View>
            <View style={styles.action}>
                <View style={styles.list_action}>
                <Image style={styles.icon_action} source={require('../img/danhchoban/heart.png')} />
                <Image style={styles.icon_action} source={require('../img/danhchoban/comments.png')} />
                <Image style={styles.icon_action} source={require('../img/danhchoban/share.png')} />
                <Image style={styles.icon_action} source={require('../img/danhchoban/download.png')} />
                <TouchableOpacity style={[styles.playBtn, styles.icon_action]}>
                    <Ionicons name={'ios-play-outline'} size={36} color={'#fff'} />
                </TouchableOpacity>
                </View>
                <View style={styles.process}>
                <Slider
                    style={{width: "90%", height: 40, justifyContent: 'center',}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#FFFFFF"
                    maximumTrackTintColor="#000000"
                />  
                </View>
            </View>
        </View>
    </View>
  )
}

export default DanhChoBan

const styles = StyleSheet.create({
    contain: {
        flex: 1,
        alignItems: 'center',
    },
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
    body: {
        flex: 6,
        backgroundColor: 'blue',
        alignItems: 'center',
    },
    footer: {
        flex: 3,
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#40495A',
    },
    infor_song: {
        flex: 1,
        backgroundColor: 'green',
        width: '100%',
    },
    action: {
        flex: 1,
        width: '100%',
    },
    list_action: {
        flexDirection: 'row',
    },
    icon_action: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        margin: 10,
    },
    process: {
        alignItems: 'center',
    }
    // playBtn: {
    //     marginBottom: 30,
    // },
})