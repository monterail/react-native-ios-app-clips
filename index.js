import {AppRegistry, View, Text, Button, Linking} from 'react-native';
import React, {useCallback} from 'react';

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    const isSupported = await Linking.canOpenURL(url);

    if (!isSupported) {
      Alert.alert(`Don't know how to open this URL: ${url}`);
      return;
    }
    await Linking.openURL(url);
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const App = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>ReactNative App Clips</Text>
    <OpenURLButton url="https://monterail.com">Open App Clip</OpenURLButton>
  </View>
);

AppRegistry.registerComponent('ReactNativeAppClips', () => App);
