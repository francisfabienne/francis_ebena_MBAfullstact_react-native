import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import SquareList from '../components/SquareList'


const tabSquare = [
    { squareName: "Square1", id: "1" },
    { squareName: "Square2", id: "2" },
    { squareName: "Square3", id: "3" },
    { squareName: "Square4", id: "4" },
    { squareName: "Square5", id: "5" },
    { squareName: "Square6", id: "6" },
    { squareName: "Square7", id: "7" },
    { squareName: "Squar8",  id: "8" },
    { squareName: "Square9", id: "9" },
    { squareName: "Square10", id: "10" },
    { squareName: "Square11", id: "11" },
    { squareName: "Square12", id: "12" },
    { squareName: "Square13", id: "13" },
    { squareName: "Square14", id: "14" },
    { squareName: "Square15", id: "15" },
   
]



const Exo6Screen = (props) => {
    const {container, exotext} = styles;
    return (
       <ScrollView>
            <View style={styles.container}>
                <SquareList tabSquare={tabSquare}/>
            </View>
       </ScrollView> 
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
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

export default Exo6Screen;


