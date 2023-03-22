import React, { Profiler, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Profile from "./screens/Profile";
import ChangeProfile from "./screens/ChangeProfile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ChangeProfile" component={ChangeProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
