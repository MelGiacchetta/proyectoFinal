import React, { Component } from 'react';
import { render } from 'react-dom';
import {
    View, 
    Text,
    StyleSheet,
    ProgressViewIOSComponent,
} from 'react-native';

export class Screen_FlatList extends Component {
    constructor(){
        super();
        this.state={
            api: [],
        }
    }
    
    personas = [
        {nombre: 'juan',apellido: 'Perez'},
        {nombre: 'Ana',apellido: 'Fernandez'},
        {nombre: 'Ernesto',apellido: 'Perez'},
    ]

render(){
    return(
        <View style={{flex:1}}>
            <FlatList
            data = {this.state.api}
            keyExtractor = { (item, idx) => idx.toString()}
            renderItem= { ({item})=> 
            <Text style={styles.texto}>{item.apellido},{item.nombre}</Text>}
            />
        </View>
    )
}}
const styles = StyleSheet.create({
    texto: {
        fontSize: 20
    }
})