import { View, Text } from 'react-native';
import React from 'react';
import HomeScreenBlockRegistryRenderer from '../block-renderer/HomeScreenBlockRenderer';
import TextButton from '../atoms/TextButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
// Import the type for the navigation
import { RootStackParamList } from '../navigator/HomeStackNavigator'; // Adjust the path as needed



// Define the type for the navigation prop
type AboutDetailNavigationProp = StackNavigationProp<RootStackParamList, 'AboutScreen'>;


interface HomeAboutComponentProps {
  homeAboutData: any; // Replace `any` with the actual type of your homeAboutData if available
}

const HomeAboutComponent: React.FC<HomeAboutComponentProps> = ({ homeAboutData }) => {

  // Now use the correct navigation prop type
  const navigation = useNavigation<AboutDetailNavigationProp>();

  const handlePress = () => {
    if (homeAboutData?.link?.href) {
      navigation.navigate('AboutScreen', { detailAboutHref: homeAboutData.link.href });
    }
  };

  return (
    <View className="p-8 w-max bg-white">
      <View className="flex flex-col">
        <View className="pb-8 flex flex-row justify-between items-center">
          <Text
            className="text-2xl text-txt_primary font-NotoSerifTC-Bold tracking-widest"
          >
            {homeAboutData.sectionTitle}
          </Text>
          <TextButton
            title={homeAboutData.link.title}
            textClassName="text-base text-[#DAAF69] font-NotoSerifTC-Bold tracking-widest"
            onPress={handlePress}
          />
        </View>
        {homeAboutData && <HomeScreenBlockRegistryRenderer block={homeAboutData} />}
      </View>
    </View>
  );
};

export default HomeAboutComponent;
