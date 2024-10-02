import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DevotionScreen from '../pages/DevotionScreen';

// Define the type for the Stack Navigator
type RootStackParamList = {
  DevotionScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const DevotionStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='DevotionScreen' component={DevotionScreen} />
    </Stack.Navigator>
  );
};

export default DevotionStackNavigator;
