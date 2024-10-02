import { View, Text, Dimensions } from 'react-native';
import { useEffect, useState, memo } from 'react';
import Carousel from 'react-native-reanimated-carousel';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import HomeScreenBlockRegistryRenderer from '../../components/block-renderer/HomeScreenBlockRenderer';

const { width } = Dimensions.get('window');

interface QuoteComponentData {
  model: any; // Replace `any` with the actual type of your model if available
}

interface RectangleIndicatorProps {
  currentIndex: { value: number };
  index: number;
}

const RectangleIndicator = memo(({ currentIndex, index }: RectangleIndicatorProps) => {
  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: currentIndex.value === index ? '#DAAF69' : '#D9D9D9',
    width: currentIndex.value === index ? withTiming(30) : withTiming(20),
  }));

  return <Animated.View style={[{ height: 3, marginHorizontal: 4 }, animatedStyle]} />;
});

interface HomeQuoteComponentProps {
  quoteComponentData: QuoteComponentData[];
}

const HomeQuoteComponent: React.FC<HomeQuoteComponentProps> = ({ quoteComponentData }) => {
  const currentIndex = useSharedValue(0);
  const [carouselText, setCarouselText] = useState<QuoteComponentData[]>();

  useEffect(() => {
    if (Array.isArray(quoteComponentData) && quoteComponentData.length > 0) {
      setCarouselText(quoteComponentData);
    } else {
      console.warn('No valid data received for the carousel');
      setCarouselText([]);
    }
  }, [quoteComponentData]);

  return (
    <View className="flex-1 justify-center items-center bg-white">
      {carouselText && carouselText.length > 0 ? (
        <>
          <Carousel
            loop={true}
            width={width}
            height={340}
            autoPlay={true}
            data={carouselText}
            scrollAnimationDuration={2000}
            onSnapToItem={(index) => {
              currentIndex.value = index;
            }}
            renderItem={({ item, index }) => (
              <HomeScreenBlockRegistryRenderer key={index} block={item.model} />
            )}
          />
          <View className="flex-row mb-6">
            {carouselText.map((_, index) => (
              <RectangleIndicator
                key={index}
                currentIndex={currentIndex}
                index={index}
              />
            ))}
          </View>
        </>
      ) : (
        <Text>No quotes available.</Text>
      )}
    </View>
  );
};

export default HomeQuoteComponent;
