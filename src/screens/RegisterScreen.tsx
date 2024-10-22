import React from "react"
import {  StyleSheet, SafeAreaView, View ,Text, Pressable, TextInput} from "react-native"
import { useState } from "react"

import { Colors } from "@constants"


export const RegisterScreen = ({navigation}:any)=>{
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [retypedPassword, setRetypedPassword] = useState("");
    

    return <SafeAreaView style={styles.container}>
        <View style={styles.registerInfoContainer}>
            <Text style={styles.registerInfoText}>
            Register New Account
            </Text>
        </View>
        <View style={styles.registerInputsContainer} >
        <TextInput style={styles.userInput} placeholderTextColor={Colors.light.text } placeholder="Name" onChangeText={(text:any)=> setName(text)} />
        
        <TextInput style={styles.userInput} placeholderTextColor={Colors.light.text }  placeholder="Surname" onChangeText={(text:any)=> setSurname(text)} />
        
        <TextInput style={styles.userInput} placeholderTextColor={Colors.light.text }  placeholder="Username" onChangeText={(text:any)=> setUsername(text)} />

        <TextInput style={styles.userInput} placeholderTextColor={Colors.light.text }  placeholder="Password" onChangeText={(text:any)=> setPassword(text)} />

        <TextInput style={styles.userInput} placeholderTextColor={Colors.light.text }  placeholder="Password" onChangeText={(text:any)=> setPassword(text)} />
        </View>

        <View style={styles.buttonContainer} >
        <Pressable  style={styles.registerButton} onPress={()=> navigation.navigate('Home')}><Text style={styles.registerButtonText}>Register</Text></Pressable> 
            <Text>Click <Text onPress={()=> navigation.navigate('Login')}>here </Text> to go back to login 
        </Text>
    </View>
    </SafeAreaView>
}


const styles = StyleSheet.create({
    buttonContainer:{
        width: '100%',
        height: 200,
        justifyContent:'center',
        alignItems: 'center',
        color: Colors.light.text
    },
    container: {
        backgroundColor: Colors.light.background,
        flex: 1,
        paddingTop: 30,
        justifyContent:'flex-end'
    },
        registerButton:{
    backgroundColor: Colors.light.secondary,
    height: 60,
    width: '80%',
    justifyContent: 'center',
    alignItems:'center',
    marginBottom: 2,
    borderRadius: 15,
    color: Colors.light.text
},
registerButtonText:{
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.light.text
},
    registerInfoContainer:{
        position:'absolute',
        top:'5%',
        width:'100%',
        height:'10%',
        justifyContent:'center',
        alignItems:'center'
    },
    registerInfoText:{
        fontSize:20,
        color: Colors.light.text
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
        fontSize:10,
        color: Colors.light.text
    },
    registerInputsContainer:{
        position:'absolute',
        top:'15%',
        height: '60%',
        justifyContent:'space-evenly',
        width:'100%',
        paddingLeft:10
    }
})
