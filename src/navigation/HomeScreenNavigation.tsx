import * as React from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HeaderTitleProps } from '@react-navigation/elements'
import Ionicons from '@expo/vector-icons/Ionicons'

import { HomeScreen } from 'screens';
import { GuessDogBreedScreen } from 'screens';
import { Colors } from '@constants';
import { HomeHeader } from 'components*';

const Tab = createBottomTabNavigator();



export const HomeNavigationTabs = ()=>{
    return<Tab.Navigator 
    screenOptions={{
        tabBarActiveBackgroundColor:Colors.light.background,
        tabBarInactiveBackgroundColor:Colors.light.background,
        tabBarStyle:{
            borderTopWidth:0
        },
        tabBarHideOnKeyboard:true,
        headerStyle:{
            backgroundColor:Colors.light.background
        },
        headerTitleContainerStyle:{
            width:'100%'
        },
        headerTintColor:Colors.light.text,
        headerShadowVisible:false,
        headerTitleStyle:{
            fontWeight:'bold',
            fontSize: 25,   
        } 
    }}>
      <Tab.Screen name="HomeScreen" options={{
        title:'Home',
       tabBarActiveTintColor:Colors.light.text,
        tabBarIcon:()=>  <Ionicons name="home" size={28} color={Colors.light.text} />
       ,
        headerTitle:(props:HeaderTitleProps)=> <HomeHeader>{props.children}</HomeHeader>,
      
    }} component={HomeScreen} />
      <Tab.Screen name="Guess Breed Game" options={{
        headerShown:false,
        tabBarActiveTintColor:Colors.light.text,
        tabBarIcon:()=>  <Ionicons name="checkmark-circle-outline" size={28} color={Colors.light.text} />
       ,
       
     }} component={GuessDogBreedScreen} />
    </Tab.Navigator>

}



