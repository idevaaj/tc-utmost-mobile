import { Text, TouchableOpacity, GestureResponderEvent } from 'react-native';
import React from 'react';

interface ButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void; // Define the event type for the button press
  titleStyle?: string; // Optional style for the title
  btnStyle?: string;   // Optional style for the button
  btnFontFamily?: string; // Optional font family for the button title
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  titleStyle,
  btnStyle,
  btnFontFamily,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      className={`w-36 h-12 justify-center items-center ${btnStyle}`}
    >
      <Text className={`text-sm text-center ${titleStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
