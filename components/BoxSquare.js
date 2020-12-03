import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Square from './SquareList';

const BoxSquare = () => {

    

    return (
        <View >
            <Square backgroundColor = "#272E80"/>
            <Square backgroundColor = "#1A2855"/>
            <Square backgroundColor = "#101A33"/>
        </View>
    )
}


const styles = StyleSheet.create({
  
});


export default BoxSquare;
