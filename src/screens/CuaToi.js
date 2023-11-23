import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React from 'react'

const account = [
  {
    image: require('../img/cuatoi/account.png'),
    title: 'Trần Quốc Thịnh',
    number1: '0',
    following: 'Đang theo dõi',
    number2: '0',
    follower: 'Người theo dõi',
  }
]

const taikhoanvip = [
  {
    image: require('../img/cuatoi/vuongmieng.png'),
    title1: 'Tài khoản VIP',
    title2: 'Gói miễn phí',
  }
]

const taikhoanxu = [
  {
    image: require('../img/cuatoi/iconnhaccuatui.png'),
    title1: 'Tài khoản Xu',
    title2: '0 xu',
  }
]

const nhacdatai = [
  {
    image: require('../img/cuatoi/dowload.png'),
    title1: 'Nhạc đã tải',
    title2: '0 track',
  }
]

const ngheganday = [
  {
    image: require('../img/cuatoi/dangheganday.png'),
    title1: 'Nghe gần đây',
    title2: '0 track',
  }
]

const yeuthich = [
  {
    image: require('../img/cuatoi/yeuthich.png'),
    title1: 'Yêu thích',
    title2: '0 bài hát',
  }
]

const addplaylist = [
  {
    image: require('../img/cuatoi/addplaylist.png'),
    title1: 'Thêm playlist',
    title2: 'Thêm playlist bên ngoài chỉ với 1 bước',
  }
]

const createplaylist = [
  {
    image: require('../img/cuatoi/create.png'),
    title1: 'Tạo playlist',
    title2: 'Tạo playlist của riêng bạn',
  }
]


const ItemAccount = ({ image, title, number1, following, number2, follower }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 5 }}>
      <TouchableOpacity>
        <Image style={{ width: 70, height: 70, resizeMode: 'contain', marginLeft: 20, borderRadius: 50, marginTop: 10 }} source={image} />
      </TouchableOpacity>
      <View style={{ flexDirection: 'column', marginLeft: 10, marginTop: 10 }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column', marginTop: 10 }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 12, color: 'gray' }}>{number1}</Text>
              <Text style={{ fontSize: 12, color: 'gray' }}>{following}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'column', marginTop: 10, marginLeft: 15 }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 12, color: 'gray' }}>{number2}</Text>
              <Text style={{ fontSize: 12, color: 'gray' }}>{follower}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 40, marginTop: 40 }}>Hồ Sơ</Text>
        <Image style={{ width: 15, height: 15, resizeMode: 'contain', marginLeft: 10, marginTop: 42 }} source={require('../img/cuatoi/vector.png')} />
      </TouchableOpacity>
    </View>
  )
}

const ItemTaiKhoanVip = ({ image, title1, title2 }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 10 }}>
      <Image style={{ width: 25, height: 25, resizeMode: 'contain', marginLeft: 10, marginTop: 5 }} source={image} />
      <View style={{ flexDirection: 'column', marginLeft: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: '500' }}>{title1}</Text>
        <Text style={{ fontSize: 12, color: 'gray' }}>{title2}</Text>
      </View>
    </View>
  )
}

const ItemTaiKhoanXu = ({ image, title1, title2 }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 10 }}>
      <Image style={{ width: 25, height: 25, resizeMode: 'contain', marginLeft: 10, backgroundColor: '#fcc16a', marginTop: 5, borderRadius: 50 }} source={image} />
      <View style={{ flexDirection: 'column', marginLeft: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: '500' }}>{title1}</Text>
        <Text style={{ fontSize: 12, color: 'gray' }}>{title2}</Text>
      </View>
    </View>
  )
}

const ItemNhacDaTai = ({ image, title1, title2 }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 10 }}>
      <Image style={{ width: 30, height: 30, resizeMode: 'contain', marginLeft: 10, marginTop: 5 }} source={image} />
      <View style={{ flexDirection: 'column', marginLeft: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: '500' }}>{title1}</Text>
        <Text style={{ fontSize: 12, color: 'gray' }}>{title2}</Text>
      </View>
    </View>
  )
}

