import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useFocusEffect, useRoute, RouteProp } from '@react-navigation/native';
import { ApiService } from '../../api/service/ApiService';
import DailyDevotionalComponent from '../organism/DailyDevotionalComponent';
import dayjs from 'dayjs';

const DevotionScreen: React.FC = () => {
  const todayDate = dayjs().format('YYYY-MM-DD');
  const [selectedDate, setSelectedDate] = useState<string>(todayDate);
  const [tempDate, setTempDate] = useState<string>(todayDate); // Temporary date state
  const [selectedEdition, setSelectedEdition] = useState<string>('classic');
  const [devotion, setDevotion] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchDevotion = async (edition: string, date: string) => {
    setError(null);
    setLoading(true);
    try {
      const response = await ApiService.getTodayDevotion(edition, date);
      setDevotion(response);
    } catch (err: any) {
      setDevotion(null);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevotion(selectedEdition, selectedDate);
  }, [selectedEdition, selectedDate]);

  // Use useFocusEffect to handle logic when the screen is focused
  useFocusEffect(
    useCallback(() => {
      if (selectedDate === todayDate) {
        setTempDate(todayDate);
        fetchDevotion(selectedEdition, todayDate)
      }
    }, [selectedDate, todayDate])
  );

  // Adjusting the date change handler to match the expected signature
  const handleDateChange = (newDate: string) => {
    const newFormattedDate = dayjs(newDate).format('YYYY-MM-DD'); // Format to YYYY-MM-DD for API
    //console.log('New selected date:', newFormattedDate);
    setSelectedDate(newFormattedDate);
  };


  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error || !devotion || !devotion.page) {
    return (
      <View className='flex-1 justify-center items-center'>
        <Text>No Data Available</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      {/* Fixed Header */}
      <View className="absolute top-0 w-full bg-white z-10">
        <Text className="w-max pl-8 pr-8 pb-8 pt-8 text-2xl text-txt_primary font-NotoSerifTC-Bold tracking-widest">
        今日靈修
        </Text>
      </View>

      <DailyDevotionalComponent devotionalData={devotion} selectedDate={selectedDate} onDateChange={handleDateChange} error={error} />
    </View>
  );
};

export default DevotionScreen;
