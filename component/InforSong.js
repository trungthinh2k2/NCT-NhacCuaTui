import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const InforSong = ({title, artist, onTitlePress, onArtistPress}) => {
  return (
    <View style={styles.infor_song}>
      <View style={styles.detailsWrapper}>
        <Text Text style={styles.title} onPress={onTitlePress}>{title}</Text>
        <Text style={styles.artist} onPress={onArtistPress}>{artist}</Text>
      </View>
    </View>
  )
}

export default InforSong

const styles = StyleSheet.create({
    infor_song: {
        flex: 1,
        width: '100%',
    },
    detailsWrapper: {
      marginLeft: 20,
    },
    title: {
        fontSize: 28,
        color: 'white',
        fontWeight: 600,
        paddingBottom: 10,
    },
    artist: {
        fontSize: 18,
        color: 'white',
        fontWeight: 400,
    },
    
})