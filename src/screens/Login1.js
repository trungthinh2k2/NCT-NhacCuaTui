import React from "react";
import { View, StyleSheet, Image, TextInput, Text, TouchableOpacity } from "react-native";
import { MyContext } from "../../App";

export default function Login1({ navigation }) {
    const { user, setUser } = React.useContext(MyContext);
    const [phone, setPhone] = React.useState('');
    const [error, setError] = React.useState('');
    const [error1, setError1] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleLogin = () => {
        if (phone === '') {
            setError('Vui lòng nhập số điện thoại');
            return;
        }
        else if (password === '') {
            setError1('Vui lòng nhập mật khẩu');
            return;
        }
        else {
            fetch('https://6560d8a683aba11d99d19bab.mockapi.io/Account?phoneNumber=' + phone)
                .then((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then((responseJson) => {
                    if (responseJson.length <= 0) {
                        setError('Số điện thoại không chính xác');
                        return;
                    }
                    else {
                        if (responseJson[0].password !== password) {
                            setError1('Mật khẩu không chính xác');
                            return;
                        }
                        setUser(responseJson[0]);
                        navigation.navigate('MyTab');
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }
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
                onChangeText={(value) => { setError(''); setPhone(value) }}
            />

            <Text style={{ color: 'red', marginLeft: 20 }}>{error}</Text>

            <TextInput style={{ height: 60, borderColor: 'gray', borderWidth: 1, marginTop: 30, marginLeft: 20, marginRight: 20, borderRadius: 10, paddingLeft: 20, fontSize: 20, fontWeight: 'bold', backgroundColor: '#e8e4e4' }}
                placeholder="Nhập mật khẩu"
                placeholderTextColor={'gray'}
                secureTextEntry={true}
                onChangeText={(value) => { setError1(''); setPassword(value) }}
            />

            <Text style={{ color: 'red', marginLeft: 20 }}>{error1}</Text>

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={{ color: '#e2b2d7', fontSize: 22 }}>TIẾP TỤC</Text>
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
    },
    button: {
        width: '90%',
        height: 60,
        marginTop: 20,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        marginLeft: 20
    }
})