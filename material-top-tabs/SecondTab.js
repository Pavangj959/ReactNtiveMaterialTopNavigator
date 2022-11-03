import React from 'react';
import { Text, View } from 'react-native';
import { ReusableNavigator } from '../reusabe-tabs/ReusableNavigator';

const SecondTab = ({name}) => {
  return (
    <View style={{ flex: 1}}>
      <ReusableNavigator name={name} />
    </View>
  );
}

export default SecondTab;