const ItemNgheGanDay = ({ image, title1, title2 }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 10 }}>
      <Image style={{ width: 30, height: 30, resizeMode: 'contain', marginLeft: 10, marginTop: 5 }} source={image} />
      <View style={{ flexDirection: 'column', marginLeft: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: '500' }}>{title1}</Text>
        <Text style={{ fontSize: 12, color: 'gray' }}>{title2}</Text>
      </View>
    </View>
  )
}

const ItemYeuThich = ({ image, title1, title2 }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 10 }}>
      <Image style={{ width: 50, height: 50, resizeMode: 'contain', marginLeft: 10, marginTop: 5, borderRadius: 10 }} source={image} />
      <View style={{ flexDirection: 'column', marginLeft: 15, marginTop: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: '600' }}>{title1}</Text>
        <Text style={{ fontSize: 13 }}>{title2}</Text>
      </View>
    </View>
  )
}

const ItemAddPlaylist = ({ image, title1, title2 }) => {
  return (
    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }}>
      <Image style={{ width: 50, height: 50, resizeMode: 'contain', marginLeft: 15, marginTop: 5, borderRadius: 10 }} source={image} />
      <View style={{ flexDirection: 'column', marginLeft: 15, marginTop: 7 }}>
        <Text style={{ fontSize: 17, fontWeight: '500' }}>{title1}</Text>
        <Text style={{ fontSize: 14, color: 'gray' }}>{title2}</Text>
      </View>
    </TouchableOpacity>
  )
}

const ItemCreatePlaylist = ({ image, title1, title2 }) => {
  return (
    <TouchableOpacity style={{ flexDirection: 'row' }}>
      <Image style={{ width: 50, height: 50, resizeMode: 'contain', marginLeft: 15, marginTop: 5, borderRadius: 10 }} source={image} />
      <View style={{ flexDirection: 'column', marginLeft: 15, marginTop: 7 }}>
        <Text style={{ fontSize: 17, fontWeight: '500' }}>{title1}</Text>
        <Text style={{ fontSize: 14, color: 'gray' }}>{title2}</Text>
      </View>
    </TouchableOpacity>
  )
}

