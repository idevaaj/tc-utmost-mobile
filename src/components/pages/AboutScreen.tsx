import { View, Text, ActivityIndicator, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigator/HomeStackNavigator'; // Adjust the path if necessary
import HeaderWithIconButtonAndText from '../molecules/HeaderWithIconButtonAndText';
import icons from '../../../constant/IconPath';
import { ApiService } from '../../api/service/ApiService';
import AboutDetailComponent from '../organism/AboutDetailComponent';

// Define the props for AboutScreenComponent
interface AboutScreenProps {
    route: RouteProp<RootStackParamList, 'AboutScreen'>;
}

interface AboutScreenData {
    pageModel: {
        heroContent: {
            model: {
                title: string
            }
        }
        mainContent: any[];
    };
}

const AboutScreen: React.FC<AboutScreenProps> = ({ route }) => {
    //get data that has been throw via navigation params
    const { detailAboutHref } = route.params; // Access the route params

    const navigation = useNavigation();

    const [aboutScreenData, setAboutScreenData] = useState<AboutScreenData | null>(null);

    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    const fetchAboutScreenData = async () => {
        try {
            // Get about screen data
            const aboutScreenData: AboutScreenData[] = await ApiService.getAboutScreenData(detailAboutHref);
            setAboutScreenData(aboutScreenData[0]);
        } catch (error: any) {
            setError(error.message);
            console.log('Failed to fetch about screen:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAboutScreenData();
    }, []);

    const handleRefresh = () => {
        setLoading(true);
        setError(null);
        fetchAboutScreenData();
    };

    if (loading) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error || !aboutScreenData || !aboutScreenData.pageModel) {
        return (
            <View className='flex-1 justify-center items-center'>
                <Text>No Data Available</Text>
            </View>
        );
    }
    

    return (
        <View className='flex-1'>
            <HeaderWithIconButtonAndText
                headerTitle='歷史'
                headerStyle='w-full p-3 justify-center'
                headerIconName={icons['arrow-left-dark']}
                headerTitleStyle='text-2xl text-txt_primary tracking-widest font-NotoSerifTC-Bold'
                iconOnPress={navigation.goBack} />

            <AboutDetailComponent aboutScreenData={aboutScreenData}/>
        </View>
    );
};

export default AboutScreen;
