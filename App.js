import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialNavigator } from './material-top-tabs/MaterialNavigator';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="materialnavigator" component={MaterialNavigator} />
      </Stack.Navigator>
  </NavigationContainer>
  );
}