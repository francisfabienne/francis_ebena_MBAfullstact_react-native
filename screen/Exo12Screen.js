import React from 'react'
import { View, Text, StyleSheet,} from 'react-native'

const Exo12Screen = (props) => {
    const {container, exotext} = styles;
    return (

        <View style={container}>
            <Text style={exotext}>  exo numero 12 </Text>
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

export default Exo12Screen;


