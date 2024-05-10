import React  , {useEffect, useState}from "react";
import { ScrollView, View, Text, StyleSheet, FlatList } from 'react-native';
import { Picker } from "@react-native-picker/picker";
import { useRouter } from "expo-router";
import { Link } from "expo-router";
import Item from "@/Componants/item";
import MyButton from "@/Componants/MyButton";
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Page() {
    const route =useRouter();

    const room = require('../../assets/Double/1.jpg');
    //Filter var
    const [type , setType] = useState('');
    const [showFilter ,setShowFilter] = useState(false);
    const [disdata , setDisData] = useState(data);



    const data = [
        { id: '1', name: 'Paliestina', img: room  , Price : '10000$' , type : 'double'},
        { id: '2', name: 'Paliestina', img: room  , Price : '10000$', type : 'single'},
        { id: '3', name: 'Paliestina', img: room  , Price : '10000$', type : 'double'},
        { id: '4', name: 'Paliestina', img: room  , Price : '10000$', type : 'single'},
        { id: '5', name: 'Paliestina', img: room  , Price : '10000$', type : 'single'},
        { id: '6', name: 'Paliestina', img: room  , Price : '10000$', type : 'double'},
        { id: '7', name: 'Paliestina', img: room  , Price : '10000$', type : 'double'},
        { id: '8', name: 'Paliestina', img: room  , Price : '10000$', type : 'double'},
        { id: '9', name: 'Paliestina', img: room  , Price : '10000$', type : 'single'},
        { id: '10', name: 'Paliestina', img: room  , Price : '10000$', type : 'double'},
        { id: '11', name: 'Paliestina', img: room  , Price : '10000$', type : 'double'},
        { id: '12', name: 'Paliestina', img: room  , Price : '10000$', type : 'single'},
        { id: '13', name: 'Paliestina', img: room  , Price : '10000$', type : 'double'},
        { id: '14', name: 'Paliestina', img: room  , Price : '10000$', type : 'double'},
        { id: '15', name: 'Paliestina', img: room  , Price : '10000$', type : 'double'},
        
    ];

    useEffect(() => {
        if (type.trim() === "") {
            setDisData(data);
            setShowFilter(false);
        } else {
            const filteredList = filterItems();
            setDisData(filteredList);
            AsyncStorage.setItem('type', type);
        }
    },[type]);

     // Filter function
    const filterItems = () => {
        if (type === '') {
            return data;
        } else {
            return data.filter(item => item.type === type);
        }
    };

    const renderItem = ({ item }) => (
        <View style={styles.items}>
            <Item
                img={item.img}
                name={item.name}
                price={item.Price}
                type={item.type}
                onPress={{}}
            />
        </View>
    );

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Welcome Hotels</Text>
                <View style={styles.buttonContainer}>
                    {showFilter&&(<Picker
                        selectedValue={type}
                        onValueChange={(itemValue, itemIndex) => setType(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="All.." value='' />
                        <Picker.Item label="Double" value='double' />
                        <Picker.Item label="Single" value='single' />
                    </Picker>)}
                    <MyButton
                        style={styles.button}
                        children={() => (
                            <AntDesign name="filter" size={24} color="black" />
                        )}
                        onPress={() => setShowFilter(true)} // Function reference here
                    />
                    
                </View>
                <View style={styles.listContaier}>
                    <FlatList
                        style={styles.list}
                        data={disdata}
                        keyExtractor={item => item.id}
                        renderItem={renderItem}
                        numColumns={1}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    button: {
        borderRadius: 5,
        marginRight: 10,
    },
    text: {
        fontSize: 20,
        fontStyle: 'italic',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    list: {
        width: '100%',
        flexDirection:'column',
        padding:5,
    },
    listContaier:{
        flex :1,
        width :'100%',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
    items:{
        flex :1,
        flexDirection:'row',
        width:'100%',
        marginTop :5
    },
    picker: {
        height: 50,
        width: 50,
    },
});