import React ,{useState} from "react";
import { View , Text , TextInput , Pressable , StyleSheet} from 'react-native';
import {Link} from 'expo-router';

export default function Register() {
    const [Email , setEmail] = useState('');
    const [Password , setPassword] = useState('');
   //w const auth = getAuth(app);

    // const handelSignUp = () =>{
    //     createUserWithEmailAndPassword(auth, Email, Password)
    //     .then((userCredential) => {
    //         console.log("done!") ;
    //         const user = userCredential.user;
           
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log(errorMessage) ;
    //     });
    // }
    return(
        <View style ={styles.container}>
            <Text style = {styles.header}>SignUp</Text>
            <TextInput
                placeholder="Email"
                value ={Email}
                onChangeText={(text) => {setEmail(text)}}
                style ={styles.input}
            />
            <TextInput
                placeholder="Password"
                value ={Password}
                onChangeText={(text) => {setPassword(text)}}
                style ={styles.input}
                secureTextEntry
            />
             <Pressable
                    onPress={{}}
                    style = {styles.button}
                >
                    <Text style ={styles.textb}>SignUp</Text>
                </Pressable>
            <Link href='/Login' asChild>
               
                    <Text style ={styles.text}>I have an account</Text>
            </Link> 
            
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header:{
        fontSize:20,
    },
    input:{
        width :'90%',
        height :50,
        borderWidth:1,
        borderColor : '#7392b7',
        borderRadius :6 ,
        padding :10,
        margin :8,
        //borderBlockColor :'#c5d5ea' 
    },
    button:{
        margin:8,
        width :'90%',
        height :30 ,
        color : '#7392b7',
        borderRadius :6,
    },
    textb:{
        fontSize : 10,
        color :'#c5d5ea'
    },
    
})