import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from "react-native-animatable"
import * as Progress from "react-native-progress"
import { useNavigation } from '@react-navigation/native'

const PreparingOrderScreen = () => {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery")
    }, 2000)
  }, [])

  return (
    <SafeAreaView className='bg-[#Fffbb4] flex-1 justify-center items-center'>
      <Animatable.Image
        source={require("../assets/animation.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="w-[496px] h-[384px] ml-24"
      />
      <Animatable.Text
        animation={"slideInUp"}
        iterationCount={1}
        className='text-lg my-10 text-[00044b] font-bold text-center'
      >
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} />
    </SafeAreaView>

  )
}

export default PreparingOrderScreen