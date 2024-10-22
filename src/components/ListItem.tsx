import { Colors } from "@constants"
import React from "react"
import { View, Text , StyleSheet, Pressable} from "react-native"


export interface IListItem{
    name:string,
    value:string
}

interface props{
    children:string,
    onPress:Function
}
export const ListItem = (props:props)=>{
        return <Pressable onPress={()=> props.onPress()}> 
        <View style={styles.container}>
            <Text style={styles.itemText} >{props.children}</ Text>
        </View></Pressable>
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 60,
        paddingVertical:10
    },
 
    itemText:{
        fontSize: 20,
        color: Colors.light.text
    }
})