import { View, Text } from 'react-native'
import React from 'react'

const MainScreen: React.FC = () => {
  return (
    <View className='flex-1 bg-background'>
      <Text className='font-serif-bold text-2xl text-text_primary'>關於《竭誠獻上》</Text>
      <Text className='font-serif-light text-base text-text_primary'>是一位偉大的屬靈導師，</Text>
    </View>
  )
}

export default MainScreen