import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import DevotionScreen from '../pages/DevotionScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AboutScreen from '../pages/AboutScreen';

// Define the type for the Stack Navigator
export type RootStackParamList = {
    HomeScreen: undefined;
    DevotionScreen: undefined;
    AboutScreen: { detailAboutHref: string }; // Ensure the type is correct
  };

const Stack = createStackNavigator<RootStackParamList>();

const HomeStackNavigator: React.FC = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='DevotionScreen' component={DevotionScreen} />
                <Stack.Screen name='AboutScreen' component={AboutScreen} />
            </Stack.Navigator>
        </GestureHandlerRootView>
    );
};

export default HomeStackNavigator;
