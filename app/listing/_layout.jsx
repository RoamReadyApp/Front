// This layout for the files in app folder

import {View ,Text , StyleSheet, Pressable, Button} from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import {MaterialIcons} from '@expo/vector-icons';

//import Login from './Login';

export default function _layout() {
    const router = useRouter();
    const color = '#12ac1';
    const size = 20;
    

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
                options={{headerShown : 'Welcom To ',
                headerLeft: () => (
                    <Pressable onPress={() => router.back()} style={styles.back}>
                        <MaterialIcons name="arrow-back" size={size} color='#fff' />
                    </Pressable>
                ),
                }}
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
    },
    back:{
        margin :10
    }
})