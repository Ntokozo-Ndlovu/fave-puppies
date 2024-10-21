import { View, Button, Image ,Text, TextInput, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import { useEffect, useRef, useState } from "react";

import { Colors } from "@constants";
import { InputBoxLabel } from "components";


export const LoginScreen = ({navigation}:any)=>{
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("")
   
    const validateUsernameAndPassword = ()=>{
        if(userName !== '' && password !== '')
                return true;
        return false;
    }
    useEffect(()=>{
        console.log("UserName: ", userName);
        console.log("Password: ", password);

    },[userName,password])

    return <View style={ styles.container }>
            <View style={ styles.loginTextInfo }>
            <Text style={ styles.loginTextInfoWelcome } >Welcome <Image style={styles.iconImage} source={require('../../assets/pet.png')}/> Fave Puppy</Text>
            <Text>Login or Create new user</Text>
            </View>
            <View style={ styles.userInputContainer}>
            <InputBoxLabel onChangeText={(text:any)=> setUserName(text)} labelName="Username" placeholder="Username"/>      
            <InputBoxLabel onChangeText={(text:any)=> setPassword(text)} labelName="Password" placeholder="Password"/>      
            </View>
            <View style={styles.buttonContainer} >
            <Pressable  style={styles.loginButton} onPress={()=> navigation.navigate('Home')}><Text style={styles.loginButtonText}>Login</Text></Pressable> 
            <Text>click here to <Text onPress={()=> navigation.navigate('Register')}>Register</Text> 
            </Text>
            </View>
    </View>
}


const styles = StyleSheet.create({
    buttonContainer:{
        width: '100%',
        height: 200,
        justifyContent:'center',
        alignItems: 'center'
    },
    container:{
            backgroundColor: Colors.light.background,
            paddingTop: 20, 
            flex:1,
            justifyContent: "flex-end"
        },
        iconImage:{
            height: 50,
            width: 50
        },
        inputBoxLabelContainer:{
            width: '60%',
        },
        loginTextInfo :{
            position: "absolute",
            top: '25%',
            height:'15%',
            width: '100%',
            justifyContent: 'center',
            alignItems:'center'
        },
        loginTextInfoWelcome:{
            fontSize:30
        },
        userInputContainer:{
            top: '35%',
            width:'100%',
            height: '35%',
            position: 'absolute',
            justifyContent:'space-evenly',
            alignItems: 'center'
        },
        userInput:{
            color: Colors.light.text,
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            borderRadius: 5,
            paddingLeft: 5
        },
        userInputText:{
            fontSize:10
        },
        loginButton:{
            backgroundColor: Colors.light.secondary,
            height: 60,
            width: '80%',
            justifyContent: 'center',
            alignItems:'center',
            marginBottom: 2,
            borderRadius: 15
        },
        loginButtonText:{
            color: Colors.light.white,
            fontSize: 20,
            fontWeight: "bold"
        },
        registerButton:{
        }
  })