import React from "react";
import{safeAreaView , View , Pressable ,Text , StyleSheet ,Image} from 'react-native';
import { Link } from "expo-router";



export default function Item ({img , onPress , name , price , type , Class , to}) {

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
                        <Text style={styles.text}>{price}</Text>
                        <Text style={styles.text}>{type}</Text>
                        <Text style={styles.text}>{Class}</Text>
                        <Text style={styles.text}>{to}</Text>
                    </View>
                    
                </Pressable>
                       

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        width: '100%', // Set container width to 100% of the page
        backgroundColor: '#ecf0f1',
        padding: 8,
        borderRadius: 5,
        marginBottom: 10,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#d3dfe8', // Use a color from your palette
        padding: 10,
        width: '100%', // Set button width to 100% of the container
    },
    text: {
        fontSize: 18,
        marginLeft: 10,
        color: '#000000', // Use a color from your palette
    },
    textcontainer: {
        flex: 1,
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 5,
    },
});
