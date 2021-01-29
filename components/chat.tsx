import React, { useEffect, useState } from "react";
import {
  Button,
  TextInput,
  View,
  FlatList,
  ListRenderItem,
} from "react-native";
import { ChatItemType } from "../types/chatItem";
import { User } from "../types/userType";
import styles from "../styles/chat";
import { ChatItem } from "./chatItem";
import { init, sendMessage } from "../connection/socket";

type ChatPropsType = {
  user: User;
};

const Chat = (props: ChatPropsType) => {
  const { user } = props;

  const [message, setMessage] = useState<string>("");
  const [tempMessage, setTempMessage] = useState<ChatItemType>();
  const [messageList, setMessageList] = useState<ChatItemType[]>([]);
  const [socket, setSocket] = useState<WebSocket>();

  const renderItem: ListRenderItem<ChatItemType> = ({ item }) => {
    return (
      <ChatItem
        chatItem={item}
        key={item.id}
        authenticatedUser={user.username}
      />
    );
  };

  useEffect(() => {
    setSocket(init());
  }, []);

  useEffect(() => {
    if (socket !== undefined)
      socket.onmessage = (event: MessageEvent<string>) =>
        setTempMessage(JSON.parse(JSON.parse(event.data)));
  }, [socket]);

  useEffect(() => {
    if (tempMessage !== undefined) addData(tempMessage);
  }, [tempMessage]);

  const addData = (data: ChatItemType) => {
    setMessageList([...messageList, data]);
  };

  useEffect(() => console.log(messageList), [messageList]);

  const handleAddMessage = () => {
    const messageAsString = JSON.stringify({
      id: Math.random().toString(36).substring(7),
      message: message,
      by: user.username,
      image: user.imageUrl,
      timestamp: Date.now(),
    });

    socket?.send(JSON.stringify(messageAsString));

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
