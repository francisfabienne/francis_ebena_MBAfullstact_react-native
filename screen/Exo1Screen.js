import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Exo1Screen = (props) => {
    const {container, exotext, square} = styles;
    return (

        <View style={container}>
            <View style={square}>
                <Text style={exotext}> Hello World !</Text>
            </View>
        </View>
    )
}
                  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: '#transparant',
        width: '100%',
        
    },

    square: {
        justifyContent: "center",
        alignItems: 'center',
        height: 70,
        width: 70 ,
        backgroundColor: "#272E80",
        position: "absolute"
    },
    
    exotext: {
        textTransform: 'capitalize',
        color: '#fff',
        textAlign: 'center',
        fontSize: 11

    }
    
})

export default Exo1Screen;




























