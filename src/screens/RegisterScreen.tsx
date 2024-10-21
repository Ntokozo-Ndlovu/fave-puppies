import { Button, StyleSheet, SafeAreaView, View ,Text, TextInput, Pressable} from "react-native"
import { useState } from "react"

import { Colors } from "@constants"
import { InputBoxLabel } from "components"


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
        <InputBoxLabel labelName="Name" placeholder="Name" onChangeText={(text:any)=> setName(text)} />
        
        <InputBoxLabel labelName="Suname" placeholder="Surname" onChangeText={(text:any)=> setSurname(text)} />
        
        <InputBoxLabel labelName="Username" placeholder="Username" onChangeText={(text:any)=> setUsername(text)} />

        <InputBoxLabel labelName="Password" placeholder="Password" onChangeText={(text:any)=> setPassword(text)} />

        <InputBoxLabel labelName="Retype Password" placeholder="Password" onChangeText={(text:any)=> setPassword(text)} />
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
        alignItems: 'center'
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
    borderRadius: 15
},
registerButtonText:{
    color: Colors.light.white,
    fontSize: 20,
    fontWeight: "bold"
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
        fontSize:20
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
