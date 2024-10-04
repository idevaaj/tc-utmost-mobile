import { View, Text, ImageSourcePropType } from 'react-native';
import React from 'react';
import IconButton from '../atoms/IconButton';

interface HeaderWithIconButtonAndTextProps {
    headerStyle?: string; // Optional: Replace with specific types if needed
    headerTitle: string;
    headerTitleStyle?: string; // Optional: Replace with specific types if needed
    headerTitleFontFamily?: string; // Optional: Replace with specific types if needed
    headerIconName: ImageSourcePropType;
    iconOnPress: () => void; // Function type for the icon press
}

const HeaderWithIconButtonAndText: React.FC<HeaderWithIconButtonAndTextProps> = ({
    headerStyle,
    headerTitle,
    headerTitleStyle,
    headerIconName,
    iconOnPress,
}) => {
    return (
        <View className={headerStyle}>
            <View className="p-5 flex-row items-center justify-between">
                <IconButton width={24} height={24} onPress={iconOnPress} iconUrl={headerIconName} />
                <Text className={headerTitleStyle}>
                    {headerTitle}
                </Text>
                <View className="w-6"></View>
            </View>
        </View>
    );
};

export default HeaderWithIconButtonAndText;
