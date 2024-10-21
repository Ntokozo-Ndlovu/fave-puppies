import {StyleSheet, View ,Image, Text, TextInput, Button, SafeAreaView} from "react-native";
import { useEffect } from "react";
import { useSelector , useDispatch} from 'react-redux';

import { AppDispatch, RootState } from "store";
import { Colors } from "@constants";
import { fetchRandomDogBreedURL, incrementNumberOfAttempt, incrementNumberOfWin } from "./GuessDogBreedSlice";


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
        if(userGuess === randomDogBreed.breedName){
            dispatch(incrementNumberOfWin());
        }
        dispatch(incrementNumberOfAttempt());
    }

return <SafeAreaView style={styles.container}>
            <Image style={styles.image} source={{uri:randomDogBreed?.uri}}></Image>
        <View style={styles.statsContainer} >
        <Text>Wins: <Text style={ [styles.stats, styles.statsWin] }>{ guessDogBreedNumberOfWins}</Text></Text>
        <Text>Lose: <Text style={ [styles.stats, styles.statsLose] }>{ guessDogBreedNumberOfAttempts}</Text></Text>
        </View>
        <Text>Guess the dog breed?</Text>
        <View>
        <TextInput style={styles.textInput} placeholder="Enter your guess?" onChangeText={(text)=> setUserGuess(text)}></TextInput>
        <Button  title="Check" onPress={()=> checkUserGuess()}/>
        </View>
     </SafeAreaView>
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.light.background,
        flex: 1,
        justifyContent:"flex-end",
        alignItems: "center",
    },
    image:{
        height:600,
        width:'100%',
        position: 'absolute',
        top:0
    },    
    statsContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        width: '100%'
    },
    stats:{
        fontSize: 20,
    },
    statsWin:{
        color:'green'
    },
    statsLose:{
        color:'red'
    },
    textInput:{
        width:'100%'
    }
})