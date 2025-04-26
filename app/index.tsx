import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => router.push("/pages/home")}
      style={styles.container}
    >
      <Image
        source={require("./../assets/image/home.png")}
        style={styles.image}
      />

      <Text style={styles.text1}>Press to continue</Text>
    </Pressable>
  );
};

export default index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  text1: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
  },
});

