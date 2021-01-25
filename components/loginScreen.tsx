import React from "react";
import { Button, Image, Text, TextInput, View, StyleSheet } from "react-native";

const LoginScreen = () => {
  const handleButtonPress = () => {
    console.log("Starting to chat");
  };
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
      <View>
        <View>
          <Text>Name:</Text>
          <TextInput style={styles.textInput}></TextInput>
        </View>
        <Button title="Start Chatting!" onPress={() => handleButtonPress()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  logo: {
    width: 128,
    height: 128,
    },
    textInput: {
        backgroundColor: '#e6e6e6'
    }
});

export default LoginScreen;
