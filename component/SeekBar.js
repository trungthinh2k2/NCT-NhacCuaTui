import { StyleSheet, Text, View } from "react-native";
import Slider from '@react-native-community/slider';
import React from "react";

const SeekBar = () => {
  return (
    <View style={{alignItems: "center"}}>
      <Slider
        style={{ width: "90%", height: 40,  }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#000000"
      />
    </View>
  );
};

export default SeekBar;

const styles = StyleSheet.create({});


// import { StyleSheet, Text, View } from "react-native";
// import Slider from '@react-native-community/slider';
// import React from "react";
// // var Slider = require('react-native-slider');

// function pad(n, width, z=0) {
//   n = n + '';
//   return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
// }

// const minutesAndSeconds = (position) => ([
//   pad(Math.floor(position / 60), 2),
//   pad(position % 60, 2),
// ]);

// const SeekBar = ({
//   trackLength,
//   currentPosition,
//   onSeek,
//   onSlidingStart,
// }) => {
//   const elapsed = minutesAndSeconds(currentPosition);
//   const remaining = minutesAndSeconds(trackLength - currentPosition);
//   return (
//     <View style={styles.container}>
//       <View style={{flexDirection: 'row'}}>
//         <Text style={styles.text}>
//           {elapsed[0] + ":" + elapsed[1]}
//         </Text>
//         <View style={{flex: 1}} />
//         <Text style={[styles.text, {width: 40}]}>
//           {trackLength > 1 && "-" + remaining[0] + ":" + remaining[1]}
//         </Text>
//       </View>
//       <Slider
//         maximumValue={Math.max(trackLength, 1, currentPosition + 1)}
//         onSlidingStart={onSlidingStart}
//         onSlidingComplete={onSeek}
//         value={currentPosition}
//         style={styles.slider}
//         minimumTrackTintColor='#fff'
//         maximumTrackTintColor='rgba(255, 255, 255, 0.14)'
//         thumbStyle={styles.thumb}
//         trackStyle={styles.track}/>
//     </View>
//   );
// };

// export default SeekBar;

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//   },
//   text: {
//     color: '#fff',
//     fontSize: 12,
//     justifyContent: "space-around"
//   },
//   slider: {
//     width: "90%",
//   },
  
// });
