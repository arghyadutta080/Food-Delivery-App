import React, { Component, useLayoutEffect } from 'react'
import { Image, Text, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import Icon3 from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native';

import Menu from '../components/ResturentMenu/Menu';
import BasketCart from '../components/ResturentMenu/BasketCart';


const RestaurantScreen = () => {

  const navigation = useNavigation();
  const route = useRoute();

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* entire screen inside scroll view */}
        
        {/* Clicked Food details */}
        <View className='relative bg-white'>
          {/* Food image with back button */}
          <Image source={{ uri: route.params.img }} className='h-56 w-full' />
          <TouchableOpacity className='absolute left-5 top-14 bg-white rounded-full p-1'
            onPress={() => {
              navigation.goBack()
            }} >
            <Icon name='md-arrow-back-sharp' size={25} color='#00CCBB' />
          </TouchableOpacity>
          
          {/* Food description */}
          <View className="py-5 px-4">
            <Text className="font-bold text-3xl text-gray-800">{route.params.name}</Text>
            <View className='flex-row space-x-4 mt-1'>
              <View className='text-md flex-row space-x-2 items-center'>
                <Icon2 name='star-rate' size={20} color='#00CCBB' />
                <Text className="text-[#00CCBB] text-lg">{route.params.price}</Text>
                <Text className="text-gray-500 text-lg">{route.params.cat}</Text>
              </View>
              <View className='text-md flex-row space-x-2 items-center'>
                <Icon2 name='location-on' size={20} color='#00CCBB' />
                <Text className="text-gray-500 text-lg">nearby</Text>
                <Text className="text-gray-500 text-lg">{route.params.location}</Text>
              </View>
            </View>
            <Text className='text-md text-gray-500 mt-1'>{route.params.des}</Text>
          </View>
          <TouchableOpacity className='mt-1 px-4 py-4 flex-row items-center justify-between border-t border-gray-300'>
            <View className='flex-row items-center space-x-4'>
              <Icon3 name='questioncircleo' size={18} color='#00CCBB' />
              <Text className='font-bold text-xl text-gray-700'>Have a food allergy ?</Text>
            </View>
            <Icon3 name='right' size={20} color='#00CCBB' />
          </TouchableOpacity>
        </View>

        {/* Food Menu */}
        <Text className='text-2xl font-bold pt-6 pb-4 pl-4'>Menu</Text>
        <View className=' pb-[71px]'>
          <Menu category={route.params.cat} />
        </View>
      </ScrollView>

      {/* View Basket Button */}
      <View className='absolute bottom-2 left-2 right-2'>
        <BasketCart />
      </View>
    </>
  )

}

export default RestaurantScreen
