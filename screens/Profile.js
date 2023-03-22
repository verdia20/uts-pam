import React from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "../assets";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={Avatar} style={styles.avatar} />
      </View>
      <View style={styles.info}>
        <Text>Ferdy. M</Text>
      </View>
      <View style={styles.info}>
        <Text>120140098</Text>
      </View>
      <View style={styles.info}>
        <Text>Teknik Informatika</Text>
      </View>
      <TouchableOpacity style={styles.info} onPress={() => navigation.navigate("ChangeProfile")}>
        <Text>Ubah Foto Profil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1B24",
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    width: 48,
    height: 48,
    borderRadius: 6,
    backgroundColor: "#C0C0C0",
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
    objectFit: "cover",
  },
  info: {
    width: "75%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginTop: 25,
    borderRadius: 5,
  },
});

export default Profile;
