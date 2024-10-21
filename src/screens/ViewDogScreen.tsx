import { useSelector } from 'react-redux'
import { View, Image, Text, StyleSheet, Pressable, SafeAreaView} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

import { Colors } from '@constants';
import { RootState } from 'store';


export const ViewDogScreen = ()=>{
    const dogBreed = useSelector((state:RootState)=> state.viewDogBreed.dogBreed);

    return (<SafeAreaView style={ styles.container}>
        <Image style={styles.image}  source={{uri: dogBreed?.url}}></Image>
        <View style={styles.descriptionContainer}>
        <Text style={styles.name}> {dogBreed?.name}</Text>
        <Pressable>
        <Ionicons name="logo-whatsapp" size={28} color={Colors.light.text} />
        </Pressable>
        </View>
    </SafeAreaView>)
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.light.background,
        flex: 1,
        flexDirection:'column',
      },
    image:{
        width: '100%',
        flex:12
    },
    name:{
        fontSize: 25,
        color: Colors.light.text
    },
    descriptionContainer:{
        bottom:0,
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',    
        alignItems:'center',
        flex:2,
        paddingHorizontal:20
    }
})


//Util stuff
