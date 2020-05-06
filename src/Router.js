import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//screens sneakers
import PlayScreen from './Screens/PlayScreen';
import AppScreen from '../App';
import GameOverScreen from './Screens/GameOverScreen';
import LoginScreen from './Screens/Login';
import LeaderBoardScreen from './Screens/LeaderBoard';

console.disableYellowBox = true;
const Stack = createStackNavigator();

  function Router() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">

            <Stack.Screen name= "PlayScreen" component={PlayScreen}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen name= "App" component={AppScreen}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen name= "GameOverScreen" component={GameOverScreen}
            options={{
                headerShown:false
            }}
            />
             <Stack.Screen name= "Login" component={LoginScreen}
            options={{
                headerShown:false
            }}
            />
            <Stack.Screen name= "LeaderBoard" component={LeaderBoardScreen}
            options={{
                headerShown:false
            }}
            />

        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;