import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'


const Exo7Screen = () => {
    
    
    const [name, setName] = useState('');

    // const getName = () => { 
    //     const name= name;
    //     return(
    //         <View>
    //             <Text>salut{name}</Text>
    //         </View>
    //     )
    //     useState('');
    
    return (
        <View style={styles.container}>
            <Text style={styles.exotext}> Quel est votre nom: </Text>
            <TextInput 
                style={styles.input}
                placeholder="e.g John Doe"
                onChangeText={(text) => setName(text)}
            />
             <TouchableOpacity style={styles.btn} onPress={() => alert(`hello ${name}`)}>
                <Text style={styles.btnText} >getName</Text>
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
    },

    exotext: {
        textTransform: 'capitalize',
        color: '#272E80',
    },

    input: {
        borderWidth: 1,
        borderColor: "#272E80",
        padding: 8,
        margin: 10,
        width: "50%",
        borderRadius: 3
    }, 

    btn: {
        backgroundColor: '#272E80',
        padding: 8,
        margin: 10,
        width: "50%",
        borderRadius: 3
    },

    btnText: {
        color: '#fff',
        fontSize: 11,
        textAlign: 'center'
    }

   

})

export default Exo7Screen;


