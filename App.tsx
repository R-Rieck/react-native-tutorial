import { StatusBar } from "expo-status-bar";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import { User } from "./types/userType";
import React, { useState } from "react";
import styles from "./styles/app";
import LoginScreen from "./components/loginScreen";
import Chat from "./components/chat";

export default function App() {
  const [user, setUser] = useState<User>({ username: "", imageUrl: "" });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { setItem, getItem } = useAsyncStorage("user");

  const getRequestData = async () => {
    await getItem().then((userJson: string | null) => {
      if (userJson) {
        const user: User = JSON.parse(userJson);
        setUser(user);
      }
    });
  };

  const handleLogin = (user: User) => {
    setUser(user);
    setItem(JSON.stringify(user));
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
          <Chat user={ user}/>
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
