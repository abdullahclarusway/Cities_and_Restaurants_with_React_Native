import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { Main, Restaurants, Rest } from './pages'

const Stack = createStackNavigator();



function Router() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="MainPage">
            <Stack.Screen name="MainPage" component={Main} options={{headerShown:false}}/>
            <Stack.Screen name="RestaurantsPage" component={Restaurants} options={{headerShown:false}}/>
            <Stack.Screen name="RestPage" component={Rest} options={{headerShown:false}}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}



export default Router;