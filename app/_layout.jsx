// This layout for the files in app folder

import {View ,Text , StyleSheet, Pressable, Button} from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import {MaterialIcons} from '@expo/vector-icons';

//import Login from './Login';

export default function _layout() {
    const router = useRouter();
    const icon = require('./../assets/Logo/Favicon.png');
    const handleLogout = () => {
        
        router.push('/Login');
    };
    const color = '#127ac1';
    const size = 30;

    return(
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor:'#127ac1',
                },
                headerTintColor:'white'
            }}
        >
            <Stack.Screen name='index' options={{
                title : 'Home',
                
                headerRight: () => (
                    <Button title="Logout" onPress={handleLogout} color="#ed3926" />
                )
            }}/>
            <Stack.Screen
                name='(tabs)'
                options={{headerShown : false}}
            />
            <Stack.Screen name='SignUp' options={{
                title : 'Register',
                headerLeft: () => (
                    <Pressable onPress={() => router.back()} style={styles.back}>
                        <MaterialIcons name="arrow-back" size={size} color='#fff' />
                    </Pressable>
                ),
            }}/>
            <Stack.Screen name='Login' options={{
                title : 'Login',
                presentation :'modal',
                headerLeft: () => (
                    <Pressable onPress={() => router.back()} style={styles.back}>
                        <MaterialIcons name="arrow-back" size={size} color='#fff' />
                    </Pressable>
                ),
            }}/>
             <Stack.Screen name='Country' options={{
                title : 'Country',
                headerLeft: () => (
                    <Pressable onPress={() => router.back()} style={styles.back}>
                        <MaterialIcons name="arrow-back" size={size} color='#fff' />
                    </Pressable>
                ),
            }}/>
            <Stack.Screen name='Choose' options={{
                title : 'Country',
                headerLeft: () => (
                    <Pressable onPress={() => router.back()} style={styles.back}>
                        <MaterialIcons name="arrow-back" size={size} color='#fff' />
                    </Pressable>
                ),
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
    },
    back:{
        margin :10
    }
})