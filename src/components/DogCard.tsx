import { Colors } from "@constants"
import { View, Image, Text, StyleSheet, TouchableHighlight } from "react-native"

export const DogCard = ({dogBreed,onPress}:any)=>{
    return  <TouchableHighlight onPress={()=> onPress(dogBreed)}> 
    {
   <View style={styles.dogCardContainer} >
            <Image style={styles.image} source={{uri:dogBreed.url}}/>
            <Text style={styles.name}>{dogBreed.name}</Text>
    </View>
}
</TouchableHighlight>

}

const styles = StyleSheet.create({
    dogCardContainer:{
        backgroundColor:'#00000005',
        height: '100%',
        flex:1
    },
    image:{
        width:'100%',
        height:380,
        resizeMode:'contain'
    },
    name:{
        color: Colors.light.text
    }
})