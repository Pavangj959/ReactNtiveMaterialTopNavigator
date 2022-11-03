import React from 'react';
import { Text, View } from 'react-native';

const ReusableFirstTab = ({name}) => {
  return (
    <View style={{flex:1,justifyContent: "center", alignItems: "center", backgroundColor:'darkblue' }}>
      <Text>
        Welcome to First Tab inside {name}
      </Text>
    </View>
  );
}

export default ReusableFirstTab;