import React from "react";
import{safeAreaView , View , Pressable ,Text , StyleSheet ,Image , Dimensions} from 'react-native';
import { Link } from "expo-router";

const windowWidth = Dimensions.get('window').width;
// Calculate the image width based on a percentage of the window width
const imageWidth = windowWidth * 0.2;

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



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 0,
        
        marginBottom: 10,
    },
    image: {
        width: imageWidth, // Adjust width as needed
        height: imageWidth, // Adjust height as needed
        resizeMode: 'cover',
        borderRadius: 5,
        marginTop:20 ,
        marginLeft :20 ,
        marginRight :20
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
        width: '100%', 
        height: imageWidth *1.25,
        marginLeft: 30,
        marginTop: 20,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#fff',
        // paddingVertical: 30,
        // paddingHorizontal: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 2,
    },
    
});