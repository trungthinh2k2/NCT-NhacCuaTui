
import { StyleSheet, Text, View, ScrollView, Image, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'

const data = [
  {
    image1: require('../img/khampha/live.png'),
    image2: require('../img/khampha/BXH.png'),
    id: 1,
  },
  {
    image1: require('../img/khampha/GenZHits.png'),
    image2: require('../img/khampha/Vpop.png'),
    id: 2,
  },
  {
    image1: require('../img/khampha/tiktok.png'),
    image2: require('../img/khampha/remix.png'),
    id: 3,
  },
  {
    image1: require('../img/khampha/Kpop.png'),
    image2: require('../img/khampha/hiphop.png'),
    id: 4,
  },
  {
    image1: require('../img/khampha/Indie.png'),
    image2: require('../img/khampha/chill.png'),
    id: 5,
  },
  {
    image1: require('../img/khampha/yeu.png'),
    image2: require('../img/khampha/randb.png'),
    id: 6,
  },
  {
    image1: require('../img/khampha/dance.png'),
    image2: require('../img/khampha/nhactrung.png'),
    id: 7,
  },
  {
    image1: require('../img/khampha/pop.png'),
    image2: require('../img/khampha/exercise.png'),
    id: 8,
  },
  {
    image1: require('../img/khampha/ngungon.png'),
    image2: require('../img/khampha/acoustic.png'),
    id: 9,
  },
  {
    image1: require('../img/khampha/trutinh.png'),
    image2: require('../img/khampha/suy.png'),
    id: 10,
  },
]
 
const data2 = [
  {
    image: require('../img/khampha/vu.png'),
    id: 1,
    title: 'Daily Mix',
    singer: 'Vũ.'
  },
  {
    image: require('../img/khampha/noo.png'),
    id: 2,
    title: 'Noo Phước Thịnh Mix',
    singer: 'Noo Phước Thịnh.'
  },
  {
    image: require('../img/khampha/spider.png'),
    id: 3,
    title: 'R&B/Hip Hop/Rap Mix',
    singer: 'Doja Cat.'
  },
  {
    image: require('../img/khampha/khamphamoi.png'),
    id: 4,
    title: 'Khám Phá Mới Mix',
    singer: 'CM1X.'
  },
  {
    image: require('../img/khampha/evans.png'),
    id: 5,
    title: 'Âm Nhạc Thịnh Hành',
    singer: 'Wren Evans.'
  },
  {
    image: require('../img/khampha/khamphamoi.png'),
    id: 7,
    title: 'Khám Phá Mới Mix',
    singer: 'CM1X.'
  },
  {
    image: require('../img/khampha/dailymix.png'),
    id: 8,
    title: 'Daily Mix',
    singer: 'Văn Mai Hương.'
  },
  {
    image: require('../img/khampha/trungquanidol.png'),
    id: 9,
    title: 'Trung Quân Idol Mix',
    singer: 'Trung Quân Idol.'
  },
]

const Item = ({ image1, image2, id }) => {
  return (
    <View style={styles.item}>
      <TouchableOpacity>
        <Image style={[styles.img1, { width: id == 1 ? 80 : 170, height: 80, borderRadius: 10, resizeMode: 'contain' }]} source={image1}></Image>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image style={[styles.img2, { width: id == 1 ? 80 : 170, height: 80, borderRadius: 10, resizeMode: 'contain', marginTop: 10 }]} source={image2}></Image>
      </TouchableOpacity>
    </View>
  )
}

const Item2 = ({ image, id, title, singer }) => {
  return (
    <View style={styles.item2}>
      <TouchableOpacity>
        <Image style={styles.img3} source={image}></Image>
      </TouchableOpacity>
      <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black', marginTop: 10 }}>{title}</Text>
      <Text style={{ fontSize: 15, color: 'gray', marginTop: 5 }}>{singer}</Text>
    </View>
  )
}

const KhamPha = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.search} source={require('../img/khampha/search.png')}></Image>
        <TextInput style={styles.textInput} placeholder="Bạn muốn nghe gì ?" placeholderTextColor='gray'></TextInput>
        <TouchableOpacity>
          <Image style={styles.mic} source={require('../img/khampha/mic.png')}></Image>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <ScrollView>
          <FlatList
            data={data}
            horizontal={true}
            renderItem={({ item }) => (
              <Item image1={item.image1} image2={item.image2} id={item.id}></Item>
            )}
          />
        </ScrollView>
        <View style={styles.txt}>Made for Trần Quốc Thịnh</View>
        <ScrollView>
          <FlatList
            data={data2}
            horizontal={true}
            renderItem={({ item }) => (
              <Item2 image={item.image} id={item.id} title={item.title} singer={item.singer}></Item2>
            )}
          />
        </ScrollView>
        <View style={styles.rank}>
          <Text style={styles.txtXepHang}>Bảng Xếp Hạng</Text>
          <TouchableOpacity>
            <Text style={styles.txtThem}>Thêm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default KhamPha

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
  },
  body: {
    backgroundColor: 'white',
  },
  search: {
    width: 30,
    height: 30,
    position: 'absolute',
    left: 25,
    top: 10,
  },
  mic: {
    width: 40,
    height: 40,
    marginLeft: 5,
  },
  textInput: {
    width: '80%',
    height: 35,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    paddingLeft: 35,
    marginLeft: 20,
    marginTop: 5,
  },
  item: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
  },
  txt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    marginTop: 20,
  },
  item2: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
  },
  img3:
  {
    width: 170,
    height: 170,
    borderRadius: 10,
    resizeMode: 'contain',
    marginTop: 10,
  },
  txtXepHang: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    marginTop: 20,
  },
  rank: {
    flexDirection: 'row',
  },
  txtThem: {
    color: 'gray',
    fontSize: 15,
    marginTop: 25,
    marginLeft: 130,
  },
})