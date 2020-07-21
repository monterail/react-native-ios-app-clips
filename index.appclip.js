import {AppRegistry, View, Text} from 'react-native';
import React from 'react';
const AppClip = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>App Clip</Text>
  </View>
);

AppRegistry.registerComponent('ReactNativeAppClip', () => AppClip);
