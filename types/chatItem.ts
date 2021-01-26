import { Image } from "react-native";

export interface ChatItemType {
    id: string,
    image: string,
    message: string,
    timestamp: number,
    by: string
}