const CuaToi = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
          <TouchableOpacity>
            <Image style={{ width: 25, height: 25, resizeMode: 'contain', marginRight: 10 }} source={require('../img/cuatoi/notify.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Install')}>
            <Image style={{ width: 25, height: 25, resizeMode: 'contain', marginRight: 20 }} source={require('../img/cuatoi/install.png')} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={account}
          renderItem={({ item }) => <ItemAccount image={item.image} title={item.title} number1={item.number1} following={item.following} number2={item.number2} follower={item.follower} />}
          keyExtractor={item => item.title}
        />
      </View>
      <ScrollView>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <View style={{ backgroundColor: '#f0e4dc', width: 180, height: 60, borderRadius: 10, marginRight: 5 }}>
              <FlatList
                data={taikhoanvip}
                renderItem={({ item }) => <ItemTaiKhoanVip image={item.image} title1={item.title1} title2={item.title2} />}
                keyExtractor={item => item.title1}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ backgroundColor: '#f0e4dc', width: 180, height: 60, borderRadius: 10, marginLeft: 5 }}>
              <FlatList
                data={taikhoanxu}
                renderItem={({ item }) => <ItemTaiKhoanXu image={item.image} title1={item.title1} title2={item.title2} />}
                keyExtractor={item => item.title1}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Image style={{ width: 370, height: 60, borderRadius: 10, marginTop: 10, resizeMode: 'contain' }} source={require('../img/cuatoi/hovedaquy.png')}></Image>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <TouchableOpacity>
            <View style={{ backgroundColor: '#f0ecec', width: 180, height: 60, borderRadius: 10, marginRight: 5 }}>
              <FlatList
                data={nhacdatai}
                renderItem={({ item }) => <ItemNhacDaTai image={item.image} title1={item.title1} title2={item.title2} />}
                keyExtractor={item => item.title1}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ backgroundColor: '#f0ecec', width: 180, height: 60, borderRadius: 10, marginLeft: 5 }}>
              <FlatList
                data={ngheganday}
                renderItem={({ item }) => <ItemNgheGanDay image={item.image} title1={item.title1} title2={item.title2} />}
                keyExtractor={item => item.title1}
              />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <View style={{ backgroundColor: '#f0ecec', width: 370, height: 80, borderRadius: 10, marginTop: 10 }}>
            <FlatList
              data={yeuthich}
              renderItem={({ item }) => <ItemYeuThich image={item.image} title1={item.title1} title2={item.title2} />}
              keyExtractor={item => item.title1}
            />
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 30 }}>Platlist Đã Tạo</Text>
          <Text style={{ fontSize: 18, fontWeight: "600", marginLeft: 50 }}>Playlist Yêu Thích</Text>
        </View>
        <View style={{ width: 370, height: 200, backgroundColor: '#f0ecec', marginTop: 20, borderRadius: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginTop: 20 }}>Playlist Đã Tạo (0)</Text>
            <TouchableOpacity>
              <Image style={{ width: 30, height: 30, resizeMode: 'contain', marginTop: 20, marginLeft: 110 }} source={require('../img/cuatoi/createplaylist.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={{ width: 30, height: 30, resizeMode: 'contain', marginTop: 18, marginLeft: 5 }} source={require('../img/cuatoi/array.png')} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={addplaylist}
            renderItem={({ item }) => <ItemAddPlaylist image={item.image} title1={item.title1} title2={item.title2} />}
            keyExtractor={item => item.title1}
          />
          <FlatList
            data={createplaylist}
            renderItem={({ item }) => <ItemCreatePlaylist image={item.image} title1={item.title1} title2={item.title2} />}
            keyExtractor={item => item.title1}
          />
        </View>
        <View style={{ width: 370, height: 320, backgroundColor: '#f0ecec', marginTop: 15, borderRadius: 10, marginBottom: 50 }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 15, marginTop: 20 }}>Playlist Yêu Thích (0)</Text>
            <TouchableOpacity>
              <Image style={{ width: 30, height: 30, resizeMode: 'contain', marginTop: 18, marginLeft: 120 }} source={require('../img/cuatoi/array.png')} />
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: '#e8e4e4', width: 100, height: 100, marginLeft: 135, borderRadius: 50, marginTop: 30 }}>
            <Image style={{ width: 30, height: 30, resizeMode: 'contain', position: 'absolute', marginLeft: 35, marginTop: 32 }} source={require('../img/cuatoi/nodata.png')} />
          </View>
          <Text style={{ fontSize: 17, fontWeight: '500', marginLeft: 120, marginTop: 10 }}>Không có dữ liệu!</Text>
          <Text style={{ fontSize: 15, fontWeight: '400', color: 'gray', marginLeft: 30 }}>Hãy khám phá để tìm ra nhưng playlist bạn yêu</Text>
          <Text style={{ fontSize: 15, fontWeight: '400', color: 'gray', marginLeft: 170 }}>thích</Text>
          <TouchableOpacity style={{ width: 180, height: 35, backgroundColor: '#e8e4e4', marginLeft: 100, borderRadius: 30, marginTop: 10 }}
            onPress={() => navigation.navigate('KhamPha')}
          >
            <Text style={{ fontSize: 15, fontWeight: '500', color: 'gray', marginLeft: 55, marginTop: 6 }}>Khám phá</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default CuaToi

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4e4f4',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#c4e4f4',
    width: 400,
    height: 150,
  }
})