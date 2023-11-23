import { Image, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-web'
// import LinearGradient from 'react-native-linear-gradient';
// import firestore from '@react-native-firebase/firestore';

const noibat = [
  { title: "1 Gods", id: 1 },
  { title: "2 Từng Quen", id: 2 },
  { title: "3 Rồi Em Sẽ Gặp Một Chàng Trai Khác", id: 3 },
  { title: "4 Hot Hòn Họt", id: 4 },
  { title: "5 Duyên Do Trời, Phận Tại Ta", id: 5 },
  { title: "6 Chịu Cách Mình Nói Thua", id: 6 },
  { title: "7 Hit Me Up", id: 7 },
  { title: "8 Khóa Ly Biệt", id: 8 },
  { title: "9 ANh Là Ngoại Lệ Của Em", id: 9 },
  { title: "10 TOKYO Cypher", id: 10 },
  { title: "11 Bạn Đời", id: 11 },
  { title: "12 Ngày Chưa Giông Bão", id: 12 },
  { title: "13 Lời Tạm Biệt Chưa Nói", id: 13 },
  { title: "14 Gấp Đôi Yêu Thương", id: 14 },
  { title: "15 Bogy Shaming", id: 15 },
  { title: "16 The Masked Singer", id: 16 },
  { title: "17 Ngày Mai Người Ta Lấy Chồng", id: 17 },
  { title: "18 Gắp Lại Năm Ta 60", id: 18 },
  { title: "19 Cô Đơn Trên Sofa", id: 19 },
  { title: "20 Đại Minh Tinh", id: 20 },
]

const trending = [
  {
    image: require('../img/khampha/bandoi.png'),
    id: 1,
    title: '1 Bạn Đời',
    singer: '- Karik, GDucky'
  },
  {
    image: require('../img/khampha/hitmeup.png'),
    id: 2,
    title: '2 Hit Me Up',
    singer: '- Binz'
  },
  {
    image: require('../img/khampha/mamia.png'),
    id: 3,
    title: '3 Mamma Mia',
    singer: '- HIEUTHUHAI, HURRYKNG, MAN...'
  },
  {
    image: require('../img/khampha/khiconmodanphai.png'),
    id: 4,
    title: '4 Khi Cơn Mơ Dần Phai',
    singer: '- Tez, Myra Trần, RAP VIỆT'
  },
  {
    image: require('../img/khampha/danhdoi.png'),
    id: 5,
    title: '5 Đánh Đổi',
    singer: '- Obito, RPT MCK'
  },
  {
    image: require('../img/khampha/tungquen.png'),
    id: 6,
    title: '6 Từng quen',
    singer: '- Wren Evans,Itsnk'
  },
  {
    image: require('../img/khampha/hitmeup.png'),
    id: 7,
    title: '7 Hit Me Up',
    singer: '- Binz'
  },
  {
    image: require('../img/khampha/viemtatca.png'),
    id: 8,
    title: '8 Vì Em Tất Cả',
    singer: '- Mỹ Tâm'
  },
  {
    image: require('../img/khampha/codondaquabinhthuong.png'),
    id: 9,
    title: '9 Có Đơn Đã Quá Bình Thường',
    singer: '- Miu Lê'
  },
  {
    image: require('../img/khampha/emnay.png'),
    id: 10,
    title: '10 Em Này',
    singer: '- Gin Tuấn Kiệt, PuKa'
  },
]

const korea = [
  {
    image: require('../img/khampha/haruharu.png'),
    id: 1,
    title: '1 Haru Haru',
    singer: '- Big Bang'
  },
  {
    image: require('../img/khampha/gentleman.png'),
    id: 2,
    title: '2 Gentleman',
    singer: '- PSY'
  },
  {
    image: require('../img/khampha/daybyday.png'),
    id: 3,
    title: '3 Day By Day',
    singer: '- T-ara'
  },
  {
    image: require('../img/khampha/face.png'),
    id: 4,
    title: '4 Face',
    singer: '- NU`EST'
  },
  {
    image: require('../img/khampha/lovescenario.png'),
    id: 5,
    title: '5 Love Scenario',
    singer: '- iKON'
  },
  {
    image: require('../img/khampha/loveable.png'),
    id: 6,
    title: '6 Loveable',
    singer: '- Kim Jong Kook'
  },
  {
    image: require('../img/khampha/iamthebest.png'),
    id: 7,
    title: '7 I Am The Best',
    singer: '- 2NE1'
  },
  {
    image: require('../img/khampha/blue.png'),
    id: 8,
    title: '8 Blue',
    singer: '- Big Bang'
  },
  {
    image: require('../img/khampha/fakelove.png'),
    id: 9,
    title: '9 Fake Love',
    singer: '- BTS'
  },
  {
    image: require('../img/khampha/killthislove.png'),
    id: 10,
    title: '10 Kill This Love',
    singer: '- BlackPink'
  },
]

const youtubetrending = [
  {
    image: require('../img/khampha/chungtacuahientai.png'),
    id: 1,
    title: '1 Chúng Ta Của Hiện Tại',
    singer: '- Sơn Tùng M-TP'
  },
  {
    image: require('../img/khampha/hitmeup.png'),
    id: 2,
    title: '2 Hit Me Up',
    singer: '- Binz'
  },
  {
    image: require('../img/khampha/mamia.png'),
    id: 3,
    title: '3 Mamma Mia',
    singer: '- HIEUTHUHAI, HURRYKNG, MAN...'
  },
  {
    image: require('../img/khampha/codondaquabinhthuong.png'),
    id: 4,
    title: '4 Cô Đơn Đã Quá Bình Thường',
    singer: '- Miu Lê'
  },
  {
    image: require('../img/khampha/cuoicuoi.png'),
    id: 5,
    title: '5 Giờ Không Cưới Thì Nào Cưới',
    singer: '- Hồng Quân WyTy, Young P'
  },
  {
    image: require('../img/khampha/tungquen.png'),
    id: 6,
    title: '6 Từng quen',
    singer: '- Wren Evans,Itsnk'
  },
  {
    image: require('../img/khampha/emlaai.png'),
    id: 7,
    title: '7 Em Là Ai',
    singer: '- Phương Ly, JustaTee'
  },
  {
    image: require('../img/khampha/viemtatca.png'),
    id: 8,
    title: '8 Vì Em Tất Cả',
    singer: '- Mỹ Tâm'
  },
  {
    image: require('../img/khampha/lamgiphaihot.png'),
    id: 9,
    title: '9 Làm Gì Phải Hốt',
    singer: '- '
  },
  {
    image: require('../img/khampha/buongdoitaynhaura.png'),
    id: 10,
    title: '10 Buông Đôi Tay Nhau Ra',
    singer: '- Sơn Tùng M-TP'
  },
]

const billboard = [
  {
    image: require('../img/khampha/greedy.png'),
    id: 1,
    title: '1 greedy',
    singer: '- Tate McRae'
  },
  {
    image: require('../img/khampha/standingnexttoyou.png'),
    id: 2,
    title: '2 Standing Next To You',
    singer: '- Jung Kook (BTS)'
  },
  {
    image: require('../img/khampha/houdini.png'),
    id: 3,
    title: '3 Houdini',
    singer: '- Dua Lipa'
  },
  {
    image: require('../img/khampha/lovinonme.png'),
    id: 4,
    title: '4 Lovin On Me',
    singer: '- Lack Harlow'
  },
  {
    image: require('../img/khampha/cruelsummer.png'),
    id: 5,
    title: '5 Cruel Summer',
    singer: '- Taylor Swift'
  },
  {
    image: require('../img/khampha/seven.png'),
    id: 6,
    title: '6 Seven (Explicit Ver.)',
    singer: '- Jung Kook (BTS), Latto'
  },
  {
    image: require('../img/khampha/paintthetownred.png'),
    id: 7,
    title: '7 Paint The Town Red',
    singer: '- Doja Cat'
  },
  {
    image: require('../img/khampha/isitovernow.png'),
    id: 8,
    title: '8 Is It Over Now? (Taylor\'s Ver...',
    singer: '- Taylor Swift'
  },
  {
    image: require('../img/khampha/mylove.png'),
    id: 9,
    title: '9 My Love',
    singer: '- Westlife'
  },
  {
    image: require('../img/khampha/lalala.png'),
    id: 10,
    title: '10 LALALALA',
    singer: '- Stray Kids'
  },
]

const ItemBillboard = ({ image, title, singer, id }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity>
        <Image style={{ width: 50, height: 50, marginLeft: 10, marginTop: 15, borderRadius: 10 }} source={image}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 10, marginTop: 15 }}>
        <Text style={{ fontSize: 17, fontWeight: '600', color: 'black' }}>{title}</Text>
        <Text style={{ fontSize: 15, color: 'gray' }}>{singer}</Text>
      </TouchableOpacity>
    </View>
  )
}

