import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, {useState} from 'react'
import SeekBar from './SeekBar';

const Action = ({pause, onPlay, onPause,}) => {
  return (
    <View style={styles.action}>
                <View style={styles.list_action}>
                    <TouchableOpacity >
                        <Image style={styles.icon_action} source={require('../src/img/danhchoban/heart.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.icon_action} source={require('../src/img/danhchoban/comments.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.icon_action} source={require('../src/img/danhchoban/share.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={styles.icon_action} source={require('../src/img/danhchoban/download.png')} />
                    </TouchableOpacity>
                    <View>
                    {pause ? (
        <TouchableOpacity style={styles.icon_action} onPress={onPlay}>
          <AntDesign name="playcircleo" size={32} color="#000" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.icon_action} onPress={onPause}>
          <AntDesign name="pausecircleo" size={32} color="#000" />
        </TouchableOpacity>
      )} 
                    </View>
                    

                    {/* <TouchableOpacity style={[styles.playBtn, styles.icon_action]}>
                        <Ionicons name={'ios-play-outline'} size={36} color={'#fff'} />
                    </TouchableOpacity> */}
                </View>
                    <SeekBar />
            </View>
  )
}

export default Action

const styles = StyleSheet.create({
    action: {
        flex: 1,
        width: '100%',
    },
    list_action: {
        flexDirection: 'row',
        marginLeft: 16,
    },
    icon_action: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        margin: 10,
    },
    process: {
        alignItems: 'center',
    },
    playContainer: {
        backgroundColor: '#fff',
        marginHorizontal: 30,
        borderColor: '#1B1246',
        borderWidth: 16,
        width: 126,
        height: 128,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
        shadowColor: '#1B1246',
        shadowOpacity: 0.5,
        elevation: 0.2,
        shadowRadius: 30,
      },
})