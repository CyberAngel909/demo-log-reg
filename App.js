import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import Reset from './components/Reset';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen 
        name="Signup" 
        component={Signup}
        options={{headerLeft: null}} 
      />
      <Stack.Screen 
        name="Reset" 
        component={Reset} 
        options={{headerLeft: null}}
      />       
      <Stack.Screen 
        name="Login" 
        component={Login} 
      />
      <Stack.Screen 
       name="Dashboard" 
       component={Dashboard} 
       options={{headerLeft: null}}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}


