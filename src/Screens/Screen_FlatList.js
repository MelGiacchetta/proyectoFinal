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
        this.state={
            api: [],
        }
    }
    componentDidMount(){
        getData()
        console.log("1")
        .then((personas) => {
        this.setState({api: personas})
        })
        }
        
    renderItem = ({item}) => {
        return (
            <Text style={styles.texto}>{item.apellido},{item.nombre}</Text>
                )
    }
    keyExtractor = (item, idx) => idx.toString()

render(){
    return(
        <View style={{flex:1}}>
            <FlatList
            data = {this.state.api}
            keyExtractor = {this.keyExtractor}
            renderItem = {this.renderItem}
            />
        </View>
    )
}}
const styles = StyleSheet.create({
    texto: {
        fontSize: 20
    }
})