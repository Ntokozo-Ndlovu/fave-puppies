import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'


import { HomeScreen } from 'screens';
import { GuessDogBreedScreen } from 'screens';
import { Colors } from '@constants';

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
        headerTitle:(props)=><View style={styles.container}>
            <Text style={styles.headerText}>{props.children}</Text>
            <View style={styles.searchContainer}>
                <TextInput placeholder='Search' placeholderTextColor={Colors.light.text}></TextInput>
                <Ionicons name="search" size={28} color={Colors.light.text} />
            </View>
        </View>,
        headerTintColor:Colors.light.text,
        headerShadowVisible:false,
        headerTitleStyle:{
            fontWeight:'bold',
            fontSize: 25,   
        } 
    }}>
      <Tab.Screen name="HomeScreen" options={{
        title:'Home',
    }} component={HomeScreen} />
      <Tab.Screen name="Guess Breed Game" component={GuessDogBreedScreen} />
    </Tab.Navigator>

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
        width: '50%',
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    
    searchTextBox:{
        color:Colors.light.text
    }
})