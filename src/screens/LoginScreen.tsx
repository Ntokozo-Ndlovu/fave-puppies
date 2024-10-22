import React from "react";
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
            <Text style={ styles.loginTextInfoDescription }>Login or Create new user</Text>
            </View>
            <View style={ styles.userInputContainer}>
            <TextInput style={styles.userInput } onChangeText={(text:any)=> setUserName(text)}  placeholderTextColor={Colors.light.text} placeholder="Username"/>      
            <TextInput style={styles.userInput } onChangeText={(text:any)=> setPassword(text)}  placeholderTextColor={Colors.light.text} placeholder="Password"/>      
            </View>
            <View style={styles.buttonContainer} >
            <Pressable  style={styles.loginButton} onPress={()=> navigation.navigate('Home')}><Text style={styles.loginButtonText}>Login</Text></Pressable> 
            <Text style={styles.registerText}>click <Text style={styles.registerClickText} onPress={()=> navigation.navigate('Register')}>here to Register</Text> 
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
            alignItems:'center',
            color: Colors.light.text
        },loginTextInfoDescription:{
            color:Colors.light.text
        },
        loginTextInfoWelcome:{
            fontSize:30,
            color: Colors.light.text
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
            borderWidth: 0,
            borderRadius: 5,
            paddingHorizontal: 10,
            paddingVertical:5,
            backgroundColor: Colors.light.dark,
            width: '80%'
        },
        userInputText:{
            fontSize:20,
            color: Colors.light.text
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
            fontSize: 20,
            fontWeight: "bold",
            color: Colors.light.text
        },
        registerText:{
            marginTop: 10,
            color: Colors.light.text
        },
        registerClickText:{
            color: Colors.light.text,
            fontWeight:'600'    
        }
  })