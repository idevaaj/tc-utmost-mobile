import React from 'react';
import { View } from 'react-native';
import HTMLView from 'react-native-htmlview'

interface CustomMarkdownProps {
  content: string;
}

const CustomMarkdown: React.FC<CustomMarkdownProps> = ({ content }) => {

  // Handle line break
  const convertLineBreaks = (text: string): string => {
    const normalizedText = text.replace(/\s*<br\s*\/?>\s*/gi, '');
    return normalizedText;
  };

  const convertedContent = convertLineBreaks(content);

  return (
    <View className="pb-3 pt-3">
      <HTMLView
        value={convertedContent}
        stylesheet={{
          p: {
            fontFamily: 'WorkSans-Light',
            color: 'rgb(39 39 42)',
            fontSize: 16,
            lineHeight: 24,
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

export default CustomMarkdown;
