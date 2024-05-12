//The list of countries Still working on it don't use it yet

import React , {useEffect , useState} from "react";
import{ View ,TextInput ,Text , StyleSheet, FlatList , ScrollView , Dimensions} from 'react-native';
import Countries from "../../Componants/Countries";
import {  router  } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Search from "@/Componants/Search";

const windowWidth = Dimensions.get('window').width;
// Calculate the image width based on a percentage of the window width
const imageWidth = windowWidth * 0.2;

export default function Country(){
    //the images
    const palstine = require('../assets/images/Paliestine.jpg');
    const a = require('../assets/images/2.jpg');
    const b = require('../assets/images/7.jpg');
    const c = require('../assets/images/4.jpg');
    const d = require('../assets/images/5.jpg');

    //Search var
    const [query , setQuery] = useState('');
    const [disList , setDisList] = useState([]);
    const [showInput, setShowInput] = useState(false);
    
    //const country = Data.find((item) => item.id === id);

    //const router = useRouter();
    //Iam still working on it
    //const ref = JSON.parse(route) ;

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
    const renderItem = ({ item }) => (
        <View style ={styles.items}>
            <Countries
                img={item.img}
                name ={item.name}
                onPress={()=> router.push('/(tabs)/Payment')}
            />
        </View>
    );

    
    
   
    //Search handling//////////////////////////////////////////////////////////////////////
    useEffect(() => {
        setDisList(Data);
    },[]);
    
   
    

    useEffect(() => {
        if (query.trim() === "") {
            setDisList(Data);
            setShowInput(false);
        } else {
            const filteredList = Data.filter(
                (item) => item.name.toLowerCase().includes(query.toLowerCase())
            );
            setDisList(filteredList);
            //AsyncStorage.setItem('query', query);
        }
    },[query ]);

    return (
        <ScrollView>
        <View style={styles.container}>
            <View style = {styles.searchContainer}>
            {showInput && (
                <TextInput 
                    placeholder="Search..."
                    value={query}
                    onChangeText={setQuery}
                    style ={styles.input}
                />
            )}
                <Search onPress={() => setShowInput(true)}/>
            </View>
            <Text style={styles.header}>Choose Your destination</Text>
            <View style={styles.listContaier}>
            <FlatList
                style={styles.list}
                data={disList}
                keyExtractor={item => item.id}
                renderItem={(item)=> renderItem(item)}
                numColumns={3}
            />
            </View>
        </View>
        </ScrollView>
    );
}

//Style Nagham....................................
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 0,
        marginBottom: 10,
        flexWrap: 'wrap', // Allow items to wrap to the next row
        justifyContent: 'space-between', // Add space between items
    },
    imageContainer: {
        width: imageWidth *1.25, // Adjust width to show 3 items in a row
        aspectRatio: 1, // Maintain aspect ratio
        marginBottom: 10, // Adjust spacing between rows
    },
    image: {
        width: '100%', // Adjust width as needed
        aspectRatio: 1, // Maintain aspect ratio
        resizeMode: 'cover', // or 'contain' depending on your preference
        borderRadius: 5,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5, // Adjust spacing between image and text
    },
    text: {
        fontSize: 20,
        fontStyle: 'italic',
        marginBottom: 5,
    },
    button: {
        width: '33.33%',
        aspectRatio: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 2,
    },
    searchContainer: {
        flexDirection: 'row',
        margin: 4,
        padding: 2,
        //backgroundColor: '#127ac1',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 10,
        width: '90%',
    },
    input: {
        width: '90%',
        height: 30,
        color: '#127ac1',
        borderRadius : 20,
        borderWidth : 0.25,
    },

});
