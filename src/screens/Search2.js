import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Search2({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.search1} source={require('../img/khampha/search.png')}></Image>
                <TextInput style={styles.textInput1} placeholder="Bạn muốn nghe gì ?" placeholderTextColor='gray'></TextInput>
                <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                    <Text style={{ color: 'black', marginTop: 10, marginLeft: 10, fontSize: 15, fontWeight: '500' }}>Hủy</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
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
        width: 320,
        height: 35,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        paddingLeft: 35,
        marginLeft: 20,
        marginTop: 5,
    },
});