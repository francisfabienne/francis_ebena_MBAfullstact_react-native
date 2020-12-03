import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'

const Exo2Screen = (props) => {
    const {container, exotext, btn, alrt} = styles;

    const direBonjour = () => (
        <View style={alrt}>
            <Text>{ console.alert("Alert\nBonjour")}</Text>
        </View>
    )
     


    

    return (

        <View style={container}>
            <View>
                <Button 
                    style={btn} 
                    onPress={direBonjour}
                    title="Button1"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#transparant',
        width: '100%',
    },

    exotext: {
        textTransform: 'capitalize',
        color: '#272E80',

    },

    btn: {
        padding: 15,
        color: "#fff",
        backgroundColor: '#272E80',
        fontSize: 11,
        textTransform: "lowercase"
    }, 

    alrt: {
        justifyContent: "center",
        alignItems: "center",
    }

});

export default Exo2Screen;


