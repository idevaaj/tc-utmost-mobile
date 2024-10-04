import { View, Text } from 'react-native'
import React from 'react'

interface AboutHeroComponentProps {
    aboutHeroData: any
}

const AboutHeroComponent: React.FC<AboutHeroComponentProps> = ({ aboutHeroData }) => {
    return (
        <View className='flex w-max px-8 py-12 bg-[#443851] justify-center items-center'>
            <Text className='font-NotoSerifTC-Light text-lg tracking-normal text-white text-center'>{aboutHeroData?.model.title}</Text>
        </View>
    )
}

export default AboutHeroComponent