import React from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function GuiMa({ navigation }) {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Login1')}>
                <Image style={{ width: 25, height: 25, resizeMode: 'contain', marginTop: 10, marginLeft: 20 }} source={require('../img/install/behon.png')}></Image>
            </TouchableOpacity>
            <Text style={{ fontSize: 25, fontWeight: '700', marginTop: 40, marginLeft: 20 }}>Kiểm tra điện thoại của bạn</Text>
            <Text style={{ fontSize: 15, fontWeight: '500', marginLeft: 20, marginTop: 10 }}>Mã gồm 6 chữ số đã được gửi tới +840975373560</Text>
            <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-around' }}>
                <TextInput style={{ width: 40, height: 40, backgroundColor: '#e8e4e4', fontSize: 20, fontWeight: 'bold', paddingLeft: 14, borderRadius: 10, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="-" placeholderTextColor={'black'} >
                </TextInput>
                <TextInput style={{ width: 40, height: 40, backgroundColor: '#e8e4e4', fontSize: 20, fontWeight: 'bold', paddingLeft: 13, borderRadius: 10, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="-" placeholderTextColor={'black'} >
                </TextInput>
                <TextInput style={{ width: 40, height: 40, backgroundColor: '#e8e4e4', fontSize: 20, fontWeight: 'bold', paddingLeft: 13, borderRadius: 10, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="-" placeholderTextColor={'black'} >
                </TextInput>
                <TextInput style={{ width: 40, height: 40, backgroundColor: '#e8e4e4', fontSize: 20, fontWeight: 'bold', paddingLeft: 13, borderRadius: 10, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="-" placeholderTextColor={'black'} >
                </TextInput>
                <TextInput style={{ width: 40, height: 40, backgroundColor: '#e8e4e4', fontSize: 20, fontWeight: 'bold', paddingLeft: 13, borderRadius: 10, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="-" placeholderTextColor={'black'} >
                </TextInput>
                <TextInput style={{ width: 40, height: 40, backgroundColor: '#e8e4e4', fontSize: 20, fontWeight: 'bold', paddingLeft: 13, borderRadius: 10, borderColor: 'gray', borderWidth: 1 }}
                    placeholder="-" placeholderTextColor={'black'} >
                </TextInput>
            </View>
            <Text style={{fontSize: 17, fontWeight: '700', color: 'gray', marginLeft: 20, marginTop: 20}}>Gửi lại mã sau 60 giây</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: "#ECF6FF"
    }
})