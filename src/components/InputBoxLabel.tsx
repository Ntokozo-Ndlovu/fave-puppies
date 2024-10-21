import { StyleSheet , View, Text, TextInput} from "react-native"

import { Colors } from "@constants"

export const InputBoxLabel = ({labelName,onChangeText, placeholder}:any)=>{
return  <View style={styles.inputBoxLabelContainer}>
<Text style={styles.inputText} >{labelName}</Text>
<TextInput onChangeText={(text)=> onChangeText(text)} style={styles.input } placeholder={placeholder} />
</View>
}

const styles = StyleSheet.create({
    inputBoxLabelContainer:{
        width: '60%',
    },    
    input:{
        color: Colors.light.text,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 5
    },
    inputText:{
        fontSize:10
    },
})