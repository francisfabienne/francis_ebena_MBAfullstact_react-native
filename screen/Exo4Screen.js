import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'

const Exo4Screen = (props) => {

    const {container, exotext, btn, btntext} = styles;


    const [count, setCount] = useState(0);
    const printCount = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    


    return (

        <View style={container}>
            <Text style={exotext}> Vous avez cliqué {count} fois</Text>
            <TouchableOpacity onPress={printCount}  style={btn}>
                <Text style={btntext}>Cliquez-Moi</Text>
            </TouchableOpacity>    
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
        paddingTop: 15
    },

    exotext: {
        color: '#272E80',
        marginHorizontal: 20,
        fontSize: 11,

    },

    btntext: {
        color: "#fff",
        fontSize: 11,
    },


    btn: {
        marginHorizontal: 20,
        paddingHorizontal: 15,
        backgroundColor: "#272E80",
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: 15,
        borderRadius: 3
    }

   

})

export default Exo4Screen;


