import { StyleSheet } from 'react-native'


const loginScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        display: 'flex'
    },
    logo: {
        width: 128,
        height: 128,
    },
    textInput: {
        backgroundColor: "#e6e6e6",
        marginTop: 10,
        paddingLeft: 5
    },
    actionContainer: {
        height: 280,
        display: "flex",
        justifyContent: "space-between"
    }
})


export default loginScreenStyle