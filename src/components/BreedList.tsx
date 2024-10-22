import React from "react"
import { View , StyleSheet , StatusBar, ScrollView} from "react-native"
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
    const headerHeight = useHeaderHeight();
    const statusBarHeight = insets.top;
    
return<View style={[styles.container, {top: 15 + statusBarHeight + headerHeight}]}>
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



