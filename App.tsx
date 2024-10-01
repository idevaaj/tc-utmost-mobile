import React, { useEffect, useState } from 'react';
import SplashScreen from './src/components/pages/SplashScreen';
import MainScreen from './src/components/pages/MainScreen';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <SplashScreen />
  }

  return <MainScreen />
}

export default App