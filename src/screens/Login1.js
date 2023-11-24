import React from "react";
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity } from "react-native";

export default function Login1({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ marginLeft: 100 }}>
                <Image style={{ width: 200, height: 200, resizeMode: 'contain' }} source={require('../img/login/logo.png')} />
            </View>

            <View style={{ marginTop: 10 }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', marginLeft: 20 }}>Nhập số điện thoại của bạn</Text>
                <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 20 }}>Số điện thoại mới sẽ được tự động đăng kí sau khi</Text>
                <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 20 }}>xác thực thành công.</Text>
            </View>

            <TextInput style={{ height: 60, borderColor: 'gray', borderWidth: 1, marginTop: 50, marginLeft: 20, marginRight: 20, borderRadius: 10, paddingLeft: 20, fontSize: 20, fontWeight: 'bold', backgroundColor: '#e8e4e4' }}
                placeholder="Số điện thoại"
                placeholderTextColor={'gray'}
            />

            <TouchableOpacity style={{ height: 50, width: 350, backgroundColor: 'blue', borderRadius: 50, marginLeft: 20, marginTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: '500', color: 'white', marginLeft: 150, marginTop: 10 }}>Gửi mã</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ height: 50, width: 350, backgroundColor: 'red', borderRadius: 50, marginLeft: 20, marginTop: 10 }}
            onPress={() => navigation.navigate('Login')} >
                <Text style={{ fontSize: 20, fontWeight: '500', color: 'white', marginLeft: 150, marginTop: 10 }}>Thoát</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ECF6FF"
    }
})