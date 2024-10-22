import React from 'react';
import { useSelector } from 'react-redux'
import { View, Image, Text, StyleSheet, Pressable, SafeAreaView} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

import { Colors } from '@constants';
import { RootState } from 'store';
import { openShareDialog, ShareOptions } from 'services/share/Share';



export const ViewDogScreen = ()=>{
    const dogBreed = useSelector((state:RootState)=> state.viewDogBreed.dogBreed);
    const onSharePress = ()=>{
        if(dogBreed){
            const options:ShareOptions ={
                title: dogBreed.name,
                url: dogBreed.url,
                subject: 'My favorite dog breed'
            }
            openShareDialog(options)
        }
     }
     
    return (<SafeAreaView style={ styles.container}>
        <Image style={styles.image}  source={{uri: dogBreed?.url}}></Image>
        <View style={styles.descriptionContainer}>
        <Text style={styles.name}> {dogBreed?.name}</Text>
        <Pressable onPress={()=> onSharePress()}>
        <Ionicons name="share" size={28} color={Colors.light.text} />
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
        flex:12,
        resizeMode:'contain'
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
