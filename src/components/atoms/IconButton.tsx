import React from 'react';
import { TouchableOpacity, Image, ImageSourcePropType } from 'react-native';

interface IconButtonProps {
    width: number;
    height: number;
    iconUrl: ImageSourcePropType; // Type for image sources
    onPress: () => void; // Function type for the press event
}

const IconButton: React.FC<IconButtonProps> = ({ width, height, iconUrl, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Image style={{ width, height }} source={iconUrl} />
        </TouchableOpacity>
    );
};

export default IconButton;
