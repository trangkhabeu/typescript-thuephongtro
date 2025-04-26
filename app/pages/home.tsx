import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Checkbox from "expo-checkbox";

const Home = () => {
  type Data = {
    id: number;
    maphongtro: string;
    tennguoithue: string;
    sodienthoai: string;
    ngaythue: string;
    hinhthucthanhtoan: string;
    ghichu: string;
  };

  const [isChecked, setChecked] = useState(false);
  const datas: Data[] = [
    {
      id: 1,
      maphongtro: "PT-001",
      tennguoithue: "Jawa Timur",
      sodienthoai: "0123456789",
      ngaythue: "2023-10-01",
      hinhthucthanhtoan: "Tiền mặt",
      ghichu: "indonesia",
    },
    {
      id: 2,
      maphongtro: "PT-002",
      tennguoithue: "Jawa Timur",
      sodienthoai: "0123456789",
      ngaythue: "2023-10-01",
      hinhthucthanhtoan: "Tiền mặt",
      ghichu: "indonesia",
    },
    {
      id: 3,
      maphongtro: "PT-003",
      tennguoithue: "DI Yogyakarta",
      sodienthoai: "0123456789",
      ngaythue: "2023-10-01",
      hinhthucthanhtoan: "Tiền mặt",
      ghichu: "indonesia",
    },
  ];
  const RenderItem = ({ data }: { data: Data }) => {
    return (
      <View style={styles.tbody}>
        <Text style={styles.td}>{data.id}</Text>
        <Text style={styles.td}>{data.maphongtro}</Text>
        <Text style={styles.td}>{data.tennguoithue}</Text>
        <Text style={styles.td}>{data.sodienthoai}</Text>
        <Text style={styles.td}>{data.ngaythue}</Text>
        <Text style={styles.td}>{data.hinhthucthanhtoan}</Text>
        <Text style={styles.td}>{data.ghichu}</Text>
        <Checkbox value={isChecked} onValueChange={setChecked} />
      </View>
    );
  };
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.text1}>Danh sách phòng trọ</Text>
      </View>
      {/* Search input */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search here..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
          style={styles.textInput}
        />
        <FontAwesome
          name="search"
          size={24}
          color="black"
          style={styles.searchIcon}
        />
      </View>
      {/* Search input */}
      {/* Create  */}

      {/* Table */}
      <View style={styles.main}>
        <View style={styles.thead}>
          <Text style={styles.th}>ID</Text>
          <Text style={styles.th}>Mã Phòng Trọ</Text>
          <Text style={styles.th}>Tên Người Thuê</Text>
          <Text style={styles.th}>Số Điện Thoại</Text>
          <Text style={styles.th}>Ngày Thuê</Text>
          <Text style={styles.th}>Hình Thức Thanh Toán</Text>
          <Text style={styles.th}>Ghi Chú</Text>
        </View>
        <FlatList<Data>
          data={datas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <RenderItem data={item} />}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    fontSize: 40,
    color: "black",
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    padding: 10,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchIcon: {
    margin: 5,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#fff",
  },
  main: {
    flex: 1,
    paddingTop: 2,
    paddingHorizontal: 1,
    backgroundColor: "#fff",
    margin: 20,
    padding: 10,
  },
  thead: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  th: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    flex: 1,
    elevation: 1,
    borderColor: "#fff",
    backgroundColor: "#fff",
    padding: 10,
  },
  tbody: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 1,
    marginHorizontal: 2,
    padding: 10,
    borderColor: "#fff",
    borderRadius: 3,
    elevation: 1,
    backgroundColor: "#fff",
  },
  td: {
    fontSize: 15,
    textAlign: "left",
    flex: 1,
  },
});

