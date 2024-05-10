import React , {useState , useEffect} from "react";
import { View , Text ,TextInput ,StyleSheet } from "react-native";


export default function Flightinput({onFrom}){
    return(
        <View style={styles.container}>
            <TextInput
                placeholder="From...."

            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    button: {
        borderRadius: 5,
        width: 'auto',
        height: 'auto',
    },
    text: {
        fontSize: 20,
        fontStyle: 'italic',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    list: {
        width: '100%',

    },
    items:{
        flex :1,
        flexDirection:'row'
    }
});
