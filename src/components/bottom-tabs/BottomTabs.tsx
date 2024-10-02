import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, Text } from "react-native";
import icons from "../../../constant/IconPath";
import HomeScreen from "../pages/HomeScreen";
import DevotionScreen from "../pages/DevotionScreen";
import MoreScreen from "../pages/MoreScreen";
import HomeStackNavigator from "../navigator/HomeStackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabs: React.FC = () => {

    let color: string;

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerStyle: {
                    height: 80
                },
                headerShown: false,
                headerTitleStyle: {
                    fontSize: 24,
                    color: 'midnightblue',
                    fontWeight: '300'
                },
                headerTitleAlign: 'center',
                tabBarIcon: ({ focused }) => {
                    let uriPath: string;


                    switch (route.name) {
                        case '首頁':
                            uriPath = focused ? 'home' : 'home-outline';
                            break;
                        case '靈修':
                            uriPath = focused ? 'devotion' : 'devotion-outline';
                            break;
                        case '更多':
                            uriPath = focused ? 'more' : 'more-outline';
                            break;
                        default:
                            uriPath = 'home'; // Default icon
                    }

                    return <Image source={icons[uriPath]} style={{ width: 24, height: 24 }} />;
                },
                tabBarStyle: {
                    height: 74,
                    paddingBottom: 10
                },
                tabBarLabelStyle: {
                    paddingBottom: 5,
                },
                tabBarIconStyle: {
                    marginTop: 10
                },
            })}
        >
            <Tab.Screen 
                name="首頁" 
                component={HomeStackNavigator} 
                options={{
                    tabBarLabel: ({ focused }: { focused: boolean }) => (
                        <Text className={`${focused ? 'text-txt_active' : 'text-txt_primary'}`}>首頁</Text>
                    ),
                }} 
            />
            <Tab.Screen 
                name="靈修" 
                component={DevotionScreen} 
                options={{
                    tabBarLabel: ({ focused }: { focused: boolean }) => (
                        <Text className={`${focused ? 'text-txt_active' : 'text-txt_primary'}`}>靈修</Text>
                    ),
                }} 
            />
            <Tab.Screen 
                name="更多" 
                component={MoreScreen} 
                options={{
                    tabBarLabel: ({ focused }: { focused: boolean }) => (
                        <Text className={`${focused ? 'text-txt_active' : 'text-txt_primary'}`}>更多</Text>
                    ),
                }} 
            />
        </Tab.Navigator>
    );
};

export default BottomTabs;