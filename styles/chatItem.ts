import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    chatItemContainer: {
        padding: 10,
        margin: 10,
        width: 250,
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 15,
        alignSelf: 'flex-end'
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 10
    },
    messageHeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    messageHeaderInfoContainer: {
        display: 'flex',
        flexGrow: 5,
        margin: 5,
        marginLeft: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    message: {
        paddingTop: 10
    }
})