import React, { Component, useState } from 'react'
import { Image, Text, TouchableOpacity, View, SafeAreaView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectBasketItemsWithId } from '../../features/basketSlice';

const MenuItemCard = (props) => {

    const [isPressed, setIsPressed] = useState(false);


    // ***** Operation to send data to global store in app, items array in basketSlice.js ***** //

    const dispatch = useDispatch();

    // in which card we are clicking, we are getting the id of that card and 
    // then we are passing and adding the information of that card in form of action.payload in item array in basketSlice.js
    // this item array is the global basket of the app, where every item with same or different id, which we are adding is stored in the basket 
    const addItemsToBasket = () => {
        dispatch(addToBasket({ id: props.id, name: props.name, price: props.price, desc: props.desc, img: props.img }))
    }

    const removeItemsFromBasket = () => {
        dispatch(removeFromBasket({ id: props.id }))
    }


    // ***** Operation to get data from global store in app, items array in basketSlice.js ***** //
    
    // using UseSelector hook to get the items from the items array of basketSlice.js , and then we are passing the id of the card in which we are clicking the + button
    // and then inside the selectBasketItemsWithId function we are filtering the items array and then we are getting the items which have the same id as the id of the card which we are clicking
    const items = useSelector((state) => selectBasketItemsWithId(state, props.id));


    return (
        <View className={`px-4 py-4 border-t border-gray-300 bg-white`}>
            <TouchableOpacity className="flex-row justify-between" onPress={() => { setIsPressed(!isPressed) }}>
                <View className='flex-1 pr-8 space-y-1'>
                    <Text className='text-2xl'>{props.name}</Text>
                    <Text className='text-gray-500'>{props.desc}</Text>
                    <Text className='text-gray-500'>$ {props.price}</Text>
                </View>
                <Image source={{ uri: props.img }} className=" h-20 w-20" />
            </TouchableOpacity>
            {isPressed && <View className='flex-row mt-4 space-x-3 items-center'>
                <TouchableOpacity onPress={removeItemsFromBasket} >
                    <Icon name='minuscircle' size={30} color={items.length > 0 ?'#00CCBB':'#808080'} />
               </TouchableOpacity>

                <Text className='text-lg'>{items.length}</Text>

                <TouchableOpacity onPress={addItemsToBasket} >
                    <Icon name='pluscircle' size={30} color='#00CCBB' />
                </TouchableOpacity>
            </View>}
        </View>
    )
}

export default MenuItemCard
