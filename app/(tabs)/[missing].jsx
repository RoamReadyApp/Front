import {View , Text , StyleSheet} from 'react-native'
import React from 'react'

export default function Page() {
    return(

        <View style = {styles.container}>
            <Text style ={styles.header}>Not Found!</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header:{
        fontSize:20,
    }
})