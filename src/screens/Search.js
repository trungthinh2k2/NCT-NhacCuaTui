import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Search = () => {
  return (
    <View>
              {this.props.isLoading&&
                <View>
                    <ActivityIndicator size="large" color="#00ff00" />
                </View>
              }
              <TextInput 
                placehoder="Tìm kiếm..."
                onChangeText={(inputtext) => input=inputtext}
                style={{color:'black',fontWeight: 'bold'}}
                //value={input}
                />
              <Button 
                onPress={()=>{
                  //console.log('Button search pressed');
                  this.getSearchSongRespone();
                  this.getSearchVideoRespone();
                  this.getSearchKaraokeRespone();
                  this.getSearchPlaylistRespone();
                  
                }}
                title="Search"
                color="#841584"
                />
            </View>
  )
}

export default Search

const styles = StyleSheet.create({})