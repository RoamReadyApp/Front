// This fix the layout of tabs I didn't make the bottom tabs yet

import {View ,Text , StyleSheet, Pressable, Button} from 'react-native'
import React from 'react'
import { Tabs, useRouter } from 'expo-router'
import MyButton from '@/Componants/MyButton';

export default function _layout() {
    const router = useRouter();
    const icon = require('./../../assets/Logo/Favicon.png');

    return(
        <Tabs
            screenOptions={{
                headerStyle: {
                    backgroundColor:'#333333',
                },
                headerTintColor:'white',
                headerBackImageSource:{icon}
            }}
        >
            
            <Tabs.Screen name='Flights' options={{
                title : 'Flights',
                
            }}/>
            <Tabs.Screen name='Hotels' options={{
                title : 'Hotel',
                
            }}/>
            
           
            
        </Tabs>
    );
}
const styles = StyleSheet.create({
    logText:{
        fontSize:5,
        color :'white'
    }
})