import React, { Component, useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/AntDesign'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const DeliveryScreen = () => {

    const navigation = useNavigation();
    
    const [myLatitude, setMyLatitude] = useState(0);
    const [myLongitude, setMyLongitude] = useState(0);

    useEffect(() => {
        const getPermission = async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }
            const currentLocation = await Location.getCurrentPositionAsync({});
            console.log("currentLocation: ", currentLocation.coords.latitude);
            console.log("currentLocation: ", currentLocation.coords.longitude);
            setMyLatitude(currentLocation.coords.latitude);
            setMyLongitude(currentLocation.coords.longitude);
        };
        getPermission();
    }, []);

    console.log("myLatitude: ", myLatitude);
    console.log("myLongitude: ", myLongitude);

    const coordinates = [
        {
            latitude: 22.59912822631698,
            longitude: 88.37259542660077
        },
        {
            latitude: myLatitude,
            longitude: myLongitude
        },
    ]

    return (
        <View className='bg-[#00CCBB] flex-1'>
            <SafeAreaView className='z-50'>

                {/* Header */}
                <View className='flex-row items-center justify-between m-6'>
                    <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
                        <Icon name='close' size={25} color='white' />
                    </TouchableOpacity>
                    <Text className='text-lg text-white font-light'>Order Help</Text>
                </View>

                {/* Timer Box */}
                <View className='bg-white p-5 mx-5 rounded-lg relative'>
                    <View className='flex-row justify-between items-center'>
                        <View>
                            <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
                            <Text className='text-4xl font-semibold pt-2'>30-45 Minutes</Text>
                            <Progress.Bar width={150} height={7} className='mt-5 rounded-xl' color='#00CCBB' indeterminate={true} />
                        </View>
                        <Icon2 name='bike-fast' size={55} color='#00CCBB' />
                    </View>
                    <Text className='text-lg text-gray-400 pt-3'>Your order is being prepared</Text>
                </View>

            </SafeAreaView>

            {/* Map */}
            <MapView
                initialRegion={{
                    latitude: 22.59912822631698,
                    longitude: 88.37259542660077,
                    latitudeDelta: 0.045,
                    longitudeDelta: 0.045,
                }}
                className='flex-1 -mt-10 z-0'
                mapType='mutedStandard'
            >
                <Marker
                    coordinate={coordinates[0]}
                    title='Delivery Boy'
                    pinColor='#cc0000'
                    image={require('../assets/deliveryboy.png')}
                />

                <Marker
                    coordinate={coordinates[1]}
                    title='Home'
                    pinColor='#cc0000'
                    image={require('../assets/homeLocation.png')}
                />
            </MapView>

            {/* Delivery boy details */}
            <View className='bg-white px-4 py-2 flex-row justify-between items-center'>
                <View className='flex-row space-x-3 items-center'>
                    <Image src='https://media.licdn.com/dms/image/C4D03AQGp4-ZOASJhew/profile-displayphoto-shrink_400_400/0/1662927303975?e=1686787200&v=beta&t=Ff49XQJVHJePs3eKejwpJmlcH2qeTOEMsE3MXif_yE4' className='h-14 w-14 rounded-full' />
                    <View>
                        <Text className='text-lg font-semibold'>Arghya Dutta</Text>
                        <Text className='text-gray-400'>Your delivery boy</Text>
                    </View>
                </View>
                <Text className='text-xl font-semibold text-[#00CCBB]'>Call</Text>
            </View>
        </View>
    )
}

export default DeliveryScreen