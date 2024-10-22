import React from "react";
import { StyleSheet, View ,Image, Text, TextInput, Button, SafeAreaView, ActivityIndicator } from "react-native";
import { useEffect } from "react";
import { useSelector , useDispatch} from 'react-redux';

import { AppDispatch, RootState } from "store";
import { Colors } from "@constants";
import { fetchRandomDogBreedURL, incrementNumberOfAttempt, incrementNumberOfWin } from "store/GuessDogBreedSlice";
import { checkBreedNameMatch } from "utils";

export const GuessDogBreedScreen = ({})=>{
    const guessDogBreedNumberOfAttempts = useSelector((state:RootState)=> state.guessDog.numberOfAttempts);
    const guessDogBreedNumberOfWins = useSelector((state:RootState)=> state.guessDog.numberOfWins);
    const randomDogBreed = useSelector((state:RootState)=>state.guessDog.randomDogBreedImage);
    let userGuess:string = "";
    
    const dispatch = useDispatch<AppDispatch>();
        useEffect(()=>{
            dispatch(fetchRandomDogBreedURL());
        },[dispatch,guessDogBreedNumberOfWins,guessDogBreedNumberOfAttempts])

    
    const setUserGuess = (guess:string)=>{
        userGuess = guess;
    }
    
    const checkUserGuess = ()=>{
        if(checkBreedNameMatch(userGuess, randomDogBreed.breedName)){
            dispatch(incrementNumberOfWin());
        }
        dispatch(incrementNumberOfAttempt());
    }

  return <SafeAreaView style={styles.container}>     
        <Text style={styles.statsDescription} >Guess Breed Name</Text>
        <View style={styles.statsContainer} >
        <Text style={styles.stats}>Wins: <Text style={ [styles.stats, styles.statsWin] }>{ guessDogBreedNumberOfWins}</Text></Text>
        <Text style={styles.stats}>Lose: <Text style={ [styles.stats, styles.statsLose] }>{ guessDogBreedNumberOfAttempts}</Text></Text>
        </View>
        <View style={styles.statsDescriptionContainer}>
        <TextInput style={styles.textInput} placeholder="Enter your guess?" placeholderTextColor={Colors.light.text} onChangeText={(text)=> setUserGuess(text)}></TextInput>
        <Button  title="Check" onPress={()=> checkUserGuess()}/>
        </View>
            { randomDogBreed.uri ? <Image style={styles.image} source={{uri:randomDogBreed.uri}}></Image> : <ActivityIndicator />}
       </SafeAreaView>
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.light.background,
        flex: 1,
        justifyContent:'flex-end',
        flexDirection:'column',
        alignItems:'center'
    },
    image:{
        width:'100%',
        height:'100%',
        flex:12
    },  
    statsContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        width: '100%',
        flex:2,
        paddingVertical:10
    },
    statsDescriptionContainer:{
        flex:2,
        width: '100%',
        alignItems:'center',
        paddingBottom:10
    },
    statsDescription:{
        color: Colors.light.text,
        padding: 10,
        fontSize: 18
    },
    stats:{
        fontSize: 20,
        color: Colors.light.white
    },
    statsWin:{
        color:'green'
    },
    statsLose:{
        color:'red'
    },
    textInput:{
        width:'80%',
        color:Colors.light.text,
        backgroundColor:Colors.light.secondary,
        height: '50%',
        paddingHorizontal:10
    }
})