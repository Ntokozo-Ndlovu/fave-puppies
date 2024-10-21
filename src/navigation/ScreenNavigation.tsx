import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { LoginScreen } from 'screens';
import { RegisterScreen } from 'screens';
import { ViewDogScreen } from 'screens';
import { HomeNavigationTabs } from './HomeScreenNavigation';
import { Colors } from '@constants';
import { View } from 'react-native';


const screenStack = createNativeStackNavigator();

export const MyScreenNavigationStack = ()=>{
    return (
        <NavigationContainer>
                <screenStack.Navigator
                screenOptions={{
                    headerStyle:{
                        backgroundColor:Colors.light.background
                    },
                    headerTintColor:Colors.light.text,
                    headerShadowVisible:false,
                    headerTitleStyle:{
                        fontWeight:'bold',
                        fontSize: 25,   
                    } 
                }}
 
                >
                    <screenStack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{title: "Login",
                            headerShown:false
                        }}
                        >
                    </screenStack.Screen>
                    <screenStack.Screen
                        name="Register"
                        component={RegisterScreen}
                        options={{title: "Register",
                            headerShown: false
                        }}
                        >
                            
                    </screenStack.Screen>
                    <screenStack.Screen
                        name="Home" options={{
                            headerShown:false
                        }}
                        
                        component={HomeNavigationTabs}
                        >
                    </screenStack.Screen>
                    <screenStack.Screen
                        name="ViewDog"
                        options={{headerTitle:'',
                            headerShown: true,
                            headerTransparent: true,
                            headerShadowVisible: false,
                        
                        }}
                        component={ViewDogScreen}
                        >
                    </screenStack.Screen>
                </screenStack.Navigator>


        </NavigationContainer>




    );


}
