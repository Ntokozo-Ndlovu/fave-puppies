import React, { useEffect, useState } from 'react';
import { View ,  Share,  TextInput, Text , StyleSheet, Pressable} from 'react-native';
import { HeaderTitleProps } from '@react-navigation/elements';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';


import { Colors } from '@constants';
import { BreedList } from '../components/BreedList';
import { IListItem } from '../components/ListItem';
import { onSearch, fetchRandomDogBreedNames } from "store/HomeHeaderSlice";
import { fetchListOfDogBreedByName } from "store/HomeScreenSlice"
import { AppDispatch, RootState } from "store";


export const HomeHeader = (props:HeaderTitleProps)=>{
    const dispatch = useDispatch<AppDispatch>();
    const [search] = useState('');
    const onSharePress = () => Share.share(shareOptions);

    let list:IListItem[] = [];
    const searchResults = useSelector((state:RootState)=> state.homeHeader.searchResult);
  
    useEffect(()=>{
        dispatch(fetchRandomDogBreedNames());
    },[]);

    if(searchResults)
         list = searchResults

    const [showHomeText, setShowHomeText] = useState(true);
    const makeHomeTextVisible = (visibility:boolean)=>{
        if(search === '' &&  visibility){
            setShowHomeText(true);
            handleSearch('');
        }
            else {

            setShowHomeText(false);
          
        }
    }    
        
    const handleSearch =(searchString:string)=>{
        dispatch(onSearch(searchString));
    }

    const handlerBreedNameSelection = (name:string)=>{
        dispatch(fetchListOfDogBreedByName(name));    
        makeHomeTextVisible(true);
    }
    
    const searchTextBoxComponent =<TextInput style={ styles.searchTextBox } onBlur={()=>makeHomeTextVisible(true)} onFocus={()=> makeHomeTextVisible(false)}  
        onChangeText={(text)=> handleSearch(text)} placeholder='Search' placeholderTextColor={Colors.light.text}></TextInput>
   
   
   return <View style={styles.container}>
    { showHomeText &&   <Text style={styles.headerText}>{props.children}</Text>}
        <View style={[styles.searchContainer, {width: showHomeText ? 40 : '100%'}]}>
        {!showHomeText && searchTextBoxComponent}
        <Pressable onPress={() => setShowHomeText(false)}>
        <Ionicons name="search" size={28} color={Colors.light.text} />
        </Pressable>
    </View>
    {list.length > 0 && <BreedList list={list} handler={handlerBreedNameSelection}></BreedList>}
</View>
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width: '100%'
    },
    headerText:{
        color: "#ffffff",
        fontSize: 20,
        fontWeight:'bold'
    },
    searchContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        width: '100%',
    },
    searchTextBox:{
        color:Colors.light.text,
        width:'80%',
        flex:9,
        fontSize: 18
    }
})