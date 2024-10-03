import React from 'react';
import { View } from 'react-native';
import HTMLView from 'react-native-htmlview';

interface DevotionalComponentProps {
  data: {
    content: string;
  };
}

const DevotionalComponent: React.FC<DevotionalComponentProps> = ({ data }) => {
  
  // Handle line breaks
  const convertLineBreaks = (text: string): string => {
    const normalizedText = text.replace(/\s*<br\s*\/?>\s*/gi, '');
    return normalizedText;
  };

  const convertedContent = convertLineBreaks(data.content);

  return (
    <View className="p-3">
      <HTMLView
        value={convertedContent}
        stylesheet={{
          p: {
            fontFamily: 'NotoSerifTC-Light',
            color: 'rgb(51, 51, 51)',
            fontSize: 18,
            lineHeight: 34,
            marginVertical: -8,
          },
          em: {
            fontStyle: 'italic',
          },
          a: {
            textDecorationLine: 'underline',
          },
        }}
      />
    </View>
  );
};

export default DevotionalComponent;
