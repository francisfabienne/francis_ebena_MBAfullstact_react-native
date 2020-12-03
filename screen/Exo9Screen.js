import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'

export default class Exo9Screen extends Component {

    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            dataSource: []
        }
    }
    
    componentDidMount(){
        fetch('https://randomuser.me/api/?results=100&inc=name')
         .then((response) => response.json())
         .then((responseJson) => {
             this.setState({
                 isLoading: false,
                 dataSource: responseJson
             })
         })
    }

    _renderItem = ({item, index}) => {
        return(
            <View>
                <Text>{item.id+ " " + item.first}</Text>
            </View>
        )
    }
      
    render() {
        let{container} = styles
        let {dataSource, isLoading} = this.state

        if(isLoading){
           return (
            <View style={styles.container}>
              <ActivityIndicator  size="large" animating/>
           </View>
           )
        } else {

            return (
                <View style={container}>
                    <FlatList 
                      data = {dataSource}
                      renderItem={this._renderItem}
                      keyExtractor={(item, index) => index}
                    />
                </View>
            )
        }
        
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    item: {
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#272E80",
    }
})