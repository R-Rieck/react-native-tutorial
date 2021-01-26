import { Image } from "react-native";

export interface ChatItem {
    id: string,
    image: string,
    message: string,
    timestamp: number,
    by: string
}