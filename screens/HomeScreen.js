import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Image } from "react-native";
import Task from "../components/Task";
import { Avatar } from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.tasksWrapper}>
          <View style={styles.titleAndProfile}>
            <Text style={styles.sectionTitle}>Today's tasks</Text>
            <TouchableOpacity style={styles.profile} onPress={() => navigation.navigate("Profile")}>
              <Image source={Avatar} style={styles.avatar} />
            </TouchableOpacity>
          </View>
          <View style={styles.items}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={(text) => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F1B24",
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  titleAndProfile: {
    flexDirection: "row",
    justifyContent: "space-between",
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: "#FFF",
    borderRadius: 60,
    borderColor: "#C0C0C0",
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#FFF",
    borderRadius: 60,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
  },
  addText: {},
});

export default HomeScreen;
