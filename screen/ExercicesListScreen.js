import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

import { AntDesign } from '@expo/vector-icons'; 




const ExercicesListScreen = (props) => {
    const {container, exotext, touchablebtn, container2, iconstyle } = styles;


    const goTo1 = () => {
        props.navigation.push("Root");
    }

    const goTo2 = () => {
        props.navigation.push("Root", {
            screen: "Exo2"
        });
    }

    const goTo3 = () => {
        props.navigation.push("Root", {
            screen: "Exo3"
        });
    }

    const goTo4 = () => {
        props.navigation.push("Root", {
            screen: "Exo4"
        });
    }

    const goTo5 = () => {
        props.navigation.push("Root", {
            screen: "Exo5"
        });
    }

    const goTo6 = () => {
        props.navigation.push("Root", {
            screen: "Exo6"
        });
    }

    const goTo7 = () => {
        props.navigation.push("Root", {
            screen: "Exo7"
        });
    }

    const goTo8 = () => {
        props.navigation.push("Root", {
            screen: "Exo8"
        });
    }

    const goTo9 = () => {
        props.navigation.push("Root",{
            screen: "Exo9"
        });
    }

    const goTo10 = () => {
        props.navigation.push("Root", {
            screen: "Exo10"
        });
    }

    const goTo11 = () => {
        props.navigation.push("Root",{
            screen: "Exo11"
        });
    }

    const goTo12 = () => {
        props.navigation.push("Root", {
            screen: "Exo12"
        });
    }






    return (

       <ScrollView vertical>

        <View style={container}> 
                <TouchableOpacity style={touchablebtn} onPress={goTo1}>
                <View style={container2}>
                    <Text style={exotext}>  exo numero 1 </Text>
                    <AntDesign style={iconstyle} name="rightcircle" size={24} color="black" />
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={touchablebtn} onPress={goTo2}>
                <View style={container2}>
                    <Text style={exotext}>  exo numero 2 </Text>
                    <AntDesign style={iconstyle} name="rightcircle" size={24} color="black" />
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={touchablebtn} onPress={goTo3}>
                <View style={container2}>
                    <Text style={exotext}>  exo numero 3 </Text>
                    <AntDesign style={iconstyle} name="rightcircle" size={24} color="black" />
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={touchablebtn} onPress={goTo4}>
                <View style={container2}>
                    <Text style={exotext}>  exo numero 4 </Text>
                    <AntDesign style={iconstyle} name="rightcircle" size={24} color="black" />
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={touchablebtn} onPress={goTo5}>
                <View style={container2}>
                    <Text style={exotext}>  exo numero 5 </Text>
                    <AntDesign style={iconstyle} name="rightcircle" size={24} color="black" />
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={touchablebtn} onPress={goTo6}>
                <View style={container2}>
                    <Text style={exotext}>  exo numero 6 </Text>
                    <AntDesign style={iconstyle} name="rightcircle" size={24} color="black" />
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={touchablebtn} onPress={goTo7}>
                <View style={container2}>
                    <Text style={exotext}>  exo numero 7 </Text>
                    <AntDesign style={iconstyle} name="rightcircle" size={24} color="black" />
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={touchablebtn} onPress={goTo8}>
                <View style={container2}>
                    <Text style={exotext}>  exo numero 8 </Text>
                    <AntDesign style={iconstyle} name="rightcircle" size={24} color="black" />
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={touchablebtn} onPress={goTo9}>
                <View style={container2}>
                    <Text style={exotext}>  exo numero 9 </Text>
                    <AntDesign style={iconstyle} name="rightcircle" size={24} color="black" />
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={touchablebtn} onPress={goTo10}>
                <View style={container2}>
                    <Text style={exotext}>  exo numero 10 </Text>
                    <AntDesign style={iconstyle} name="rightcircle" size={24} color="black" />
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={touchablebtn} onPress={goTo11}>
                <View style={container2}>
                    <Text style={exotext}>  exo numero 11 </Text>
                    <AntDesign style={iconstyle} name="rightcircle" size={24} color="black" />
                </View>
                </TouchableOpacity>

                <TouchableOpacity style={touchablebtn} onPress={goTo12}>
                <View style={container2}>
                    <Text style={exotext}>  exo numero 12 </Text>
                    <AntDesign style={iconstyle} name="rightcircle" size={24} color="black" />
                </View>
                </TouchableOpacity>

            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#272E80',
        width: '100%',
    },

    container2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },

    
    touchablebtn: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: 60,
        backgroundColor: "#FEFEFE",
        marginTop: 10,
        borderRadius: 8,

    },

    

    exotext: {
        textTransform: 'capitalize',
        color: '#272E80',
        fontSize: 11,
        fontFamily: "joran",
        padding: 20

    },  

    iconstyle: {
        color: "#5DBFD4"
    }

   

})

export default ExercicesListScreen;


