import { View, Text, ActivityIndicator, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { ApiService } from '../../api/service/ApiService';
import { dailyDevotionalBlockSelector } from '../block-selector/DailyDevotionBlockSelector';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import HeroComponent from '../organism/HeroComponent';
import Divider from '../atoms/Divider';
import HomeQuoteComponent from '../organism/HomeQuoteComponents';
import HomeAboutComponent from '../organism/HomeAboutComponent';


interface PageData {
    page: {
        title: string;
        image: {
            url: string;
        };
        mainContent: any[]; // Consider creating a more specific type for mainContent
    };
}

interface HomeData {
    pageModel: {
        homeResource: any[];
        quotes: any[];
        homeAbout: any;
    };
}

// Define the navigation type
type RootStackParamList = {
    Home: undefined; 
    Devotion: { screen: string }; 
};

const HomeScreen: React.FC = () => {
    const [pageData, setPageData] = useState<PageData | null>(null);
    const [compData, setCompData] = useState<any | null>(null); // Consider defining a specific type for compData
    const [homeData, setHomeData] = useState<HomeData | null>(null);
  
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchDailyDevo = async () => {
        try {
            // Get daily devotion data
            const todayDate = "2024-08-30";
            const selectedEdition = 'classic';
            const pageDataResponse: PageData = await ApiService.getTodayDevotion(selectedEdition, todayDate);
            setPageData(pageDataResponse);

            // Get home screen data
            const homeScreenData: HomeData = await ApiService.getHomeScreenData();
            setHomeData(homeScreenData);

            // Get daily devotion block data for hero component
            const componentData = dailyDevotionalBlockSelector(pageDataResponse);
            setCompData(componentData);
        } catch (error: any) {
            setError(error.message);
            console.log('Failed to fetch daily devo:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDailyDevo();
    }, []);

    const handleRefresh = () => {
        setLoading(true);
        setError(null);
        fetchDailyDevo();
    };

    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handlePressedReadDevotion = () => {
        navigation.navigate('Devotion', { screen: 'DevotionScreen' });
    };

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error || !pageData || !pageData.page) {
        return (
            <View className='flex-1 justify-center items-center'>
                <Text>No Data Available</Text>
            </View>
        );
    }

    return (
        <View className="flex-1">
            <ScrollView showsVerticalScrollIndicator={false}>
                <View className="bg-gray-100">
                    <HeroComponent
                        title={pageData.page.title}
                        titleStyle="text-3xl text-white font-NotoSerifTC-Bold"
                        titleFontFamily="PlayfairDisplay-Bold"
                        description={compData?.devotionalBlock}
                        descStyle="py-3 text-xl text-white font-NotoSerifTC-Light"
                        descFontFamily="WorkSans-Italic"
                        numberOfLines={2}
                        btnTitle="閱讀"
                        btnStyle="mt-2 w-34 h-12 text-sm text-center justify-center items-center bg-emerald-900"
                        btnTitleStyle='text-base text-white tracking-widest font-NotoSerifTC-Bold'
                        btnFontFamily="WorkSans-Medium"
                        onPress={handlePressedReadDevotion}
                        imgUrl={pageData.page.image.url}
                    />
                    <Divider color='bg-[#F5F5F5]' />
                    <HomeQuoteComponent quoteComponentData={homeData?.pageModel.quotes || []} />
                    <Divider color='bg-[#F5F5F5]' />
                    <HomeAboutComponent homeAboutData={homeData?.pageModel.homeAbout} />
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
