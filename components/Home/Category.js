import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { data } from '../../data/Data'
import CategoryCard from './CategoryCard'

const Category = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} 
        contentContainerStyle={{
            paddingTop: 10,
            paddingHorizontal: 7,
        }} >
            {
                data.map((category) => {
                    return (
                        <CategoryCard key={category.id} img={category.image} name={category.name} />
                    )
                })
            }
        </ScrollView>
    )
}

export default Category
