import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    avatar: {
        height: 128,
        width: 128,
        borderRadius: 20,
        marginTop: 15,
        alignSelf: "stretch"
    },
    avatarPlaceholder: {
        height: 50,
        width: 128,
        borderRadius: 20,
        marginTop: 15,
        backgroundColor: '#e6e6e6',
        alignSelf: "stretch",
        justifyContent: 'center'
    },
    missingImageText: {
        alignSelf: 'center'
    }
})