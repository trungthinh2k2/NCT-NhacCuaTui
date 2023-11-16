
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
    image: require('../img/khampha/chungtacuahientai.png'),
    id: 4,
    title: 'Chúng Ta Của Hiện Tại',
    singer: 'Sơn Tùng M-TP.'
  },
  {
    image: require('../img/khampha/tungquen.png'),
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

const data3 = [
  {
    image3: require('../img/khampha/tungquen.png'),
    id3: 1,
    title3: '1 Từng quen',
    singer3: '- Wren Evans,Itsnk'
  },
  {
    image3: require('../img/khampha/mdanniversary.png'),
    id3: 2,
    title3: '2 MD Anniversary',
    singer3: '- CoolKid, YoungBan'
  },
  {
    image3: require('../img/khampha/mamia.png'),
    id3: 3,
    title3: '3 Mamma Mia',
    singer3: '- HIEUTHUHAI,HURRYKNG,MAN...'
  },
  {
    image3: require('../img/khampha/quacauruocem.png'),
    id3: 4,
    title3: '4 Qua Cầu Rước Em',
    singer3: '- Danhka'
  },
  {
    image3: require('../img/khampha/lift.png'),
    id3: 5,
    title3: '5 Lift',
    singer3: '- Binz'
  },
]
const data4 = [
  {
    image3: require('../img/khampha/chungtacuahientai.png'),
    id3: 1,
    title3: '1 Chúng Ta Của Hiện Tại',
    singer3: '- Sơn Tùng M-TP'
  },
  {
    image3: require('../img/khampha/maunuocmat.png'),
    id3: 2,
    title3: '2 Màu Nước Mắt',
    singer3: '- Nguyễn Trần Trung Quân'
  },
  {
    image3: require('../img/khampha/canhdongyeuthuong.png'),
    id3: 3,
    title3: '3 Cánh Đồng Yêu Thương',
    singer3: '- Trung Quân Idol'
  },
  {
    image3: require('../img/khampha/buongdoitaynhaura.png'),
    id3: 4,
    title3: '4 Buông Đôi Tay Nhau Ra',
    singer3: '- Sơn Tùng M-TP'
  },
  {
    image3: require('../img/khampha/24h.png'),
    id3: 5,
    title3: '5 24H',
    singer3: '- LyLy'
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

const Item3 = ({ image3, id3, title3, singer3 }) => {
  return (
    <View style={styles.item3}>
      <TouchableOpacity>
        <Image style={styles.img4} source={image3}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'column', marginBottom: 20, marginLeft: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>{title3}</Text>
        <Text style={{ fontSize: 15, color: 'gray' }}>{singer3}</Text>
      </TouchableOpacity>
    </View>

  )
}

const Item4 = ({ image3, id3, title3, singer3 }) => {
  return (
    <View style={styles.item3}>
      <TouchableOpacity>
        <Image style={styles.img5} source={image3}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={{ flexDirection: 'column', marginBottom: 20, marginLeft: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>{title3}</Text>
        <Text style={{ fontSize: 15, color: 'gray' }}>{singer3}</Text>
      </TouchableOpacity>
    </View>

  )

}

const KhamPha = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
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
          <Text style={styles.txt}>Made for Trần Quốc Thịnh</Text>
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
          <ScrollView horizontal={true}>
            <View style={{ flexDirection: 'row' }}>

              <View style={styles.trend}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 5, marginLeft: 10 }}>Trending Music</Text>
                    <Image style={{ width: 18, height: 18, resizeMode: 'contain', marginTop: 10, marginLeft: 10 }} source={require('../img/khampha/vector.png')}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={{ width: 40, height: 40, resizeMode: 'contain', marginLeft: 80 }} source={require('../img/khampha/play.png')}></Image>
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={data3}
                  renderItem={({ item }) => (
                    <Item3 image3={item.image3} id3={item.id3} title3={item.title3} singer3={item.singer3}></Item3>
                  )}
                >
                </FlatList>
              </View>

              <View style={{ width: 310, height: 330, backgroundColor: '#f0ecec', marginLeft: 15, borderRadius: 10, marginTop: 20, }}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 5, marginLeft: 10 }}>V-Pop</Text>
                    <Image style={{ width: 18, height: 18, resizeMode: 'contain', marginTop: 10, marginLeft: 10 }} source={require('../img/khampha/vector.png')}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={{ width: 40, height: 40, resizeMode: 'contain', marginLeft: 170 }} source={require('../img/khampha/play.png')}></Image>
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={data4}
                  renderItem={({ item }) => (
                    <Item3 image3={item.image3} id3={item.id3} title3={item.title3} singer3={item.singer3}></Item3>
                  )}
                >
                </FlatList>
              </View>

              <View style={{ width: 310, height: 330, backgroundColor: '#f0ecec', marginLeft: 15, borderRadius: 10, marginTop: 20, }}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 5, marginLeft: 10 }}>K-Pop</Text>
                    <Image style={{ width: 18, height: 18, resizeMode: 'contain', marginTop: 10, marginLeft: 10 }} source={require('../img/khampha/vector.png')}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={{ width: 40, height: 40, resizeMode: 'contain', marginLeft: 170 }} source={require('../img/khampha/play.png')}></Image>
                  </TouchableOpacity>
                </View>

              </View>

              <View style={{ width: 310, height: 330, backgroundColor: '#f0ecec', marginLeft: 15, borderRadius: 10, marginTop: 20, }}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 5, marginLeft: 10 }}>Youtube Trending</Text>
                    <Image style={{ width: 18, height: 18, resizeMode: 'contain', marginTop: 10, marginLeft: 10 }} source={require('../img/khampha/vector.png')}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={{ width: 40, height: 40, resizeMode: 'contain', marginLeft: 60 }} source={require('../img/khampha/play.png')}></Image>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ width: 310, height: 330, backgroundColor: '#f0ecec', marginLeft: 15, borderRadius: 10, marginTop: 20, }}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 5, marginLeft: 10 }}>Rap Viet</Text>
                    <Image style={{ width: 18, height: 18, resizeMode: 'contain', marginTop: 10, marginLeft: 10 }} source={require('../img/khampha/vector.png')}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={{ width: 40, height: 40, resizeMode: 'contain', marginLeft: 150 }} source={require('../img/khampha/play.png')}></Image>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ width: 310, height: 330, backgroundColor: '#f0ecec', marginLeft: 15, borderRadius: 10, marginTop: 20, }}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 5, marginLeft: 10 }}>Nhạc Tết</Text>
                    <Image style={{ width: 18, height: 18, resizeMode: 'contain', marginTop: 10, marginLeft: 10 }} source={require('../img/khampha/vector.png')}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={{ width: 40, height: 40, resizeMode: 'contain', marginLeft: 145 }} source={require('../img/khampha/play.png')}></Image>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ width: 310, height: 330, backgroundColor: '#f0ecec', marginLeft: 15, borderRadius: 10, marginTop: 20, }}>
                <View style={{ flexDirection: 'row' }}>
                  <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black', marginTop: 5, marginLeft: 10 }}>Remix Việt</Text>
                    <Image style={{ width: 18, height: 18, resizeMode: 'contain', marginTop: 10, marginLeft: 10 }} source={require('../img/khampha/vector.png')}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image style={{ width: 40, height: 40, resizeMode: 'contain', marginLeft: 130 }} source={require('../img/khampha/play.png')}></Image>
                  </TouchableOpacity>
                </View>
              </View>

            </View>
          </ScrollView>
        </View>
      </ScrollView>
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
  trend: {
    width: 310,
    height: 330,
    backgroundColor: '#f0ecec',
    marginLeft: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  item3: {
    marginLeft: 10,
    flexDirection: 'row',
  },
  img4:
  {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 5,
  },
  img5:
  {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    borderRadius: 5,
  },
})