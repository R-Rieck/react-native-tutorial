import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    chatContainer: { flex: 1, alignSelf: 'stretch' },
    messageContainer: {
        marginTop: 30,
        flex: 1,
        flexGrow: 1
    },
    actionContainer: {
        flexDirection: "row",
        margin: 15,
    },
    messageInput: {
        marginRight: 5,
        borderColor: "rgba(52, 52, 52, 0.8)",
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 5,
        flexGrow: 1,
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 18,
    }
})