import { Dimensions, StyleSheet } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const commonStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00380f',
        alignItems: 'center',
        justifyContent: 'center',       
    },
    text: {
        fontSize: 40,
        textAlign: 'center',
        color: '#ffffff',   
    },
    content: {
        fontSize: 18,
        textAlign: 'justify',
        color: '#ffffff', 
        width: windowWidth*.75,
        height: windowHeight*.5,
        marginTop: 20,
    }
});