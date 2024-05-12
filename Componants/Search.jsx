import React , {useEffect ,useState} from "react";
import { View , Text , TextInput , StyleSheet , FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import MyButton from "./MyButton";


export default function Search({onPress}){
    const [query , setQuery] = useState('');
   


    return(
        <View style={styles.searchContainer}>
            
            <MyButton 
                style={styles.button}  
                onPress={onPress}
                children={() => (
                    <AntDesign name="search1" size={20} color="black" />
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
