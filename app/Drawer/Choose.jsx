import React, { useState } from "react";
import {View , Text, StyleSheet , Image} from 'react-native'
import MyButton from "@/Componants/MyButton";
import { Stack, useLocalSearchParams } from 'expo-router';
import { useRouter  } from "expo-router";


export default function page({id}) {
    //const {id} = useLocalSearchParams();
    const route = useRouter();
    
    //const country = Data.find((item) => item.id === id);

    

    const flight = require('./../assets/Flight/1.jpg');
    const hotel = require('./../assets/Double/1.jpg');

    //list of data
    // const Data = [
    //     { id: '1', name: 'Paliestina', img: palstine  , Price : '10000$'},
    //     { id: '2', name: 'Egypt', img: a  , Price : '10000$'},
    //     { id: '3', name: 'New Yourk', img: b  , Price : '10000$'},
    //     { id: '4', name: 'Italy', img: c  , Price : '10000$'},
    //     { id: '5', name: 'Turky', img: d  , Price : '10000$'},
    //     { id: '6', name: 'Paliestina', img: palstine  , Price : '10000$'},
    //     { id: '7', name: 'Egypt', img: a  , Price : '10000$'},
    //     { id: '8', name: 'New Yourk', img: b  , Price : '10000$'},
    //     { id: '9', name: 'Italy', img: c  , Price : '10000$'},
    //     { id: '10', name: 'Turky', img: d  , Price : '10000$'},
    //     { id: '11', name: 'Paliestina', img: palstine  , Price : '10000$'},
    //     { id: '12', name: 'Egypt', img: a  , Price : '10000$'},
    //     { id: '13', name: 'New Yourk', img: b  , Price : '10000$'},
    //     { id: '14', name: 'Italy', img: c  , Price : '10000$'},
    //     { id: '15', name: 'Turky', img: d  , Price : '10000$'},
        
    // ];


    const handleFlights = () => {
        route.push('/(tabs)/Flights');
    };

    const handleHotels = () => {
        route.push('/(tabs)/Hotels');
    };

    return (
        <View style={styles.container}>
            <View style={styles.button}>
                <MyButton
                    onPress={handleFlights}
                    children={()=>(
                        <View style={styles.container}>
                            <Image source={flight} style={styles.image}/>
                            <Text style ={styles.text}>Flights</Text>
                        </View>
                    )}
                    //color={'#4f9cd0'}
                    
                />
            </View>
            <View style={styles.button}>
                <MyButton
                    onPress={handleHotels}
                    children={()=>(
                        <View style={styles.container}>
                            <Image source={hotel} style={styles.image}/>
                            <Text style ={styles.text}>Hotels</Text>
                        </View>
                    )}
                    
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        //borderColor: '#127ac1',
        borderWidth: 0,
        
        marginBottom: 10,
    },
    image: {
        width: 250, // Adjust width as needed
        height: 250, // Adjust height as needed
        resizeMode: 'cover',
        marginTop:20 ,
        marginLeft :20 ,
        marginRight :20,

    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 20,
        fontStyle: 'italic',
        
        marginBottom:5
    },
    button: {
        width: '30%', 
        height: 300,
        marginLeft: 30,
        marginTop: 20,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#127ac1',
        // paddingVertical: 30,
        // paddingHorizontal: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 2,
    },
   
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        fontStyle:'italic',
        marginBottom: 10,
        color: '#000000',
    },
    
});