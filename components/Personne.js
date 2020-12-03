import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const Personne = ({nom}) => {
    return (

      <View style={styles.container}>
         <View style={styles.personne}>
             <Text style={styles.text}>{nom}</Text>
         </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        marginHorizontal: 20,
        borderBottomColor: '#fff',
        borderBottomWidth: 2
    },

    personne: {
        backgroundColor: "#272E80",
        marginHorizontal: 20
    },

    text: {
        fontSize: 11,
        color: '#fff',
        fontFamily: 'joran',
        textAlign: 'center',
    }
});


export default Personne;
