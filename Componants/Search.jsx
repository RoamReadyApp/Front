import React , {useEffect ,useState} from "react";
import { View , Text , TextInput , StyleSheet , FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import MyButton from "./MyButton";


export default function Search({onPress}){
    const [query , setQuery] = useState('');
    // const [orgList , setOrgList] = useState([]);
    // const [disList , setDisList] = useState([]);
     const [showInput, setShowInput] = useState(false);

    // useEffect(() => {
    //     fetch(Data).then(response => response.json())
    //         .then(data => {AsyncStorage.setItem("orgList" , JSON.stringify(data))
    //             .then(() => {
    //                 // setDisList(data);
    //                 setOrgList(data);
    //             }).catch(error => console.error('Error saving data:', error));
    // }).catch(error => console.error('Error saving data:', error));
    // },[]);
    
    // useEffect(() => {
    //     async function fetchFilteredData() {
    //       try {
    //         // Retrieve saved search query from AsyncStorage
    //         const savedSearchQuery = await AsyncStorage.getItem('query');
    //         if (savedSearchQuery) {
    //           setQuery(savedSearchQuery);
    //         }
    //       } catch (error) {
    //         console.error('Error retrieving search query from AsyncStorage:', error);
    //       }
    //     }
    
    //     fetchFilteredData();
    //   }, []);
    

    // useEffect(() => {
    //     if (query.trim() === "") {
    //         setDisList(orgList);
    //         setShowInput(false);
    //     } else {
    //         const filteredList = orgList.filter(
    //             (item) => item.name.toLowerCase().includes(query.toLowerCase())
    //         );
    //         setDisList(filteredList);
    //         AsyncStorage.setItem('query', query);
    //     }
    // },[query , orgList]);

    return(
        <View style={styles.searchContainer}>
            
            <MyButton 
                style={styles.button}  
                onPress={onPress}
                children={() => (
                    <AntDesign name="search1" size={24} color="black" />
                )}
            />
           
        </View>
    );
}

const styles = StyleSheet.create({
    searchContainer:{
        flexDirection:'row',
        margin:4,
        padding:2,
    },
    button:{
        borderBlockColor:'#127acl',
        borderRadius:5,
        width:'auto',
        height:'auto',
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
