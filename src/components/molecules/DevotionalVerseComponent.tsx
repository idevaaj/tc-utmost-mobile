import React from 'react';
import { View, Text } from 'react-native';

interface DevotionalVerseComponentProps {
  leftContainerStyle: string; // You can define a more specific type if you have specific class names
  containterStyle: string; // Same as above
  devotionalText: string;
  devotionalVerse: string;
  devotionalTextStyle: string; // Same as above
  devotionalVerseStyle: string; // Same as above
}

const DevotionalVerseComponent: React.FC<DevotionalVerseComponentProps> = ({
  leftContainerStyle,
  containterStyle,
  devotionalText,
  devotionalVerse,
  devotionalTextStyle,
  devotionalVerseStyle,
}) => {
  return (
    <View className={leftContainerStyle}>
      <View className={containterStyle}>
        <Text className={`font-NotoSerifTC-Light ${devotionalTextStyle}`}>{devotionalText}</Text>
        <View className="h-6" />
        <Text className={`font-NotoSerifTC-Bold ${devotionalVerseStyle}`}>{devotionalVerse}</Text>
      </View>
    </View>
  );
}

export default DevotionalVerseComponent;
