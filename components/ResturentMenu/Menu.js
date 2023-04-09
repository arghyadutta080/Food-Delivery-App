import React from 'react'
import { Text, View } from 'react-native'
import { data } from '../../data/Data'
import MenuItemCard from './MenuItemCard'

const Menu = ({ category }) => {

    const item = data.filter((item) => {
        return (item.category === category)
    })

    return (
        <View>
            {
                item.map((info) => {
                    return (
                        <MenuItemCard key={info.id} id={info.id} img={info.image} name={info.name} desc={info.desc} price={info.price} />
                    )
                })
            }
        </View>
    )

}

export default Menu
