import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React from 'react'
import icons from '../../../constant/IconPath';

// Define the type for icon objects
interface IconItem {
  name: string;
  key: string;
}

const MoreScreen: React.FC = () => {

    // TypeScript will infer the type of iconList as IconItem[]
    const iconList: IconItem[] = [
      { name: '分享這個應用程式', key: 'share' },
      { name: '給予', key: 'giving' },
      { name: '幫助', key: 'help-circle' },
      { name: '關於', key: 'info' },
    ];

  return (
     <View className="flex-1 bg-white">
      {/* Fixed Header */}
      <View className="w-full bg-white z-10">
        <Text
          className="w-max px-8 pt-8 pb-6 text-2xl text-zinc-800 font-NotoSerifTC-Bold">
          更多
        </Text>
      </View>
      <View className="flex-col flex-wrap justify-around p-8">
        {iconList.map((icon) => (
          <View className="flex mb-8" key={icon.key}>
            <View className='flex-row items-center'>
              {/* Ensure icons[icon.key] returns a valid ImageSourcePropType */}
              <Image source={icons[icon.key] as ImageSourcePropType} className='w-9 h-9 mr-6 justify-center items-center' />
              <Text className='text-lg text-txt_primary'>{icon.name}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default MoreScreen 