import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native'
import React from 'react'

const SplashScreen: React.FC = () => {
    return (
        <SafeAreaView className="flex-1 bg-slpash_background">
            <StatusBar translucent={true} barStyle="light-content" backgroundColor="transparent" />
            <View className="flex-1 justify-center items-center">
                <Image source={require('../../../assets/images/logo/logo.png')} className="w-36 h-20" />
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen