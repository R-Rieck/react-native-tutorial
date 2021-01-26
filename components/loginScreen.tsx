import React, { useState } from "react";
import { Button, Image, Text, TextInput, View } from "react-native";
import styles from "../styles/loginScreen";
import { User } from "../types/userType";
import ImageChooser from "./imagePicker";

type LoginScreenPropsType = {
  onLogin: (user: User) => void;
};

const LoginScreen = (props: LoginScreenPropsType) => {
  const { onLogin } = props;
  const [user, setUser] = useState<User>({ username: "", imageUrl: "" });

  const handleButtonPress = () => onLogin(user);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")}></Image>
      <View style={styles.actionContainer}>
        <View>
          <Text>Name:</Text>
          <TextInput
            style={styles.textInput}
            value={user.username}
            onChange={(e: any) =>
              setUser({ ...user, username: e.target.value })
            }
          ></TextInput>
        </View>

        <ImageChooser
          changeImage={(image: string) => setUser({ ...user, imageUrl: image })}
        />

        <Button title="Start Chatting!" onPress={() => handleButtonPress()} />
      </View>
    </View>
  );
};

export default LoginScreen;
