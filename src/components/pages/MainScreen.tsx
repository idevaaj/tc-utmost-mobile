import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabs from '../bottom-tabs/BottomTabs'

const MainScreen: React.FC = () => {
  return (
    <NavigationContainer>
      <BottomTabs/>
    </NavigationContainer>
  )
}

export default MainScreen