const ItemYoutubeTrending = ({ image, title, singer, id }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity>
        <Image style={{ width: 50, height: 50, marginLeft: 10, marginTop: 15, borderRadius: 10 }} source={image}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 10, marginTop: 15 }}>
        <Text style={{ fontSize: 17, fontWeight: '600', color: 'black' }}>{title}</Text>
        <Text style={{ fontSize: 15, color: 'gray' }}>{singer}</Text>
      </TouchableOpacity>
    </View>
  )
}

const ItemKorea = ({ image, title, singer, id }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity>
        <Image style={{ width: 50, height: 50, marginLeft: 10, marginTop: 15, borderRadius: 10 }} source={image}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 10, marginTop: 15 }}>
        <Text style={{ fontSize: 17, fontWeight: '600', color: 'black' }}>{title}</Text>
        <Text style={{ fontSize: 15, color: 'gray' }}>{singer}</Text>
      </TouchableOpacity>
    </View>
  )
}

const ItemTrending = ({ image, title, singer }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity>
        <Image style={{ width: 50, height: 50, marginLeft: 10, marginTop: 15, borderRadius: 10 }} source={image}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{ marginLeft: 10, marginTop: 15 }}>
        <Text style={{ fontSize: 17, fontWeight: '600', color: 'black' }}>{title}</Text>
        <Text style={{ fontSize: 15, color: 'gray' }}>{singer}</Text>
      </TouchableOpacity>
    </View>
  )
}

