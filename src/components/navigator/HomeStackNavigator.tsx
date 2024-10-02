import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../pages/HomeScreen';
import DevotionScreen from '../pages/DevotionScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Define the type for the Stack Navigator
type RootStackParamList = {
    HomeScreen: undefined;
    DevotionScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const HomeStackNavigator: React.FC = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='DevotionScreen' component={DevotionScreen} />
            </Stack.Navigator>
        </GestureHandlerRootView>
    );
};

export default HomeStackNavigator;
