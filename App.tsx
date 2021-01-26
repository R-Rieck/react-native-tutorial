import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import { User } from "./types/userType";
import React, { useEffect, useState } from "react";
import styles from "./styles/app";
import LoginScreen from "./components/loginScreen";
import Chat from "./components/chat";

export default function App() {
  const [user, setUser] = useState<User>({ username: "", imageUrl: "" });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const storageKey = "user";

  const getRequestData = async () => {
    await AsyncStorage.getItem(storageKey).then((userJson: string | null) => {
      if (userJson) {
        const user: User = JSON.parse(userJson);
        console.log("user from AppTsx:", user);
        setUser(user);
      } else {
        setUser({ username: "", imageUrl: "" });
      }
    });
  };

  const handleLogin = (user: User) => {
    setUser(user);
    AsyncStorage.clear();
    AsyncStorage.setItem(storageKey, JSON.stringify(user));
  };

  if (isLoading)
    return (
      <AppLoading
        startAsync={() => getRequestData()}
        onFinish={() => setIsLoading(false)}
        onError={console.warn}
      />
    );

  return (
    <SafeAreaView style={styles.container}>
      {user.username === "" ? (
        <LoginScreen onLogin={(user: User) => handleLogin(user)} />
      ) : (
        <Chat user={user} />
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
