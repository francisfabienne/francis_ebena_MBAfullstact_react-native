import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const Square = ({title}) => {
    return (

      <View style={styles.container}>
         <View style={styles.square}>
             <Text style={styles.text}>{title}</Text>
         </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    square: {
        heigth: 75,
        width: 75,
        backgroundColor: "#272E80",
        marginVertical: 20
    },

    text: {
        fontSize: 11,
        color: '#fff',
        fontFamily: 'joran',
        textAlign: 'center',
    }
});


export default Square;
