import React from 'react'
import { View, Text, StyleSheet,} from 'react-native'
import BoxSquare from '../components/BoxSquare'
;


const Exo5Screen = (props) => {
    const {container, exotext} = styles;

    return (

        <View style={container}>
             <BoxSquare />
        </View>

      
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#transparant',
        width: '100%',
    },

    exotext: {
        textTransform: 'capitalize',
        color: '#272E80',

    }

   

})

export default Exo5Screen;


