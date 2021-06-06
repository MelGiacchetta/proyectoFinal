import React, { Component } from 'react';
import { render } from 'react-dom';
import {getData} from '../api/RandomUsers';

import {
    View, 
    Text,
    StyleSheet,
    FlatList,
} from 'react-native';

export class Screen_FlatList extends Component {
    constructor(){
        super();
        this.state = {
            usuarios: [],
        }
    }  
    // componentDidMount(){
    //     getData()
    //     .then( (usuarios) => {
    //         console.log(usuarios);
    //         this.setState({usuarios: usuarios});
    //     })
    // }
    async getData(){
        try {
          const resultado = await AsyncStorage.getItem("Api");
          this.setState({usuarios: JSON.parse(resultado)})
          console.log(this.state.usuarios)
        } catch(e){
          console.log(e)
        }
      }
        
    renderItem = ({usuario}) => {
        return (

        <View style = {styles.card}>
            <Text style={styles.texto}>Los usuarios son: {usuario.name.first},{usuario.name.last}</Text>
        </View>
                )
    }
    keyExtractor = (item, idx) => idx.toString()

render(){
    return(
        <View style={styles.container}>
            <FlatList
            data = {this.state.usuarios}
            keyExtractor = {this.keyExtractor}
            renderItem = {this.renderItem}
            />
        </View>
    )
}}
// const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'

    },
    texto: {
        fontSize: 20,
    }, 
    card: {
        backgroundColor: "pink", 
        borderStyle: 'solid', 
        borderWidth: 1,
        borderRadius: 10,
        margin: 5,
        width: 250, 
        height: 100,
        padding: 10, 
    }
})