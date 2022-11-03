import React from 'react';
import { Text, View } from 'react-native';

const ReusableThirdTab = ({name}) => {
  return (
    <View style={{flex:1,justifyContent: "center", alignItems: "center", backgroundColor:'gray' }}>
      <Text>
        Welcome to Third Tab inside {name}
      </Text>
    </View>
  );
}

export default ReusableThirdTab;