import React from 'react';
import { Component } from 'react';
import FlatList from './Screen_FlatList';
import {getData} from '../api/RandomUsers';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';


class Screen_ViewImportedCards extends Component {
    constructor(props){
      super(props);
      this.state = {
       importedApi: [],
      }
    }
    async getData(){
      try {
        const resultado = await AsyncStorage.getItem("Api");
        this.setState({importedApi: JSON.parse(resultado)})
        console.log(this.state.importedApi)
      } catch(e){
        console.log(e)
      }
    }
    render() {
      const values = this.state.importedApi.map(item =>
        <Text key = {item.login.uuid}> {item.name.first} </Text>)
     
        return(
            <View>
              <Text>Usuarios</Text>
              <TouchableOpacity onPress={ this.getData.bind(this) }>
                <View> 
                  <Text>
                    Mostrar datos importados
                  </Text>
                  {values}
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress = {()=> this.setState({importedApi: []})}>
                <View>
                  <Text>
                    Borrar todos los datos
                  </Text>
                </View>
              </TouchableOpacity>

            </View>
            
            
        )
        }
}
export {Screen_ViewImportedCards};