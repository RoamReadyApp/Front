import {Pressable, StyleSheet} from 'react-native'
import React from 'react'
import {Tabs, useRouter} from 'expo-router'
import {MaterialIcons} from '@expo/vector-icons';

export default function _layout() {
    const router = useRouter();
    const icon = require('./../../assets/Logo/Favicon.png');
    const color = '#12ac1';
    const size = 20;

    return (
        <Tabs
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#D3dfe8',
                },
                headerTintColor: 'white',
                headerBackImageSource: {icon},
                headerStyle: {
                    backgroundColor:'#127ac1',
                },

            }}
        >

            <Tabs.Screen name='Flights' options={{
                title: 'Flights',
                tabBarIcon: () => (
                    <MaterialIcons name="flight" size={size} color={color}/>
                ),
                headerLeft: () => (
                    <Pressable onPress={() => router.push('/Country')} style={styles.back}>
                        <MaterialIcons name="arrow-back" size={size} color='#fff' />
                    </Pressable>
                ),

            }}/>
            <Tabs.Screen name='Hotels' options={{
                title: 'Hotel',
                tabBarIcon: () => (
                    <MaterialIcons name="hotel" size={size} color={color}/>
                ),
                headerLeft: () => (
                    <Pressable onPress={() => router.back()} style={styles.back}>
                        <MaterialIcons name="arrow-back" size={size} color='#fff' />
                    </Pressable>
                ),

            }}/>
            <Tabs.Screen name='[missing]' options={{
                tabBarShowLabel: false

            }}/>

        </Tabs>
    );
}

const styles = StyleSheet.create({
    logText: {
        fontSize: 5,
        color: 'white'
    },
    back:{
        margin :10
    }
})
