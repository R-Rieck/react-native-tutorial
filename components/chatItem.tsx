import React, { useState } from "react";
import { View, Text, Image, Animated, Easing } from "react-native";
import { ChatItemType } from "../types/chatItem";
import styles from "../styles/chatItem";
import { useEffect } from "react";

type ChatItemPropsType = {
  chatItem: ChatItemType;
  authenticatedUser: string;
};

export const ChatItem = (props: ChatItemPropsType) => {
  const { chatItem, authenticatedUser } = props;
  const [isAuthenticatedUser, setIsAuthenticatedUser] = useState<boolean>(
    false
  );
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      duration: 200,
      useNativeDriver: true,
      toValue: 1,
      easing: (number) => Easing.ease(number),
    }).start();
  });

  useEffect(() => {
    if (chatItem.by === authenticatedUser) setIsAuthenticatedUser(true);
    else setIsAuthenticatedUser(false);
  }, [props]);

  return (
    <Animated.View
      style={{
        ...styles.chatItemContainer,
        alignSelf: isAuthenticatedUser ? "flex-end" : "flex-start",
        backgroundColor: isAuthenticatedUser ? "#5bcaff" : "#3DD2C4",
        opacity: animation,
        transform: [{ scale: animation }],
      }}
    >
      <View style={styles.messageHeaderContainer}>
        <Image
          style={styles.avatar}
          source={
            chatItem.image === ""
              ? require("../assets/placeholderAvatar.png")
              : { uri: chatItem.image }
          }
        ></Image>
        <View style={styles.messageHeaderInfoContainer}>
          <Text>{chatItem.by}</Text>
          <Text>{new Date(chatItem.timestamp).toLocaleTimeString()}</Text>
        </View>
      </View>
      <Text style={styles.message}>{chatItem.message}</Text>
    </Animated.View>
  );
};
