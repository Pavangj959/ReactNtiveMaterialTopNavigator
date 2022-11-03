import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FirstTab from './FirstTab';
import SecondTab from './SecondTab';

const Tab = createMaterialTopTabNavigator();



export function MaterialNavigator() {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontSize: 20 },
      tabBarItemStyle: { minWidth:'50%' },
      tabBarActiveTintColor: 'black',
      tabBarStyle: { backgroundColor: 'powderblue', width:'100%' },
    }}
    // tabBar={(props) => <MyTabBar {...props} />}
    >
      <Tab.Screen 
      name="First" 
      children={props => <FirstTab name="first" {...props} />}
      options={{ tabBarLabel: 'First' }} />
      <Tab.Screen 
      name="Second" 
      children={props => <SecondTab name="second" {...props} />}
      options={{ tabBarLabel: 'Second' }} />
    </Tab.Navigator>
  );
}