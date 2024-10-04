import { View, Text, Image } from 'react-native';
import React from 'react';

interface AboutMainContentModel {
    title: string;
    description: string | null;
    image: {
        url: string;
    } | null;
}

interface AboutMainContentComponentProps {
    aboutMainContentData: Array<{
        model: AboutMainContentModel;
    }>;
}

const AboutMainContentComponent: React.FC<AboutMainContentComponentProps> = ({
    aboutMainContentData,
}) => {
    // Check if aboutMainContentData is an array before mapping
    if (!Array.isArray(aboutMainContentData)) {
        return <Text>Error: Expected an array of data.</Text>;
    }

    return (
        <View className="p-8 mb-24">
            {aboutMainContentData.map((content, index) => (
                <View key={index}>
                    {/* Render title */}
                    <Text className="mb-6 font-NotoSerifTC-Light text-lg tracking-widest text-txt_primary">
                        {content.model.title}
                    </Text>

                    {content.model.image?.url ? (
                        <View className="w-max justify-center items-center">
                            <Image
                                className="w-40 h-40"
                                source={{ uri: content.model.image?.url }}
                            />
                        </View>
                    ) : (
                        <Text></Text>
                    )}

                    <Text className="my-2 font-NotoSerifTC-Light text-lg tracking-widest text-txt_primary">
                        {content?.model?.description}
                    </Text>
                </View>
            ))}
        </View>
    );
};

export default AboutMainContentComponent;
