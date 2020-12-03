import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import Square from './Square'

const SquareList = ({tabSquare}) => {
    
    const renderSquare = ({item}) => {
        return (
            <View style={styles.container}>
               <Square title={item.squareName}/>
            </View>
        )
    }
    return (
        <FlatList 
           data={tabSquare}
           renderItem={(item) => renderSquare(item)}
           keyExtractor={item => item.id}
           contentContainerStyle={styles.width, styles.height}
        />
    )
}

const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: "center",
       alignItems: "center",
       width: "100%"
   },

   width: {
       width: '100%',
   },

   height:{
       height: '100%'
   }
  
});


export default SquareList;
