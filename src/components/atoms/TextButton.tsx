import React from 'react';
import { TouchableOpacity, Text, GestureResponderEvent } from 'react-native';

interface TextButtonProps {
  title: string;
  onPress?: (event: GestureResponderEvent) => void; // Optional onPress handler
  textClassName?: string; // Optional class name for styling
  fontFamily?: string; // Optional font family for styling
}

const TextButton: React.FC<TextButtonProps> = ({ title, onPress, textClassName, fontFamily }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text className={textClassName}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;
