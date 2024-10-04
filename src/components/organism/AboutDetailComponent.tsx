import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import AboutMainContentComponent from '../molecules/AboutMainContentComponent'
import AboutHeroComponent from '../molecules/AboutHeroComponent'
import AboutScreenBlockRenderer from '../block-renderer/AboutScreenBlockRenderer'

interface AboutDetailComponentProps {
    aboutScreenData: any
}

const AboutDetailComponent: React.FC<AboutDetailComponentProps> = ({ aboutScreenData }) => {

    return (
        <View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <AboutHeroComponent aboutHeroData={aboutScreenData?.pageModel.heroContent} />
                <AboutMainContentComponent aboutMainContentData={aboutScreenData?.pageModel.mainContent} />
            </ScrollView>
        </View>
    )
}

export default AboutDetailComponent