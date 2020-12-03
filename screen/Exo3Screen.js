import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Exo3Screen = (props) => {
    const {container, exotext, btn} = styles;
    return (

        <View style={container}>
            <TouchableOpacity style={btn}>
                <View>
                    <Text style={exotext}> Say Hello</Text>
                </View>
            </TouchableOpacity>
                
            <TouchableOpacity style={btn}>
                <View>
                    <Text style={exotext}> Say GoodMorning</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#transparant',
        width: '100%',
    },

    exotext: {
        textTransform: 'capitalize',
        color: '#fff',
        fontSize: 11,
        

    },

    btn: {
        marginHorizontal: 20,
        paddingHorizontal: 15,
        backgroundColor: "#272E80",
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginBottom: 15,
        borderRadius: 3
    }

   

})

export default Exo3Screen;