const ItemNoiBat = ({ title }) => {
  return (
    <TouchableOpacity>
      <Text style={{ fontSize: 17, fontWeight: '600', color: 'black', marginLeft: 10, marginTop: 10 }}>{title}</Text>
    </TouchableOpacity>
  )
}

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
          <View style={{ width: 360, height: 700, backgroundColor: "#abdbe3", marginLeft: 10, marginTop: 10, borderRadius: 10, marginBottom: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: '600', color: 'black', marginLeft: 10, marginTop: 10, color: 'gray' }}>Nổi Bật</Text>
            <FlatList
              data={noibat}
              renderItem={({ item }) => <ItemNoiBat title={item.title} />}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={{ width: 360, height: 700, backgroundColor: "#98e09b", marginLeft: 10, marginTop: 10, borderRadius: 10, marginBottom: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: '600', color: 'black', marginLeft: 10, marginTop: 10, color: 'gray', marginLeft: 10 }}>Trending Music</Text>
            <FlatList
              data={trending}
              renderItem={({ item }) => <ItemTrending image={item.image} title={item.title} singer={item.singer} />}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={{ width: 360, height: 700, backgroundColor: "#e6e68a", marginLeft: 10, marginTop: 10, borderRadius: 10, marginBottom: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: '600', color: 'black', marginLeft: 10, marginTop: 10, color: 'gray', marginLeft: 10 }}>Youtube Trending</Text>
            <FlatList
              data={youtubetrending}
              renderItem={({ item }) => <ItemYoutubeTrending image={item.image} title={item.title} singer={item.singer} />}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={{ width: 360, height: 700, backgroundColor: "#da9dc9", marginLeft: 10, marginTop: 10, borderRadius: 10, marginBottom: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: '600', color: 'black', marginLeft: 10, marginTop: 10, color: 'gray', marginLeft: 10 }}>Korea Melon</Text>
            <FlatList
              data={korea}
              renderItem={({ item }) => <ItemKorea image={item.image} title={item.title} singer={item.singer} />}
              keyExtractor={item => item.id}
            />
          </View>
          <View style={{ width: 360, height: 700, backgroundColor: "#d4bdbd", marginLeft: 10, marginTop: 10, borderRadius: 10, marginBottom: 30 }}>
            <Text style={{ fontSize: 20, fontWeight: '600', color: 'black', marginLeft: 10, marginTop: 10, color: 'gray', marginLeft: 10 }}>Billboard Global</Text>
            <FlatList
              data={billboard}
              renderItem={({ item }) => <ItemBillboard image={item.image} title={item.title} singer={item.singer} />}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
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