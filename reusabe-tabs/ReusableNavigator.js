import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View } from 'react-native';
import ReusableFirstTab from './ReusableFirstTab';
import ReusableSecondTab from './ReusableSecondTab';
import ReusableThirdTab from './ReusableThirdTab';

const Tab = createMaterialTopTabNavigator();



export function ReusableNavigator({name}) {
  return (
    <View style={{flex:1}}>
    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 15 },
      tabBarItemStyle: { minWidth:'30%' },
      tabBarActiveTintColor: 'black',
      tabBarStyle: { backgroundColor: 'lightgreen', width:'100%' },
    }}
    // tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen 
      name="ReusableFirst" 
      children={props => <ReusableFirstTab name={name} {...props} />}
      options={{ tabBarLabel: 'First' }} />
      <Tab.Screen 
      name="ReusableSecond" 
      children={props => <ReusableSecondTab name={name} {...props} />}
      options={{ tabBarLabel: 'Second' }} />
      <Tab.Screen 
      name="ResuableThird" 
      children={props => <ReusableThirdTab name={name} {...props} />}
      options={{ tabBarLabel: 'Third' }} />
    </Tab.Navigator>
    </View>
  );
}