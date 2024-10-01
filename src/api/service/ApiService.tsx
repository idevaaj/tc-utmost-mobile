import { ApiConfig } from '../config/ApiConfig';
import { ApiRepository } from '../repository/ApiRepository';

// Define the types for the function parameters and return value
type Edition = string; // Adjust type as necessary for selectedEdition
type DateString = string; // Adjust type as necessary for selectedDate
type TodayDevotionResponse = any; // Define a proper interface/type based on the expected response structure

export const apiService = {
    // Get today's devotional
    getTodayDevotion: async (selectedEdition: Edition, selectedDate: DateString): Promise<TodayDevotionResponse> => {

        try {
            const url = `${ApiConfig.TODAY_DEVOTION_URL}/${selectedEdition}/${selectedDate}`;
            const response = await fetch(url, { headers: ApiConfig.DEFAULT_HEADERS });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error('Error in apiService.getTodayDevotion:', error);
            throw error;
        }
    },

    //get home screen data
    getHomeScreenData: async () => {
        try {
            const endpoint = `/content/99`;
            return await ApiRepository.get(endpoint);
        } catch (error) {
            console.error('Error in apiService.getHomeScreenData:', error);
            throw error;
        }
    },
};