import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import CarService from "../redux/api/CarService";

export default function AddCarScreen({ navigation }) {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await CarService.getCars({ data: value });
    setData(res.data);
  };
  useEffect(() => {
    fetchData();
  }, [value])
  

  return (
    <SafeAreaView style={{ paddingLeft: 10, paddingRight: 10 }}>
      <ScrollView>
      <TouchableOpacity
        style={styles.arrowBack}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={25} color="#0C40C8" />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.title}>เพิ่มรถของคุณ</Text>
      </View>
      <View style={styles.searchBox}>
        <TextInput
          placeholder="ค้นหารุ่นรถของคุณ"
          placeholderTextColor="gray"
          autoCapitalize="none"
          style={{ fontFamily: "Regular" }}
          onChangeText={(text) => setValue(text)}
        />
        <AntDesign name="search1" size={22} color="#B3B3B3" />
      </View>


        <FlatList
        data={data}
        initialNumToRender={7}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.items}>
            <Text style={styles.cardText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={() => (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.cardText}>ไม่มีข้อมูล</Text>
          </View>
        )}
        />
            
      
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    marginBottom: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    fontFamily: "Bold",
    color: "#0D3292",
    paddingBottom: 20,
    marginLeft: "2%",
  },
  card: {
    width: 164,
    height: 196,
    borderRadius: 10,
    borderColor: "#0C40C8",
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  cardText: {
    color: "#0C40C8",
    fontSize: 15,
    fontFamily: "Regular",
    paddingLeft: 5,
  },
  searchBox: {
    backgroundColor: "#fff",
    width: "95%",
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  items: {
    backgroundColor: "#fff",
    width: "95%",
    alignSelf: "center",
    borderRadius: 10,
    padding: 10,
    margin: 15,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  }
});
