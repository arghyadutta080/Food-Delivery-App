import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useSelector } from 'react-redux'
import { BasketTotal, selectBasketItems } from '../../features/basketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketCart = () => {

  const navigation = useNavigation();

  const items = useSelector(selectBasketItems);
  const totalCost = useSelector(BasketTotal);

  return (
    <TouchableOpacity className="bg-[#00CCBB] w-full flex-row justify-around py-3 rounded-xl items-center"
      onPress={() => { navigation.navigate('Basket') }} >
      <Text className='text-xl font-semibold text-white bg-[#12a397] px-2 py-1 rounded-lg'>{items.length}</Text>
      <Text className='text-xl font-semibold text-white'> View Basket </Text>
      <Text className='text-xl font-semibold text-white'>$ {totalCost.toFixed(2)}</Text>
    </TouchableOpacity>
  )

}

export default BasketCart
