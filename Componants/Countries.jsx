import React from "react";
import{safeAreaView , View , Pressable ,Text , StyleSheet ,Image} from 'react-native';
import { Link } from "expo-router";



export default function Countries ({img , onPress , name , ref}) {

    return(
        <View style ={styles.container}>

            
                <Pressable style={({pressed}) =>[
                    {
                        transform: pressed
                            ? [{ scale: 1.1 }] 
                            : [{ scale: 1 }] 
                    },
                    styles.button
                ]} onPress={onPress}>
                    <View style ={styles.imagContainer}>
                        <Image source={img} style ={styles.image}/>
                    </View>
                    <View style ={styles.textcontainer}>
                        <Text style={styles.text}>{name}</Text>
                        {/* <Text style={styles.text}>{price}</Text> */}
                    </View>
                    
                </Pressable>
                        

        </View>
    );

}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'space-between',
//         backgroundColor: '#ecf0f1',
//         padding: 8,
//         flexDirection:'row',
//         alignItems:'center'
//     },
//     button:{
//         borderRadius:5,
//         width : 'auto',
//         height:'auto',
//     },
//     text:{
//         fontSize : 18,
       
        
//     },
//     textcontainer:{
//         flex :1,
//         padding :10,
//     },
//     image:{
//         width: 100, 
//         height: 100, 
//         resizeMode: 'cover',
//         borderRadius: 5,
//     },
//     imagContainer:{
//         padding: 10,
//     }

// })

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
    image: {
        width: 100, // Adjust width as needed
        height: 100, // Adjust height as needed
        resizeMode: 'cover',
        borderRadius: 5,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 18,
    },
    
});