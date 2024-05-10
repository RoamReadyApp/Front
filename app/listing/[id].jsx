import React, { useState } from "react";
import {View , ScrollView , StyleSheet , TextInput} from 'react-native'
import MyButton from "@/Componants/MyButton";
import { Stack, useLocalSearchParams } from 'expo-router';
import { useRouter  } from "expo-router";




export function page() {
    const {id} = useLocalSearchParams();
    const route = useRouter();
    
    const country = Data.find((item) => item.id === id);

    const [showFlights, setShowFlights] = useState(false);
    const [showHotels, setShowHotels] = useState(false);

    const [from , setFrom] = useState('');
    const [to , setTo] = useState(''); 
    const [Class , setClass] = useState('');
    const[month , setMonth] = useState('');
    const[room , setRoom] = useState('');


    const flightINF ={
        from : from,
        to : to,
        Class : Class,
        month : month
    }
    const hotelINF ={
        from : from,
        to : to,
        Class : Class,
        month : month,
        room : room
    }

   
    const palstine = require('./../../assets/Countries/Paliestine.jpg');
    const a = require('./../../assets/Countries/2.jpg');
    const b = require('./../../assets/Countries/7.jpg');
    const c = require('./../../assets/Countries/4.jpg');
    const d = require('./../../assets/Countries/5.jpg');

    //list of data
    const Data = [
        { id: '1', name: 'Paliestina', img: palstine  , Price : '10000$'},
        { id: '2', name: 'Egypt', img: a  , Price : '10000$'},
        { id: '3', name: 'New Yourk', img: b  , Price : '10000$'},
        { id: '4', name: 'Italy', img: c  , Price : '10000$'},
        { id: '5', name: 'Turky', img: d  , Price : '10000$'},
        { id: '6', name: 'Paliestina', img: palstine  , Price : '10000$'},
        { id: '7', name: 'Egypt', img: a  , Price : '10000$'},
        { id: '8', name: 'New Yourk', img: b  , Price : '10000$'},
        { id: '9', name: 'Italy', img: c  , Price : '10000$'},
        { id: '10', name: 'Turky', img: d  , Price : '10000$'},
        { id: '11', name: 'Paliestina', img: palstine  , Price : '10000$'},
        { id: '12', name: 'Egypt', img: a  , Price : '10000$'},
        { id: '13', name: 'New Yourk', img: b  , Price : '10000$'},
        { id: '14', name: 'Italy', img: c  , Price : '10000$'},
        { id: '15', name: 'Turky', img: d  , Price : '10000$'},
        
    ];


    // Assuming you have functions to handle navigation to Flights and Hotels
    const handleFlights = () => {
        [setTo(NameCountry(id)) , 
            route.push('/(tabs)/Flights' ),
            setShowFlights(true)
        ]
    };

    const handleHotels = () => {
        [
            route.push('/(tabs)/Hotels'),
            setShowHotels(true)
        ]
    };
    // to find the name of country by its id
    const NameCountry = (id) => {
        const country = Data.find((item) => item.id === id);
        return country ? country.name : null;
    }

    return (
        
        
        <View style={styles.container}>
            <View>
                <Stack>
                    <Stack.Screen
                        options={{
                            headerTitle:() => {
                               'Welcome To'+ NameCountry(id)
                            }
                        }}
                    />
                </Stack>
            </View>
            {/* <Text style={styles.header}>{NameCountry(id)}</Text> */}
            <View style={styles.FlightContainer}>
                {/* {showFlights && (
                        <View>
                            <TextInput 
                                placeholder="from..."
                                value={from}
                                onChangeText={setFrom}
                                style ={styles.input}
                            />
                            <TextInput 
                                placeholder="Class..."
                                value={Class}
                                onChangeText={setClass}
                                style ={styles.input}
                            />
                            
                            <TextInput 
                                placeholder="mounth.."
                                value={month}
                                onChangeText={setMonth}
                                style ={styles.input}
                            />
                        </View>
                    )} */}
                <MyButton 
                    onPress={handleFlights}
                    style={({ pressed }) => [
                        {
                        backgroundColor: color || "rgb(33, 150, 243)",
                        opacity: pressed ? 0.2 : 1,
                        },
                        styles.wrapperCustom,
                        style || {}
                    ]}
                    children={'Flights'}
                    color={'#4f9cd0'}
                />
           </View>
           <View style={styles.HotelContainer}>
                {/* {showHotels && (
                        <View>
                            <TextInput 
                                placeholder="from..."
                                value={from}
                                onChangeText={setFrom}
                                style ={styles.input}
                            />
                            <TextInput 
                                placeholder="to..." 
                                value={to}
                                onChangeText={setTo}
                                style ={styles.input}
                            />
                            <TextInput 
                                placeholder="mounth.."
                                value={month}
                                onChangeText={setMonth}
                                style ={styles.input}
                            />
                            <TextInput 
                                placeholder="Room..."
                                value={room}
                                onChangeText={setRoom}
                                style ={styles.input}
                            />
                        </View>
                    )} */}
                <MyButton 
                    onPress={handleHotels}
                    style={({ pressed }) => [
                        {
                        backgroundColor: color || "rgb(33, 150, 243)",
                        opacity: pressed ? 0.2 : 1,
                        },
                        styles.wrapperCustom,
                        style || {}
                    ]}
                    children={'Hotel'}
                    color={'#4f9cd0'}
                />
           </View>
        </View>
    );
}