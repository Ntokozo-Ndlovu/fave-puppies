import React from "react";

import { StyleSheet, View, ScrollView,Text, SafeAreaView, ActivityIndicator} from "react-native"
import { useSelector , useDispatch} from 'react-redux';
import { useEffect } from "react";


import { DogCard } from "components";
import { Colors } from "@constants"
import { fetchRandomListOfDogBreedURL } from "../store/HomeScreenSlice";
import { AppDispatch, RootState } from "store";
import { DogBreed } from "models";
import { setDogBreed } from "store/ViewDogSlice";


export const HomeScreen = ({navigation}:any)=>{
    const isLoading = useSelector((state:RootState)=> state.home.isLoading);
    const dogBreedsList:DogBreed[]  = useSelector((state:RootState)=> state.home.dogs);
    const dispatch = useDispatch<AppDispatch>();
  
    const _goViewDogScreen = (dogBreed:DogBreed)=> {    
         dispatch(setDogBreed(dogBreed));
        navigation.navigate("ViewDog");
    }
   
    useEffect(()=>{
        dispatch(fetchRandomListOfDogBreedURL());
    },[])
  
    return <SafeAreaView style={styles.container}>
        {isLoading ? <ActivityIndicator size="large" />
        :
        <ScrollView>     
        <Text style={styles.descriptionText} >View Dog Pictures</Text>
      
        <View style={styles.imagesContainer}>
            {
            dogBreedsList.map((dogBreed,index)=>    
            <DogCard key={index}  onPress={(dogBreed:DogBreed)=> _goViewDogScreen(dogBreed)} dogBreed={dogBreed} />
        )
        }
    </View>
    </ScrollView>}
        </SafeAreaView>
}


const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.light.background,
        flex:1,
        flexDirection: 'column',
        height: '100%',
        color: Colors.light.text
    },
    imagesContainer:{
        height: '100%',
        width: '100%',
        flexDirection:'column',
        flexWrap: 'nowrap',
        justifyContent:'space-between',
        flex:1,
        padding:4
    },
    descriptionText:{
        marginTop:10,
        padding:5,
        fontSize: 18,
        fontWeight:'600',
        color: Colors.light.secondary,
        paddingVertical:5,
        paddingHorizontal:10
    }
 })