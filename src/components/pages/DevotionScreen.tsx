import { View, Text } from 'react-native'
import React from 'react'

// Define the navigation type
type RootStackParamList = {
    Home: undefined; 
    Devotion: { screen: string }; 
};

const DevotionScreen: React.FC = () => {
  return (
    <View>
      <Text>DevotionScreen </Text>
    </View>
  )
}

export default DevotionScreen 