import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button ,FlatList, ScrollView} from "react-native";
import { Video } from "expo-av";

const data = [
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
  "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
];

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item, idx) => idx.toString()}
        renderItem={renderItem}
        removeClippedSubviews
        windowSize={1}
        numColumns={1}
        numColumns={3}
      />
      {/* <ScrollView>
        {data.map((item, idx) => {
          return <View key={idx}>{renderItem({item})}</View>
        })}
      </ScrollView> */}
    </View>
  );
}

const renderItem = ({item}) => {
   return (
     <Video
       style={{ width: 100, height: 100 }}
       source={{
         uri: item
       }}
       useNativeControls
       resizeMode="cover"
       isLooping
       isMuted
     />
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
