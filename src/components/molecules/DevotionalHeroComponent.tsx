import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

interface DevotionalHeroComponentProps {
  imgUrl: string;
  title: string;
  titleStyle: string;
  selectedDateStyle: string;
  onPress: () => void;
  selectedDate: string;
}

const DevotionalHeroComponent: React.FC<DevotionalHeroComponentProps> = ({
  imgUrl,
  title,
  titleStyle,
  selectedDateStyle,
  onPress,
  selectedDate,
}) => {
  return (
    <View>
      <View className="mt-24 px-8">
        <Image className="h-56 rounded-xl" source={{ uri: imgUrl }} />
      </View>
      <View className="flex-col">
        <View className="mx-6 my-8 items-center justify-center text-center">
          <Text className={`${titleStyle}`}>{title}</Text>
          <View className='h-2'></View>
          <TouchableOpacity onPress={onPress}>
            <Text className={`${selectedDateStyle}`}>{selectedDate}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default DevotionalHeroComponent;
