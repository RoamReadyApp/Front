// This layout for the files in app folder

import {View ,Text , StyleSheet, Pressable, Button} from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'

//import Login from './Login';

export default function _layout() {
    const router = useRouter();
    const icon = require('./../assets/Logo/Favicon.png');

    return(
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor:'black',
                },
                headerTintColor:'white'
            }}
        >
            <Stack.Screen name='index' options={{
                title : 'Home',
                headerBackImageSource:{icon}
            }}/>
            <Stack.Screen
                name='(tabs)'
                options={{headerShown : false}}
            />
            <Stack.Screen name='SignUp' options={{
                title : 'Register',
                headerRight: () =>{
                    <Pressable 
                        onPress={() => router.push('./Login')}
                        style={({ pressed }) => [
                            { opacity: pressed ? 0.5 : 1 },
                            styles.logButton
                        ]}
                    >
                        <Text style = {styles.logText}>Login</Text>
                    </Pressable>
                    
                }
            }}/>
            <Stack.Screen name='Login' options={{
                title : 'Login',
                presentation :'modal'
            }}/>
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