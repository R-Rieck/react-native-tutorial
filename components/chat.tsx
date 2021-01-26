import React, { useEffect, useState } from "react";
import {
  Button,
  Text,
  TextInput,
  View,
  FlatList,
  ListRenderItem,
} from "react-native";
import { ChatItem } from "../types/chatItem";
import { User } from "../types/userType";
import styles from "../styles/chat";

type ChatPropsType = {
  user: User;
};

const Chat = (props: ChatPropsType) => {
  const { user } = props;

  const [message, setMessage] = useState<string>("");
  const [messageList, setMessageList] = useState<ChatItem[]>([]);

  useEffect(() => console.log(messageList), [messageList]);

  const renderItem: ListRenderItem<ChatItem> = ({ item }) => <Text>hey</Text>;
  return (
    <View style={styles.chatContainer}>
      <View style={styles.messageContainer}>
        <FlatList
          inverted
          keyExtractor={(item) => item.id}
          data={messageList.sort((a, b) => a.timestamp - b.timestamp)}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.actionContainer}>
        <TextInput
          style={styles.messageInput}
          value={message}
          onChange={(e: any) => setMessage(e.target.value)}
        />
        <Button
          title="send"
          onPress={() =>
            setMessageList([
              ...messageList,
              {
                id: Math.random().toString(36).substring(7),
                message: message,
                by: user.username,
                image: user.imageUrl,
                timestamp: Date.now(),
              },
            ])
          }
        />
      </View>
    </View>
  );
};
export default Chat;
