import { View, Text, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

interface BibleInOneYearVerseComponentProps {
  data: {
    verse: {
      text: string,
      href: string
    }
  }
}

const BibleInOneYearVerseComponent: React.FC<BibleInOneYearVerseComponentProps> = ({data}) => {

  const onPressLink = () => Linking.canOpenURL(data.verse.href).then(() => {
    Linking.openURL(data.verse.href);
});

  return (
    <View className='py-6 px-3'>
      <Text className='text-2xl text-txt_primary font-NotoSerifTC-Bold tracking-widest'>全年讀經</Text>
      <View className='h-4'></View>
      <TouchableOpacity onPress={onPressLink}>
        <Text className='text-xl text-txt_active font-NotoSerifTC-Light tracking-widest underline'>{data.verse.text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default BibleInOneYearVerseComponent