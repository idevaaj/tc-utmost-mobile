import React from 'react';
import { Text, View, ImageBackground, GestureResponderEvent } from 'react-native';
import Button from '../atoms/Button';

interface HomeHeroComponentsWithBackgroundImageProps {
    title: string;
    titleStyle?: string; // You can adjust this based on how you're using it
    titleFontFamily?: string;
    btnTitleStyle: string;
    numberOfLines?: number;
    description: string;
    descFontFamily?: string;
    descStyle?: string;
    btnTitle: string;
    btnStyle?: string; // You can adjust this based on how you're using it
    btnFontFamily?: string;
    onPress: (event: GestureResponderEvent) => void; // Specify the event type for the button press
    imgUrl: string;
}

const HomeHeroComponentsWithBackgroundImage: React.FC<
    HomeHeroComponentsWithBackgroundImageProps
> = ({
    title,
    titleStyle,
    btnTitleStyle,
    numberOfLines,
    description,
    descStyle,
    btnTitle,
    btnStyle,
    btnFontFamily,
    onPress,
    imgUrl,
}) => {
        return (
            <ImageBackground
                className="w-max h-72 brightness-50"
                source={require('../../../assets/images/images/static_background.png')}>
                <View className="p-8 h-72 justify-center items-center">
                    <View className="flex-col">
                        <Text className={`tracking-widest ${titleStyle}`}>
                            {title}
                        </Text>
                        <Text
                            className={`tracking-widest ${descStyle}`}
                            numberOfLines={numberOfLines}
                            ellipsizeMode="tail">
                            {description}
                        </Text>
                        <Button
                            title={btnTitle}
                            onPress={onPress}
                            btnStyle={btnStyle}
                            btnFontFamily={btnFontFamily}
                            titleStyle={btnTitleStyle}
                        />
                    </View>
                </View>
            </ImageBackground>
        );
    };

export default HomeHeroComponentsWithBackgroundImage;
