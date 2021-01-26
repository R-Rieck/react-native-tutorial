import React, { useEffect, useState } from "react";
import {
  Button,
  TextInput,
  View,
  FlatList,
  ListRenderItem,
  Text,
} from "react-native";
import { ChatItemType } from "../types/chatItem";
import { User } from "../types/userType";
import styles from "../styles/chat";
import { ChatItem } from "./chatItem";

type ChatPropsType = {
  user: User;
};

const Chat = (props: ChatPropsType) => {
  const { user } = props;

  const [message, setMessage] = useState<string>("");
  const [messageList, setMessageList] = useState<ChatItemType[]>([
    {
      id: Math.random().toString(36).substring(7),
      message: 'loool',
      by: 'powski',
      image: '',
      timestamp: Date.now(),
    },
  ]);

  useEffect(() => console.log("user from chat:", user), []);

  const renderItem: ListRenderItem<ChatItemType> = ({ item }) => {
    console.log(item);
    // return <Text>hallo</Text>
    return <ChatItem chatItem={item} key={item.id} authenticatedUser={ user.username}/>;
  };

  const handleAddMessage = () => {
    setMessageList([
      ...messageList,
      {
        id: Math.random().toString(36).substring(7),
        message: message,
        by: user.username,
        image: user.imageUrl,
        timestamp: Date.now(),
      },
    ]);
    setMessage("");
  };
  return (
    <View style={styles.chatContainer}>
      <View style={styles.messageContainer}>
        <FlatList
          inverted
          keyExtractor={(item) => item.id}
          data={messageList} //.sort((a, b) => a.timestamp - b.timestamp)
          renderItem={renderItem}
        />
      </View>
      <View style={styles.actionContainer}>
        <TextInput
          style={styles.messageInput}
          value={message}
          onChangeText={(text: string) => setMessage(text)}
        />
        <Button title="send" onPress={() => handleAddMessage()} />
      </View>
    </View>
  );
};
export default Chat;
