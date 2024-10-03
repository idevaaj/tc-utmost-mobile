import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';

interface OutlineButtonProps extends TouchableOpacityProps {
  title: string;
  titleClassName?: string;
  btnClassName?: string;
  fontFamily?: string;
  onPress: () => void; // Add any specific type if needed, e.g., (event: GestureResponderEvent) => void
}

const OutlineButton: React.FC<OutlineButtonProps> = ({ 
  title, 
  titleClassName, 
  onPress, 
  btnClassName, 
  fontFamily 
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`w-36 h-12 ${btnClassName}`}
    >
      <Text className={`${titleClassName}`} style={{ fontFamily }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default OutlineButton;
