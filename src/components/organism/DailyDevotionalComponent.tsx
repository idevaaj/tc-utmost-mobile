import React, { useState } from 'react';
import {
    View,
    ScrollView,
    Modal,
    TouchableWithoutFeedback,
    Text,
} from 'react-native';
import DevotionScreenBlockRegistryRenderer from '../../components/block-renderer/DevotionScreenBlockRenderer';
import DevotionalVerseComponent from '../molecules/DevotionalVerseComponent';
import DevotionalHeroComponent from '../molecules/DevotionalHeroComponent';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import OutlineButton from '../atoms/OutlineButton';

import 'dayjs/locale/zh-cn'

interface DevotionalVerse {
    text: string; // Define any additional properties if needed
    verse: {
        title: string
    }
}

interface DevotionalPage {
    image: {
        url: string;
    };
    title: string;
    authorName: string;
    devotionalVerse: DevotionalVerse; // Ensure this matches your data structure
    mainContent?: Array<{
        model: any;
    }>; // You can further define this based on your structure
}

interface DevotionalData {
    page: DevotionalPage
}

interface DailyDevotionalComponentProps {
    devotionalData: DevotionalData | null;
    selectedDate: string;
    key?: string | number; // key can be either string or number
    onDateChange: (newDate: string) => void;
    error: any; // Define a more specific type if possible
}

const DailyDevotionalComponent: React.FC<DailyDevotionalComponentProps> = ({ devotionalData, selectedDate, key, onDateChange, error }) => {

     // Set the locale to Chinese
    dayjs.locale('zh-cn');
    
    const [isDatePickerVisible, setDatePickerVisibility] = useState<boolean>(false);

    const formatDate = (dateStr: string) => {
        return dayjs(dateStr).format('MM月DD日');
    };

    const handleDateChange = (params: any) => { // Adjust the type to 'any' to handle any structure returned by the DatePicker
        // console.log('Date change params:', params); // Log to inspect the structure of the returned params
    
        const date = params?.date; // Safely access 'date'
        
        if (date) {
            const formattedDate = dayjs(date).format('YYYY-MM-DD'); // Convert to 'YYYY-MM-DD' format
            onDateChange(formattedDate); // Use formatted date
            setDatePickerVisibility(false);
            // console.log("Selected date:", formattedDate);
        }
    };    
    
    return (
        <View className="flex-1">
            {!devotionalData ? (
                <View>
                    <Text>No data available</Text>
                </View>
            ) : (
                <View className="flex-1 justify-center bg-white">
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <DevotionalHeroComponent
                            key={key}
                            imgUrl={devotionalData.page.image.url}
                            title={devotionalData.page.title}
                            titleStyle="text-2xl text-txt_primary text-center font-NotoSerifTC-Bold tracking-widest"
                            selectedDate={formatDate(selectedDate)}
                            selectedDateStyle="text-xl text-txt_primary font-NotoSerifTC-Light tracking-widest"
                            onPress={() => setDatePickerVisibility(true)}
                        />

                        <DevotionalVerseComponent
                            key={key}
                            leftContainerStyle="relative w-max bg-emerald-900"
                            containterStyle="ml-2 p-6 w-max bg-[#F9F4ED]"
                            devotionalTextStyle="text-lg text-txt_primary text-center font-NotoSerifTC-Light tracking-widest"
                            devotionalVerseStyle="text-lg text-txt_primary text-center font-NotoSerifTC-Bold tracking-widest"
                            devotionalText={devotionalData.page.devotionalVerse.text}
                            devotionalVerse={devotionalData.page.devotionalVerse.verse.title}
                        />

                        <View className="w-max p-6 bg-white">
                            {devotionalData.page.mainContent &&
                                devotionalData.page.mainContent.map((block, index) => (
                                    <DevotionScreenBlockRegistryRenderer
                                        key={index}
                                        block={block.model}
                                    />
                                ))}
                        </View>
                    </ScrollView>
                </View>
            )}

            {/* Modal for Date Picker */}
            <Modal
                visible={isDatePickerVisible}
                transparent={true} // Ensure the modal is transparent
                animationType="fade" // Smooth fade animation
                onRequestClose={() => setDatePickerVisibility(false)} // Close on back press
            >
                <TouchableWithoutFeedback onPress={() => setDatePickerVisibility(false)}>
                    <View
                        className="p-8 flex-1 justify-center items-center"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                    >
                        <TouchableWithoutFeedback>
                            <View className="bg-white p-6 rounded-lg">
                                <DateTimePicker
                                    headerButtonSize={20}
                                    calendarTextStyle={{
                                        fontFamily: 'NotoSerifTC-Light',
                                        color: 'rgb(51 51 51)',
                                    }}
                                    headerTextStyle={{
                                        fontFamily: 'NotoSerifTC-Bold',
                                        fontSize: 18,
                                        fontWeight: 'normal',
                                        color: 'rgb(51 51 51)',
                                    }}
                                    todayTextStyle={{
                                        fontFamily: 'NotoSerifTC-Bold',
                                        color: '#DAAF69', // Text color for today's date
                                    }}
                                    todayContainerStyle={{
                                        backgroundColor: 'white', // Background color for today's date container
                                        borderColor: '#DAAF69',
                                        borderWidth: 1, // Add borderWidth if needed
                                    }}
                                    dayContainerStyle={{
                                        backgroundColor: 'transparent', // Set a background if needed
                                        borderColor: 'transparent', // Set border color
                                    }}
                                    weekDaysTextStyle={{ color: 'rgb(51 51 51)' }}
                                    selectedItemColor="#DAAF69"
                                    selectedTextStyle={{ color: '#FFFFFF' }}
                                    headerButtonColor="rgb(51 51 51)"
                                    mode="single"
                                    date={new Date(selectedDate)}
                                    onChange={handleDateChange}
                                    timePicker={false}
                                    locale="zh"
                                />

                                <View className="flex justify-center items-center">
                                    <OutlineButton
                                        title="取消"
                                        titleClassName='font-NotoSerifTC-Bold text-white tracking-widest'
                                        btnClassName='justify-center items-center bg-cta_cancel'
                                        onPress={() => setDatePickerVisibility(false)}
                                    />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

        </View>
    );
};

export default DailyDevotionalComponent;
