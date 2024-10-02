import { View, Text } from 'react-native'
import React from 'react'

interface DividerComponentProps {
  color: string
}

const Divider: React.FC<DividerComponentProps> = ({color}) => {
  return (
    <View className={`w-full h-3 ${color}`}></View>
  )
}

export default Divider