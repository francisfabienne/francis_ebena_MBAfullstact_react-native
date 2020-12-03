import React from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'

import Listpersonne from '../components/Listpersonne'


const Personnes = [
    { Name: "francis-ebena", id: "1" },
    { Name: "jacque Omombo", id: "2" },
    { Name: "Joran ebena", id: "3" },
    { Name: "Justine kabalu", id: "4" },
    { Name: "Bogaly bongo", id: "5" },
    { Name: "Genesis ebena", id: "6" },
    { Name: "Jorguelle nlandu", id: "7" },
    { Name: "rené dupré",  id: "8" },
    { Name: "durand Marchal", id: "9" },
    { Name: "alexandre cartier", id: "10" },
    { Name: "Théo rupil", id: "11" },
    { Name: "francis-ebena", id: "12" },
    { Name: "jacque Omombo", id: "13" },
    { Name: "Joran ebena", id: "14" },
    { Name: "Justine kabalu", id: "15" },
    { Name: "Bogaly bongo", id: "16" },
    { Name: "Genesis ebena", id: "17" },
    { Name: "Jorguelle nlandu", id: "18" },
    { Name: "rené dupré",  id: "19" },
    { Name: "durand Marchal", id: "20" },
    { Name: "alexandre cartier", id: "21" },
    { Name: "Théo rupil", id: "22" },
    { Name: "francis-ebena", id: "23" },
    { Name: "jacque Omombo", id: "24" },
    { Name: "Joran ebena", id: "25" },
    { Name: "Justine kabalu", id: "26" },
    { Name: "Bogaly bongo", id: "27" },
    { Name: "Genesis ebena", id: "28" },
    { Name: "Jorguelle nlandu", id: "29" },
    { Name: "rené dupré",  id: "30" },
    { Name: "durand Marchal", id: "31" },
    { Name: "alexandre cartier", id: "32" },
    { Name: "Théo rupil", id: "33" }
]



const Exo8Screen = (props) => {
    const {container, exotext} = styles;
    return (
       <ScrollView >
            <View style={styles.container}>
                <Listpersonne Personnes={Personnes}/>
            </View>
       </ScrollView> 
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

export default Exo8Screen;