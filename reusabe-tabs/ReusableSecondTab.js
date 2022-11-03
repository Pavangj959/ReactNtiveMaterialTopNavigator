import React from 'react';
import { Text, View } from 'react-native';

const ReusableSecondTab = ({name}) => {
  return (
    <View style={{flex:1,justifyContent: "center", alignItems: "center", backgroundColor:'pink' }}>
      <Text>
        Welcome to Second Tab inside {name}
      </Text>
    </View>
  );
}

export default ReusableSecondTab;