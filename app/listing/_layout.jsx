// This layout for the files in app folder

import {View ,Text , StyleSheet, Pressable, Button} from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'

//import Login from './Login';

export default function _layout() {
    const router = useRouter();
    

    return(
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor:'black',
                },
                headerTintColor:'white'
            }}
        >
           
            <Stack.Screen
                name='[id]'
                options={{headerShown : 'Welcom To '}}
            />
            
           
            <Stack.Screen name='[missing]' options={{
                title : '404'
            }}/>
            
            
        </Stack>
    );
}
const styles = StyleSheet.create({
    logText:{
        fontSize:5,
        color :'white'
    }
})