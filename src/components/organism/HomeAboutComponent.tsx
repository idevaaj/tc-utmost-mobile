import { View, Text } from 'react-native';
import React from 'react';
import HomeScreenBlockRegistryRenderer from '../block-renderer/HomeScreenBlockRenderer';
import TextButton from '../atoms/TextButton';

interface HomeAboutComponentProps {
  homeAboutData: any; // Replace `any` with the actual type of your homeAboutData if available
}

const HomeAboutComponent: React.FC<HomeAboutComponentProps> = ({ homeAboutData }) => {
  return (
    <View className="p-8 w-max bg-white">
      <View className="flex flex-col">
        <View className="pb-8 flex flex-row justify-between items-center">
          <Text
            className="text-2xl text-zinc-800 font-NotoSerifTC-Bold tracking-widest" 
          >
            歷史
          </Text>
          <TextButton
            title="進一步了解"
            textClassName="text-base text-[#DAAF69] font-NotoSerifTC-Bold tracking-widest"
          />
        </View>
        {homeAboutData && <HomeScreenBlockRegistryRenderer block={homeAboutData} />}
      </View>
    </View>
  );
};

export default HomeAboutComponent;
