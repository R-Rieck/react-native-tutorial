import React from 'react'
import { Button, Image, Text, TextInput, View } from 'react-native'

const LoginScreen = () => {
    return (
        <View>
            <Image source={require("")}></Image>
            <View>
                <Text>Name:</Text>
                <TextInput></TextInput>
            </View>
            <Button title="Start Chatting!" onPress={ () => console.log("Starting to chat")}/>
        </View>
    )
}

export default LoginScreen;