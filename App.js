

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View , Platform } from 'react-native';
import * as Font from 'expo-font'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack'
// pages

import HomeScreen from './screen/HomeScreen';
import ExercicesListScreen from './screen/ExercicesListScreen';


import Exo1Screen from './screen/Exo1Screen'
import Exo2Screen from './screen/Exo2Screen'
import Exo3Screen from './screen/Exo3Screen'
import Exo4Screen from './screen/Exo4Screen'
import Exo5Screen from './screen/Exo5Screen'
import Exo6Screen from './screen/Exo6Screen'
import Exo7Screen from './screen/Exo7Screen'
import Exo8Screen from './screen/Exo8Screen'
import Exo9Screen from './screen/Exo9Screen'
import Exo10Screen from './screen/Exo10Screen'
import Exo11Screen from './screen/Exo11Screen'
import Exo12Screen from './screen/Exo12Screen'

const {Navigator, Screen } = createStackNavigator();

const Root = () => (      
  <Navigator
    
  screenOptions={options => {
    return {
      headerLeft: null,
      headerStyle: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1.7,
        borderColor: '#fff',
        backgroundColor: '#fff',
        marginBottom: 20,
        borderRadius: 3,
        height: 35
      },
      headerTintColor: "#272E80",

      headerTitleStyle: {
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'bold',
        letterSpacing: 0.9,
        fontFamily: 'joran',
      }
    }
  }} 
  >


    <Screen name="Exo1" component={Exo1Screen}/>
    <Screen name="Exo2" component={Exo2Screen}/>
    <Screen name="Exo3" component={Exo3Screen}/>
    <Screen name="Exo4" component={Exo4Screen}/>
    <Screen name="Exo5" component={Exo5Screen}/>
    <Screen name="Exo6" component={Exo6Screen}/>
    <Screen name="Exo7" component={Exo7Screen}/>
    <Screen name="Exo8" component={Exo8Screen}/>
    <Screen name="Exo9" component={Exo9Screen}/>
    <Screen name="Exo10" component={Exo10Screen}/>
    <Screen name="Exo11" component={Exo11Screen}/>
    <Screen name="Exo12" component={Exo12Screen}/>
  </Navigator>
)

export default function App() {


  const [loading, setLoading] = useState(true);

  const loadFont = async () => {
    try {
      await Font.loadAsync({
        'francis': require('./font/Montserrat-Black.ttf'),
        'joran': require ('./font/Montserrat-Bold.ttf'),
        'justifra': require ('./font/Montserrat-Medium.ttf'),
        'tina': require ('./font/Montserrat-Regular.ttf'),
        'genesis': require ('./font/Montserrat-Light.ttf'),
        'hono': require ('./font/Montserrat-ExtraLight.ttf')
      });
      setLoading(false)


      /*  await c'est pour dire à react native d'attendre jusqu'à ce que la promesse soit 
          tenue et que les polices soient chargées, 
          setLoading(false) sert à mettre à jour la state afin de permettre de ne plus 
          charger etant donné que tout est dejà chargé afin de permettre de passer
          au rendu de BookScreen 
      */

    } catch (e) {
        console.log('erreur', e);
    }
  };

  useEffect(() => {
    loadFont();
    console.log('platfform =', Platform.os);
  }, []);

  

  if(loading){
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    )
  }

  return (
    <NavigationContainer style={styles.container}>
      <Navigator 
        
        screenOptions={options => {
          return {
            title: "Coverproject React Native",
            // headerLeft: null,
            headerStyle: {
              borderBottomColor: '#fff',
              borderBottomWidth: 1.7,
              borderColor: '#fff',
              backgroundColor: '#272E80',
              marginBottom: 30,
              borderRadius: 3,
            },
            headerTintColor: "#fff",

            headerTitleStyle: {
              fontSize: 12,
              textAlign: 'center',
              fontWeight: 'bold',
              letterSpacing: 0.9,
              fontFamily: 'joran',
            }
          }
        }} 

      >
        <Screen 
          name='Home' 
          component={HomeScreen}
        />

        <Screen 
          name='ExercicesList' 
          component={ExercicesListScreen}
          options={options => {
            return {
              title: "Liste des Exercices",
            }
          }}
        />

        <Screen name='Root' component={Root}/>


      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    fontFamily: 'hono',
  },
});
