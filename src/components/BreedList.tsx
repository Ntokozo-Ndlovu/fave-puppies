import React from "react"
import { View , StyleSheet , StatusBar, Platform, ScrollView} from "react-native"
import { useHeaderHeight } from '@react-navigation/elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ListItem , IListItem} from "./ListItem"
import { Colors } from "@constants"




interface Props{
    list:IListItem[],
    handler:Function
}
export const BreedList = (props:Props)=>{
    const insets = useSafeAreaInsets();
    const list:IListItem[] = props.list || [];
    let heightStatusAndHeader = 0
    const headerHeight =  useHeaderHeight();
    if(Platform.OS == 'android' && StatusBar.currentHeight){
        heightStatusAndHeader = 15 + headerHeight + StatusBar.currentHeight
    }
    else if(Platform.OS == 'ios' && StatusBar.currentHeight){
    heightStatusAndHeader = 15 + headerHeight + insets.top;
    }

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



