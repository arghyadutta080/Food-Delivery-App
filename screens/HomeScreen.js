import React, { Component, useLayoutEffect } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/Entypo'
import { ScrollView } from "react-native";

import Category from "../components/Home/Category";
import Offer from "../components/Home/Offer";
import Feature from "../components/Home/Feature";
import Discount from "../components/Home/Discount";

const HomeScreen = () => {

    return (
        <SafeAreaView className=" bg-white">

            {/* Header */}
            <View className=" flex-row justify-between mt-2 mx-3 pb-4">
                <View className=" flex-row space-x-2 items-center ">
                    <Image
                        src="https://images.unsplash.com/photo-1619454016518-697bc231e7cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                        className=" h-9 w-9 rounded-full"
                    />
                    <View>
                        <Text className=" text-sm text-gray-500">Deliver Now</Text>
                        <Text className=" font-bold text-xl">Current Location <Icon name="down" size={20} color="#00CCBB" /></Text>
                    </View>
                </View>
                <Icon2 name="user-circle-o" size={33} color="#00CCBB" />
            </View>

            {/* Search */}
            <View className="flex-row items-center mx-3 pb-4 space-x-2">
                <View className=" flex-row flex-auto space-x-2 py-1 px-2 items-center bg-gray-200">
                    <Icon name="search1" size={18} />
                    <TextInput placeholder="Resturents and cuisines" keyboardType="default" className=" text-sm" />
                </View>
                <Icon3 name="sound-mix" size={28} color="#00CCBB" />
            </View>

            {/* Body */}
            <ScrollView showsVerticalScrollIndicator={false} className="bg-gray-100">
                {/* categories */}
                <Category />
                {/* Offer near you */}
                <Offer />
                {/* Feature */}
                <Feature />
                {/* Tasty Discount */}
                <Discount />
            </ScrollView>

        </SafeAreaView>
    );
};

export default HomeScreen;
