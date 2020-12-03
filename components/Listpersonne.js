import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Personne from './Personne'

const Listpersonne = ({Personnes}) => {
    
    const renderpersonne = ({item}) => {
        return (
            <View style={styles.container}>
               <Personne nom={item.Name}/>
            </View>
        )
    }
    return (
        <FlatList 
           data={Personnes}
           renderItem={(item) => renderpersonne(item)}
           keyExtractor={item => item.id}
           contentContainerStyle={styles.height}
        />
    )
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: "center",
       alignItems: "center",
       width: "100%",
       backgroundColor: '#272E80',
   },

  
});


export default Listpersonne;
