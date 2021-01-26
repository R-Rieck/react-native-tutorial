import React from "react";
import { View, Text, Image } from "react-native";
import { ChatItemType } from "../types/chatItem";
import styles from "../styles/chatItem";
import { useEffect } from "react";

type ChatItemPropsType = {
  chatItem: ChatItemType;
};

export const ChatItem = (props: ChatItemPropsType) => {
  const { chatItem } = props;

  useEffect(() => console.log("chatItem from chatItem class:", chatItem), []);

  return (
    <View style={{...styles.chatItemContainer, backgroundColor: '#5bcaff'}}>
      <View style={styles.messageHeaderContainer}>
        <Image style={styles.avatar} source={{ uri: chatItem.image }}></Image>
        <View style={styles.messageHeaderInfoContainer}>
          <Text>{chatItem.by}</Text>
          <Text>{new Date(chatItem.timestamp).toLocaleTimeString()}</Text>
        </View>
      </View>
      <Text style={styles.message}>{chatItem.message}</Text>
    </View>
  );
};
