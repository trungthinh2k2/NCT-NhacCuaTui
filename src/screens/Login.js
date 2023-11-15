import { StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from "react-native";
import React from "react";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.img_logo} source={require('../img/login/logo.png')} />
        <Text style={{ fontSize: 50, fontWeight: "bold", color: "#3C92FF", top: -20 }}>NTC</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={[styles.btn, styles.btn_phone]} onPress={() => navigation.navigate('Home')}>
          <Image style={styles.img_icon} source={require("../img/login/phone.png")} />
          <Text style={styles.text_btn}>Sử dụng số điện thoại</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
          <Image style={styles.img_icon} source={require("../img/login/logo_facebook.png")} />
          <Text style={styles.text_btn}>Tiếp tục với Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
          <Image style={styles.img_icon} source={require("../img/login/logo_google.png")} />
          <Text style={styles.text_btn}>Tiếp tục với Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Home')}>
          <Image style={styles.img_icon} source={require("../img/login/logo_apple.png")} />
          <Text style={styles.text_btn}>Tiếp tục với Apple</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.footer}>
        <Text style={styles.text_policy}>Bằng cách tiếp tục, bạn đồng ý với&nbsp;
          <TouchableOpacity style={{ fontWeight: 700, }} onPress={() => navigation.navigate('Home')}>
            <Text>Thỏa thuận Sử dụng &nbsp;</Text>
          </TouchableOpacity>
          <Text>và thừa nhận rằng bạn đã đọc </Text>
          <TouchableOpacity style={{ fontWeight: 700 }} onPress={() => navigation.navigate('Home')}>
            <Text>&nbsp;Chính sách bảo mật</Text>
          </TouchableOpacity>

        </Text>
        <TouchableOpacity style={styles.btn_dangnhap} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.text_btn_dangnhap}>Đăng nhập với mật khẩu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF6FF"
  },
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img_logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    marginTop: 20,
  },
  body: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: "#000000",
    width: "80%",
    height: 50,
    borderRadius: 10,
    margin: 10,
    padding: 10,
    justifyContent: 'center',
  },
  btn_phone: {
    backgroundColor: "#3C92FF",
  },
  img_icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    position: "absolute",
  },
  text_btn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 400,
    textAlign: "center",
  },
  footer: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text_policy: {
    fontSize: 14,
    width: "80%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_dangnhap: {
    backgroundColor: "#C4C4C4",
    width: "100%",
    height: 50,
    justifyContent: 'center',
  },
  text_btn_dangnhap: {
    color: "#00000",
    fontSize: 20,
    fontWeight: 500,
    textAlign: "center",
  }

});
