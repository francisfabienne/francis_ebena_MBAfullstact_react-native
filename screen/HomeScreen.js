import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import ExercicesListScreen from './ExercicesListScreen'

const HomeScreen = (props) => {

    const goTo = () => {
        props.navigation.push("ExercicesList");
    }

    const {container, touchablebtn, text} = styles;


    return (
        <View style={container}>
            <TouchableOpacity style={touchablebtn} onPress={goTo}>
                <View>
                    <Text style={text}>Explorez la liste d'exercices</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#272E80',
        width: '100%',
    },

    touchablebtn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FDFFFD',
        height: 42,
        width: 'auto',
        borderRadius: 3,
        fontSize: 16,
        borderColor: '#000',
        borderWidth: 0,
    },

    text:{
        fontSize: 12,
        padding: 10,
        color: '#272E80',
        letterSpacing: 0.9,
    }

})

export default HomeScreen;


