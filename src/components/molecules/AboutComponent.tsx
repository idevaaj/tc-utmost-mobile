import { View, Text, Image } from 'react-native'
import React from 'react'

interface Banner {
    imageType: string;
    imageAlt: string;
    aspectRatio: number | null;
    url: string;
}

interface AboutComponentProps {
    data: {
        title: string;
        subTitle: string;
        description: string | null;
        image: string;
        banner: Banner;
        link: string | null;
        imageDirection: string | null;
        withFrame: boolean;
        contentLink: string;
        contentType: string[];
    };
}


const AboutComponent: React.FC<AboutComponentProps> = ({ data }) => {
    return (
        <View className="flex flex-row">
            <Image className="w-40 h-40" source={{ uri: data.banner.url }} />
            <View className='w-6'></View>
            <View className="flex-col w-44 justify-center gap-2">
                <Text className="text-2xl text-txt_active font-NotoSerifTC-Bold tracking-widest">想了解</Text>
                <Text className="text-2xl text-txt_primary font-NotoSerifTC-Bold tracking-widest">張博士嗎？</Text>
                <Text className="text-base text-txt_primary font-NotoSerifTC-Light tracking-widest">{data.title}</Text>
            </View>
        </View>
    )
}

export default AboutComponent