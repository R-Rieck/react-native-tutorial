import React, { useState } from "react";
import { Button, Image, Text, TextInput, View } from "react-native";
import styles from "../styles/loginScreen";
import ImageChooser from "./imagePicker";

const LoginScreen = () => {
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const handleButtonPress = () => {
    console.log("Starting to chatsss");
  };
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
      <View style={styles.actionContainer}>
        <View>
          <Text>Name:</Text>
          <TextInput style={styles.textInput}></TextInput>
        </View>

        <ImageChooser changeImage={(image: string) => setImage(image)} />

        <Button title="Start Chatting!" onPress={() => handleButtonPress()} />
      </View>
    </View>
  );
};

export default LoginScreen;
