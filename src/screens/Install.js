import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Install({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('CuaToi')}>
                    <Image style={{ width: 30, height: 30, resizeMode: 'contain', marginLeft: 10, marginTop: 5 }} source={require('../img/install/behon.png')} />
                </TouchableOpacity>
                <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 7, marginLeft: 120}}>Cài đặt</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
    },
});