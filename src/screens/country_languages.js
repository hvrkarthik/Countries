import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function CountriesLanguage({ route, navigation }) {
  const { data } = route.params;

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <View
        style={{
          justifyContent: "center",
          borderWidth: 0.5,
          borderColor: "black",
          flex: 1,
        }}
      >
        {item.borders.map((border, index) => {
          return <Text key={index}>{border}</Text>;
        })}
      </View>
      <View style={{ borderWidth: 0.5, borderColor: "black", flex: 1 }}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.title}>{item.capital}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#FFD7D7",
          justifyContent: "center",
          height: 50,
          borderWidth: 1,
          borderColor: "black",
        }}
      >
        <Text style={{ textAlign: "center" }}>{data.name}</Text>
      </View>
      <View
        style={{ flexDirection: "row", height: 30, backgroundColor: "#FFD7D7" }}
      >
        <View
          style={{
            flex: 1,
            height: 30,
            borderWidth: 0.5,
            borderColor: "black",
          }}
        >
          <Text style={{ textAlign: "center" }}>Borders</Text>
        </View>
        <View style={{ flex: 1, borderWidth: 0.5, borderColor: "black" }}>
          <Text style={{ textAlign: "center" }}>Languages of Country</Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", backgroundColor: "#FFD7D7" }}>
        <View
          style={{
            flex: 1,
            borderWidth: 0.5,
            borderColor: "black",
            borderWidth: 0.5,
          }}
        >
          {data.borders.map((border, index) => {
            return (
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: "black",
                  borderWidth: 0.5,
                }}
              >
                <Text
                  key={index}
                  style={{ textAlign: "center", marginVertical: 10 }}
                >
                  {border}
                </Text>
              </View>
            );
          })}
        </View>
        <View
          style={{
            flex: 1,
            borderWidth: 0.5,
            borderColor: "black",
            borderWidth: 0.5,
          }}
        >
          {data.languages.map((language, index) => {
            return (
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: "black",
                  borderWidth: 0.5,
                }}
              >
                <Text
                  key={index}
                  style={{ textAlign: "center", marginVertical: 10 }}
                >
                  {language.name}
                </Text>
              </View>
            );
          })}
        </View>
      </View>

      {/* <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.name}
            /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    margin: 5,
    borderRadius: 10,
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
    borderRadius: 10,
  },
  title: {
    textAlign: "right",
    marginHorizontal: 10,
  },
});
