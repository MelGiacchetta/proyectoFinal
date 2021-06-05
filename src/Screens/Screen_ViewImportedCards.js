import React from 'react';
import { Component } from 'react';
import FlatList from './Screen_FlatList';
import {getData} from '../api/RandomUsers';

import {
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

class Screen_ViewImportedCards extends Component {
    constructor(props){
      super(props);
      this.state= {
       importedApi: [],
      }
    }

    render() {
        return(
            <View>
              <Text>aca mostramos los valores importados</Text>
              <FlatList></FlatList>
              <TouchableOpacity onPress={ this.getData.bind(this)}>
                <View> 
                  <Text>Recuperar datos</Text>
                </View>
              </TouchableOpacity>
            </View>
            
            
        )
        }
}
export {Screen_ViewImportedCards};