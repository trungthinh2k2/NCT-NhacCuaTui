import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
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

const ItemAccount = ({ image, title, number1, following, number2, follower }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 10 }}>
      <TouchableOpacity>
        <Image style={{ width: 70, height: 70, resizeMode: 'contain', marginLeft: 20, resizeMode: 'contain', borderRadius: 50 }} source={image} />
      </TouchableOpacity>
      <View style={{ flexDirection: 'column', marginLeft: 10 }}>
        <TouchableOpacity>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{title}</Text>
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
      <TouchableOpacity style={{flexDirection: 'row'}}>
        <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 40, marginTop: 20 }}>Hồ Sơ</Text>
        <Image style={{ width: 15, height: 15, resizeMode: 'contain', marginLeft: 10, marginTop: 22 }} source={require('../img/cuatoi/vector.png')} />
      </TouchableOpacity>
    </View>
  )
}

const CuaToi = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
          <TouchableOpacity>
            <Image style={{ width: 25, height: 25, resizeMode: 'contain', marginRight: 10 }} source={require('../img/cuatoi/notify.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{ width: 25, height: 25, resizeMode: 'contain', marginRight: 20 }} source={require('../img/cuatoi/install.png')} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={account}
          renderItem={({ item }) => <ItemAccount image={item.image} title={item.title} number1={item.number1} following={item.following} number2={item.number2} follower={item.follower} />}
          keyExtractor={item => item.title}
        />

      </View>

    </View>
  )
}

export default CuaToi

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  header: {
    flex: 1,
    backgroundColor: 'white',
    width: 400,
    height: 100,
  }
})