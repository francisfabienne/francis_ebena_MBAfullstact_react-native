import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default class Exo11Screen extends Component {

     state = {
         count: 0
     }

    setCount = () => {
        this.setState({
           count: this.state.count+1
        })
    }


    render() {
        return (
            <View style={styles.container}>
                <Text> PressCount: {this.state.Count}</Text>
                <TouchableOpacity style={styles.btn} onPress={() => this.setCount}>
                    <Text style={styles.btntext}>Btn</Text>
                </TouchableOpacity>
           </View>
        )
    }
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
        borderRadius: 3,
        width: "65%"
    }
})