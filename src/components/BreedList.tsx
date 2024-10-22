import React from "react"
import { View , StyleSheet , StatusBar, Platform } from "react-native"
import { useHeaderHeight } from '@react-navigation/elements';

import Constants from 'expo-constants';
import { ListItem , IListItem} from "./ListItem"
import { Colors } from "@constants"




interface Props{
    list:IListItem[],
    handler:Function
}
export const BreedList = (props:Props)=>{
    
    const list:IListItem[] = props.list || [];
    const headerHeight =  useHeaderHeight();

    const statusBarHeight =  (Platform.OS == 'android' ? StatusBar.currentHeight : Constants.statusBarHeight)|| 0;       
    const heightStatusAndHeader = 15 + headerHeight + statusBarHeight;
  
    return<View style={[styles.container, {top: heightStatusAndHeader}]}>
           {list.map((item,index)=><ListItem onPress={()=>{props.handler(item.name)}} key={index} >{item.name}</ListItem>)}
        </View>
    }

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        width:'100%',
        maxHeight:500,
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor: Colors.light.background
    }
})



