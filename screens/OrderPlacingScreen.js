import React, { Component } from 'react'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useEffect } from 'react';

const OrderPlacingScreen = () => {

    const navigation = useNavigation();
    const [bar, setBar] = useState(0)

    setTimeout(() => {
        setBar(bar + 0.1)
    }, 500);

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery')
        }, 6000);
    }, [])

    return (
        <SafeAreaView className='items-center justify-center h-full w-full bg-[#19c7b9]'>
            <Animatable.Image
                source={{ uri: 'https://media.giphy.com/media/mWaLPeeQLPT3i/giphy.gif' }}
                className='h-56 w-56 rounded-full'
            />
            <Animatable.Text
                animation="slideInUp" iterationCount={1}
                className='text-lg text-white mt-7' >
                Waining for resturent to acccept your order
            </Animatable.Text>
            <Progress.Bar progress={bar} width={200} height={7} className='mt-5 rounded-xl' color='white' />
        </SafeAreaView>
    )

}

export default OrderPlacingScreen
