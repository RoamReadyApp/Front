import React  , {useEffect , useState}from "react";
import { ScrollView, View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from "expo-router";
import { Picker } from "@react-native-picker/picker";
import Item from "@/Componants/item";
import MyButton from "@/Componants/MyButton";
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Search from "@/Componants/Search";



export default function Page() {
    const route =useRouter();

    
    //Filter var
    const [month , setMonth] = useState('');
    const [showFilter ,setShowFilter] = useState(false);
    const [disdata , setDisData] = useState(data);
    const [found , setFound] = useState(true);
    const plane = require('../../assets/Flight/1.jpg');

    

    const data = [
        { id: '1', name: 'flight1', img: plane  , Price : '10000$',month :'Jan' , to : 'Egypt' },
        { id: '3', name: 'flight3', img: plane  , Price : '10000$', month :'Mar' , to : 'paliestine' },
        { id: '4', name: 'flight1', img: plane  , Price : '10000$',month :'Apr' , to : 'New Yourk' },
        { id: '2', name: 'flight2', img: plane  , Price : '10000$', month :'Mar' , to : 'paliestine' },
        { id: '5', name: 'flight3', img: plane  , Price : '10000$',month :'Apr' , to : 'New Yourk' },
        { id: '6', name: 'flight2', img: plane  , Price : '10000$', month :'Jan', to : 'Egypt' },
        { id: '7', name: 'flight3', img: plane  , Price : '10000$', month :'Mar' , to : 'Italy' },
        { id: '8', name: 'flight1', img: plane  , Price : '10000$',month :'Apr' , to : 'paliestine' },
        { id: '9', name: 'flight3', img: plane  , Price : '10000$',month :'Mar' , to : 'paliestine' },
        { id: '10', name: 'flight3', img: plane  , Price : '10000$',month :'Jan' , to : 'Italy' },
        { id: '11', name: 'flight2', img: plane  , Price : '10000$',month :'Apr' , to : 'Turky' },
        { id: '12', name: 'flight1', img: plane  , Price : '10000$', month :'Mar' , to : 'Italy' },
        { id: '13', name: 'flight2', img: plane  , Price : '10000$',month :'Apr' , to : 'Turky' },
        { id: '14', name: 'flight1', img: plane  , Price : '10000$',month :'Mar' , to : 'New Yourk' },
        { id: '15', name: 'flight2', img: plane  , Price : '10000$', month :'Apr' , to : 'Turky' },
        
    ];


    const renderItem = ({ item }) => (
        <View style ={styles.items}>
            <Item
                img={item.img}
                name ={item.name}
                price={item.Price}
                Class={item.Class}
                to={item.to}
                //Still working on it
                onPress={{}}
            />
        </View>
    );

    useEffect(() => {
        if (month.trim() === "") {
            setDisData(data);
            setShowFilter(false);
        } else {
            const filteredList = filterItems();
            setDisData(filteredList);
            AsyncStorage.setItem('month', month);
        }
    },[month]);

     // Filter function
    const filterItems = () => {
        if (month === '') {
            return data;
        } else {
            return data.filter(item => item.month === month);
            
        }
    };


    return(
        <ScrollView>
        <View style={styles.container}>
           <Text>Welcome Flights</Text>
           <View style={styles.buttonContainer}>
                    {showFilter&&(<Picker
                        selectedValue={month}
                        onValueChange={(itemValue, itemIndex) => setMonth(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="All.." value=''/>
                        <Picker.Item label="JAN" value='Jan'/>
                        <Picker.Item label="FEB" value='Feb'/>
                        <Picker.Item label="MAR" value='Mar'/>
                        <Picker.Item label="APR" value='Apr'/>
                        <Picker.Item label="MAY" value='May'/>
                        <Picker.Item label="JUN" value='Jun'/>
                        <Picker.Item label="JUL" value='Jul'/>
                        <Picker.Item label="AUG" value='Aug'/>
                        <Picker.Item label="SEP" value='Sep'/>
                        <Picker.Item label="OCT" value='Oct'/>
                        <Picker.Item label="NOV" value='Nov'/>
                        <Picker.Item label="DEC" value='Dec'/>
                    </Picker>)}
                    <MyButton
                        style={styles.button}
                        children={() => (
                            <AntDesign name="filter" size={24} color="black" />
                        )}
                        onPress={() => setShowFilter(true)} // Function reference here
                    />
                    
                </View>
              
           {found&&(
           <View style={styles.listContaier}>
                <FlatList
                    style={styles.list}
                    data={disdata}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    numColumns={1}
                />
            </View>
            )}
            {!found&& (
                <View>
                    <Text>No Flights</Text>
                </View>
            )}
        </ View>
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
    searchContainer:{
        marginLeft:1000,
        flexDirection:'row',
        margin:4,
        padding:2,
    },
    input:{
        width :'55%',
        height :30,
        borderWidth:1,
        borderColor : '#7392b7',
        borderRadius :6 ,
        padding :10,
        margin :8,
        //borderBlockColor :'#c5d5ea' 
    },
});
