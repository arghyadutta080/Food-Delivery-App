import { useNavigation } from '@react-navigation/native'
import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const OfferCard = (props) => {

    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity className="mx-1 bg-white pb-4"
                onPress={() => {
                    navigation.navigate('Restaurant', { name: props.name, img: props.img, price: props.price, cat: props.cat, location: props.location, des: props.des })
                }} >
                <Image source={{ uri: props.img }} className=" h-32 w-60" />
                <View className="pt-3 pl-2">
                    <Text className="font-bold text-xl text-gray-800">{props.name}</Text>
                    <View className='text-md flex-row space-x-3 items-center'>
                        <Icon name='star-rate' size={20} color='#00CCBB' />
                        <Text className="text-[#00CCBB] text-lg">{props.price}</Text>
                        <Text className="text-gray-500 text-lg">{props.cat}</Text>
                    </View>
                    <View className='text-md flex-row space-x-3 items-center'>
                        <Icon name='location-on' size={20} color='#00CCBB' />
                        <Text className="text-gray-500 text-lg">nearby</Text>
                        <Text className="text-gray-500 text-lg">{props.location}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )

}

export default OfferCard
