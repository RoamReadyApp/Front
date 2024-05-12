import React from "react";
import{safeAreaView , View , Pressable ,Text , StyleSheet ,Image} from 'react-native';
import { Link } from "expo-router";



export default function Countries ({img , onPress , name }) {

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
                    <View style ={styles.container}>
                        <Image source={img} style ={styles.imageButton}/>
                    </View>
                    <View style ={styles.buttonText}>
                        <Text style={styles.buttonText}>{name}</Text>
                        {/* <Text style={styles.text}>{price}</Text> */}
                    </View>
                    
                </Pressable>
                        

        </View>
    );

}
const styles = StyleSheet.create({

            button: {
                     
              width: '30%' , 
              height:300,
              marginLeft: 30,
              marginTop: 20,
              justifyContent: "flex-end",
              alignItems:"center",
              backgroundColor: '#fff',
              paddingVertical: 30,
              borderRadius: 20,
              shadowColor: '#fff', // Optional shadow for iOS
              shadowOffset: { height: 1, width: 1 }, // Optional shadow for iOS
              shadowOpacity: 1, // Optional shadow for iOS
              shadowRadius: 1, // Optional shadow for iOS
              elevation: 2 // Optional elevation for Android
            },
            buttonText: {
              color: 'black',
              fontSize: 18,
              textAlign: 'center'
            },
            boldText: {
              fontWeight:'bold',
              color: 'black', // optional if you want the bold text to have the same color
            },
          
            imageButton: {
              width: 180,
              height: 250,
            },
          });