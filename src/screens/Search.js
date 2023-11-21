import { Image, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

const Search = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header1}>
        <Image style={styles.search1} source={require('../img/khampha/search.png')}></Image>
        <TextInput style={styles.textInput1} placeholder="Bạn muốn nghe gì ?" placeholderTextColor='gray'></TextInput>
        <TouchableOpacity onPress={() => navigation.navigate('KhamPha')}>
          <Text style={{ color: 'black', marginTop: 10, marginLeft: 10, fontSize: 15, fontWeight: '500' }}>Hủy</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <TouchableOpacity>
          <View style={{ width: 360, height: 70, backgroundColor: '#7ccaee', marginLeft: 15, borderRadius: 10 }}>
            <Text style={{ color: 'black', fontSize: 17, fontWeight: '600', marginTop: 10, marginLeft: 10 }}>Nhận dạng bài hát</Text>
            <Text style={{ marginLeft: 10, fontSize: 12 }}>Nhận dạng bất kì bài hát đang phát xung quanh bạn</Text>
            <Text style={{ marginLeft: 10, fontSize: 12 }}>hoặc từ ứng dụng khác</Text>
            <Image style={{ width: 50, height: 50, position: 'absolute', right: 10, top: 10 }} source={require('../img/khampha/nhandanggiongnoi.png')}></Image>
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginLeft: 10, marginTop: 20, }}>Lịch Sử Tìm Kiếm</Text>
          <TouchableOpacity>
            <Image style={{ width: 40, height: 40, resizeMode: 'contain', marginTop: 10, marginLeft: 170 }} source={require('../img/khampha/delete.png')}></Image>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true}>
        <Pressable style={{flexDirection: 'row'}}>
          <Text style={{ fontSize: 20, fontWeight: '600', color: 'black', marginLeft: 10, marginTop: 20, color: 'gray'}}>Nổi Bật</Text>
          <Text style={{ fontSize: 20, fontWeight: '600', color: 'black', marginLeft: 10, marginTop: 20, color: 'gray', marginLeft: 50}}>Trending Music</Text>
          <Text style={{ fontSize: 20, fontWeight: '600', color: 'black', marginLeft: 10, marginTop: 20, color: 'gray', marginLeft: 50}}>Youtube Trending</Text>
          <Text style={{ fontSize: 20, fontWeight: '600', color: 'black', marginLeft: 10, marginTop: 20, color: 'gray', marginLeft: 50}}>Korea Melon</Text>
          <Text style={{ fontSize: 20, fontWeight: '600', color: 'black', marginLeft: 10, marginTop: 20, color: 'gray', marginLeft: 50}}>Billboard Global</Text>
        </Pressable>
        </ScrollView>
        <View style={{width: 360, height:600, backgroundColor:'red', marginLeft: 10, marginTop: 10, borderRadius: 10}}>

        </View>
      </ScrollView>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header1: {
    height: 50,
    flexDirection: 'row',
  },
  search1: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 20,
    top: 10,
  },
  textInput1: {
    width: '85%',
    height: 35,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    paddingLeft: 40,
    marginLeft: 10,
    marginTop: 5,
  },
})