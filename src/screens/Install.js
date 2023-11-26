import React from 'react';
import { Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

export default function Install({ navigation }) {
    const [enableWifi, setEnableWifi] = React.useState(true);
    const [enableLove, setEnableLove] = React.useState(false);
    const [enableAuto, setEnableAuto] = React.useState(false);
    const [enableLanguage, setEnableLanguage] = React.useState(false);
    const [enableNotification, setEnableNotification] = React.useState(true);
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('CuaToi')}>
                    <Image style={{ width: 30, height: 30, resizeMode: 'contain', marginLeft: 10, marginTop: 5 }} source={require('../img/install/behon.png')} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 7, marginLeft: 120 }}>Cài đặt</Text>
            </View>
            <ScrollView>
                <View style={styles.body}>
                    <Text style={{ fontSize: 18, color: 'gray', marginTop: 7, marginLeft: 30, marginTop: 30, }}>Tài khoản</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', width: 370, height: 60, backgroundColor: '#e8e4e4', marginLeft: 10, borderRadius: 10, marginTop: 10 }}>
                        <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15, fontWeight: '400' }}>Thông tin tài khoản</Text>
                        <Image style={{ width: 20, height: 20, resizeMode: 'contain', marginTop: 17, marginLeft: 150 }} source={require('../img/install/vector.png')} />
                    </TouchableOpacity>

                    <Text style={{ fontSize: 18, color: 'gray', marginTop: 7, marginLeft: 30, marginTop: 30, }}>Trình phát nhạc</Text>
                    <View style={{ width: 370, height: 280, backgroundColor: '#e8e4e4', marginLeft: 10, borderRadius: 10, marginTop: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15, fontWeight: '400' }}>Đồng bộ/Tải bằng wifi</Text>
                            <Switch
                                trackColor={{ false: "gray", true: "blue" }}
                                onValueChange={(value) => setEnableWifi(value)}
                                value={enableWifi}
                                style={{ marginTop: 15, marginLeft: 120, height: 23 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15, fontWeight: '400' }}>Đồng bộ nhạc đã tải sang yêu thích</Text>
                                <Text style={{ fontSize: 15, marginLeft: 20, color: 'gray' }}>Bài hát đã tải sẽ tự động thêm vào yêu thích.</Text>
                            </View>
                            <Switch
                                trackColor={{ false: "gray", true: "blue" }}
                                onValueChange={(value) => setEnableLove(value)}
                                value={enableLove}
                                style={{ marginTop: 20, height: 23 }}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15, fontWeight: '400' }}>Tự động phát nhạc</Text>
                                <Text style={{ fontSize: 15, marginLeft: 20, color: 'gray' }}>Tự động phát nhạc khi mở ứng dụng</Text>
                            </View>
                            <Switch
                                trackColor={{ false: "gray", true: "blue" }}
                                onValueChange={(value) => setEnableAuto(value)}
                                value={enableAuto}
                                style={{ marginTop: 20, marginLeft: 50, height: 23 }}
                            />
                        </View>
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15, fontWeight: '400' }}>Hẹn giờ</Text>
                            <Image style={{ width: 20, height: 20, resizeMode: 'contain', marginTop: 17, marginLeft: 250 }} source={require('../img/install/vector.png')} />
                        </TouchableOpacity>
                    </View>

                    <Text style={{ fontSize: 18, color: 'gray', marginTop: 7, marginLeft: 30, marginTop: 30, }}>Hiển thị</Text>
                    <View style={{ width: 370, height: 200, backgroundColor: '#e8e4e4', marginLeft: 10, borderRadius: 10, marginTop: 10 }}>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15, fontWeight: '400' }}>Giao diện</Text>
                            <Text style={{ fontSize: 15, marginLeft: 200, marginTop: 15, color: 'gray' }}>Sáng</Text>
                            <Image style={{ width: 20, height: 20, resizeMode: 'contain', marginTop: 17, marginLeft: 5 }} source={require('../img/install/vector.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15, fontWeight: '400' }}>Ngôn ngữ</Text>
                            <Text style={{ fontSize: 15, marginLeft: 172, marginTop: 15, color: 'gray' }}>Tự động</Text>
                            <Image style={{ width: 20, height: 20, resizeMode: 'contain', marginTop: 17, marginLeft: 5 }} source={require('../img/install/vector.png')} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <View style={{ flexDirection: 'column' }}>
                                <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15, fontWeight: '400' }}>Tiếng Việt không dấu qua</Text>
                                <Text style={{ fontSize: 18, marginLeft: 20, fontWeight: '400' }}>Bluetooth</Text>
                            </View>
                            <Switch
                                trackColor={{ false: "gray", true: "blue" }}
                                onValueChange={(value) => setEnableLanguage(value)}
                                value={enableLanguage}
                                style={{ marginTop: 25, marginLeft: 80, height: 23 }}
                            />
                        </View>
                    </View>

                    <Text style={{ fontSize: 18, color: 'gray', marginTop: 7, marginLeft: 30, marginTop: 30, }}>Tổng quan</Text>
                    <View style={{ width: 370, height: 180, backgroundColor: '#e8e4e4', marginLeft: 10, borderRadius: 10, marginTop: 10 }}>
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15, fontWeight: '400' }}>Quản lý thiệt bị đăng nhập</Text>
                            <Image style={{ width: 20, height: 20, resizeMode: 'contain', marginTop: 17, marginLeft: 100 }} source={require('../img/install/vector.png')} />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15, fontWeight: '400' }}>Thông báo</Text>
                            <Switch
                                trackColor={{ false: "gray", true: "blue" }}
                                onValueChange={(value) => setEnableNotification(value)}
                                value={enableNotification}
                                style={{ marginTop: 15, marginLeft: 200, height: 23 }}
                            />
                        </View>
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15, fontWeight: '400' }}>Quét mã QR</Text>
                            <Image style={{ width: 20, height: 20, resizeMode: 'contain', marginTop: 17, marginLeft: 210 }} source={require('../img/install/vector.png')} />
                        </TouchableOpacity>
                    </View>

                    <Text style={{ fontSize: 18, color: 'gray', marginTop: 7, marginLeft: 30, marginTop: 30, }}>Dữ liệu</Text>
                    <View style={{ width: 370, height: 150, backgroundColor: '#e8e4e4', marginLeft: 10, borderRadius: 10, marginTop: 10 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15, fontWeight: '400' }}>Xóa cache</Text>
                            <Text style={{ fontSize: 18, marginLeft: 180, marginTop: 15, color: 'gray' }}>0 MB</Text>
                            <Image style={{ width: 20, height: 20, resizeMode: 'contain', marginTop: 17, marginLeft: 5 }} source={require('../img/install/vector.png')} />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 30, fontWeight: '400' }}>0 GB của 51.34 GB đã sử dụng</Text>
                        <View style={{ width: 330, height: 5, backgroundColor: 'gray', marginLeft: 20, marginTop: 10, borderRadius: 10 }}></View>
                    </View>

                    <Text style={{ fontSize: 18, color: 'gray', marginTop: 7, marginLeft: 30, marginTop: 30, }}>Khác</Text>
                    <View style={{ width: 370, height: 250, backgroundColor: '#e8e4e4', marginLeft: 10, borderRadius: 10, marginTop: 10 }}>
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15, fontWeight: '400' }}>Đánh giá ứng dụng</Text>
                            <Image style={{ width: 20, height: 20, resizeMode: 'contain', marginTop: 17, marginLeft: 152 }} source={require('../img/install/vector.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15, fontWeight: '400' }}>Hướng dẫn và hỗ trợ</Text>
                            <Image style={{ width: 20, height: 20, resizeMode: 'contain', marginTop: 17, marginLeft: 140 }} source={require('../img/install/vector.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15, fontWeight: '400' }}>Góp ý, báo lỗi</Text>
                            <Image style={{ width: 20, height: 20, resizeMode: 'contain', marginTop: 17, marginLeft: 197 }} source={require('../img/install/vector.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 20 }}>
                            <Text style={{ fontSize: 18, marginLeft: 20, marginTop: 15, fontWeight: '400' }}>Thông tin</Text>
                            <Image style={{ width: 20, height: 20, resizeMode: 'contain', marginTop: 17, marginLeft: 230 }} source={require('../img/install/vector.png')} />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={{ width: 370, height: 40, backgroundColor: '#e8e4e4', marginLeft: 10, borderRadius: 10, marginTop: 30, marginBottom: 50 }}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={{ fontSize: 18, fontWeight: '500', color: 'blue', marginLeft: 150, marginTop: 5 }}>Đăng xuất</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
    body: {
        backgroundColor: 'white',
    },
});