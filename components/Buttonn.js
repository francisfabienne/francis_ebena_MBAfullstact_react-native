import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Buttonn() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btntext}>Btn</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
         flex: 1,
         justifyContent: "center",
         alignItems: "center",
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