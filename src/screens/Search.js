import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

function Search({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.search}
          source={require("../img/khampha/search.png")}
        ></Image>
        <TextInput
          style={styles.textInput}
          placeholder="Bạn muốn nghe gì ?"
          placeholderTextColor="gray"
        ></TextInput>
        <TouchableOpacity onPress={() => navigation.navigate("DanhChoBan")}>
          <Text style={{ fontSize: 18, paddingTop: 8 }}>Hủy</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <View>
          <View style={styles.history_search}>
            <Text style={{ fontWeight: 600, fontSize: 20, paddingLeft: 20 }}>
              Lịch sử tìm kiếm
            </Text>
            <TouchableOpacity>
              <Image
                style={styles.icon_trash}
                source={require("../img/search/delete.png")}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.result}>
            <Text style={styles.text_result}>Có chơi có chịu</Text>
            <Text style={styles.text_result}>Thương em là điều anh không thể ngờ</Text>
            <Text style={styles.text_result}>Mời người kế tiếp</Text>
            <Text style={styles.text_result}>Khóa ly biệt</Text>
          </View>
        </View>
        <View style={styles.propose}>
          <Text>
            Test
          </Text>
        </View>
      </View>
    </View>
  );
}

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  body: {
    flex: 8,
  },
  search: {
    width: 30,
    height: 30,
    position: "absolute",
    left: 25,
    top: 20,
  },
  textInput: {
    width: "80%",
    height: 35,
    fontSize: 16,
    backgroundColor: "C4C4C4",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
    paddingLeft: 35,
    marginLeft: 20,
    marginTop: 5,
    marginRight: 10,
  },
  icon_trash: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  history_search: {
    width: "96%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  result: {

  },

  text_result: {
    fontSize: 16,
    fontWeight: "normal",
    color: "black",
    paddingLeft: 20,
    paddingTop: 10,
    backgroundColor: "gray",
    borderRadius: 20,
    // display: "inline",
    flexDirection: "row",
    width: "90%",
    marginLeft: 20,
    justifyContent: "center",
  },
  propose: {},
  result: {
    display: "flex",
  },
});
