import { View, Text } from 'react-native'
import React from 'react'

interface QuoteComponentProps {
    data: {
      quote: string;
      quoteName: string;
      contentLink: string;
      contentType: string[];
    };
  }
  
  const QuoteComponent: React.FC<QuoteComponentProps> = ({ data }) => {

    const [name, degree] = data.quoteName.split(' ')
  
    return (
      <View className='p-8 justify-center items-center'>
        <Text className='text-2xl font-NotoSerifTC-Bold text-center text-txt_active tracking-widest'>{name}</Text>
        <Text className='text-2xl font-NotoSerifTC-Bold text-center text-txt_active tracking-widest'>{degree}</Text>
        <View className='h-6'></View>
        <Text className='text-base font-NotoSerifTC-Light text-center text-txt_primary tracking-widest'>{data.quote}</Text>
      </View>
    );
  };
  
  export default QuoteComponent;
  