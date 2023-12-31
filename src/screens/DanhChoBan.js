import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Pressable } from 'react-native'
import React, {Component, useEffect, useState}  from 'react'

import HeaderDanhChoBan from '../../component/HeaderDanhChoBan';
import BodyDanhChoBan from '../../component/BodyDanhChoBan';
import InforSong from '../../component/InforSong';
import Action from '../../component/Action';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { songs } from '../../model/data';

// import { Track } from 'react-native-track-player';
// import Video from 'react-native-video';
// import Sound from 'react-native-sound';

function DanhChoBan({navigation}) {
  const [pause, setPause] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(0);

  const currentTrack = songs[selectedTrack];

  function onPlay() {
    setPause(false);
  }
  function onPause() {
    setPause(true);
  }
  
  return (
    
    <View style={styles.container}>
        <HeaderDanhChoBan navigation={navigation} />
        <View>
          
        </View>
        <BodyDanhChoBan url={currentTrack.albumArtUrl} />
        <View style={styles.footer}>
            <InforSong title={currentTrack.title} artist={currentTrack.artist}/>
            <Action {...{pause, onPause, onPlay}}/>
     
        </View>
        {/* <Video 
          source={{uri: currentTrack.audioUrl}}
          paused={pause}
          poster={currentTrack.albumArtUrl}
        /> */}
    </View>
    
  )
}

export default DanhChoBan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    footer: {
        flex: 3,
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#40495A',
    },
})
