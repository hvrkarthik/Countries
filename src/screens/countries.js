import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Countries({ route, navigation }) {
  const { data } = route.params;

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        navigation.navigate("CountryLanguages", {
          data: data[index],
        });
      }}
    >
      <View
        style={{
          justifyContent: "center",
          borderWidth: 0.5,
          borderColor: "black",
          flex: 1,
        }}
      >
        <Image
          style={{ width: 35, height: 35, marginHorizontal: 10 }}
          source={{ uri: item.flags.png }}
        />
      </View>
      <View style={{ borderWidth: 0.5, borderColor: "black", flex: 1 }}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.title}>{item.capital}</Text>
        {/* <Text>{index}</Text> */}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: "center",
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    // marginVertical: 5,
    backgroundColor: "#FFD7D7",
    // borderRadius:10
  },
  title: {
    textAlign: "right",
    marginHorizontal: 10,
  },
});
